import Template from '../Template';
import { useEffect, useState } from 'react';
import ListDisplay from '../../components/ListDisplay';
import { debounce } from 'lodash';
import ScrollUp from '../../components/ScrollUp';
import LoadingScreen from '../LoadingScreen';

function Browse() {
	const [apis, setApis] = useState();
	const [displayList, setDisplayList] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [sort, setSort] = useState('');
	const [refresh, setRefresh] = useState(false);
	const [canStore, setCanStore] = useState();
	const [backup, setBackup] = useState();

	const sortWays = ['Category', 'Alphabetical', 'Random'];

	useEffect(() => {
		document.title = 'Browse all - Free APIs';
	}, []);

	useEffect(() => {
		try {
			let storage = window['sessionStorage'];
			let x = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			setCanStore(true);
		} catch (e) {
			setCanStore(false);
		}
	}, []);

	useEffect(() => {
		setError(null);
		setIsLoaded(false);

		let stored;

		if (canStore) {
			stored = sessionStorage.getItem('data');
		} else {
			stored = backup;
		}

		if (!stored || refresh) {
			fetch('https://api.publicapis.org/entries')
				.then((response) => response.json())
				.then(
					(data) => {
						if (canStore) {
							setCache(data);
						} else {
							handleBackup(data);
						}
						setIsLoaded(true);
					},
					(error) => {
						setError(error);
						setIsLoaded(true);
					},
				);
			setRefresh(false);
		} else {
			if (canStore) {
				setApis(JSON.parse(stored));
			} else {
				setApis(backup);
			}
			setIsLoaded(true);
		}
	}, [refresh, canStore, backup]);

	const setCache = (result) => {
		let value = result['entries'];
		const unique = [
			...new Map(value.map((api) => [api['API'], api])).values(),
		];
		const uniqueString = JSON.stringify(unique);
		sessionStorage.setItem('data', uniqueString);
		setApis(unique);
	};

	const handleBackup = (result) => {
		let value = result['entries'];
		const unique = [
			...new Map(value.map((api) => [api['API'], api])).values(),
		];
		setBackup(unique);
		setApis(unique);
	};

	const shuffle = () => {
		let shuffled = [...apis];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		setApis([...shuffled]);
		setSort('Random');
	};

	const reset = () => {
		if (canStore) {
			setApis(JSON.parse(sessionStorage.getItem('data')));
		} else {
			setApis(backup);
		}
		setSort('Category');
	};

	const resetSort = () => {
		if (canStore) {
			setApis(JSON.parse(sessionStorage.getItem('data')));
		} else {
			setApis(backup);
		}
		setSort('');
	};

	const alphabet = () => {
		let sorted = apis;
		sorted.sort((a, b) => a['API'].localeCompare(b['API']));
		setApis([...sorted]);
		setSort('Alphabetical');
	};

	const handleSort = (action) => {
		setSort(action);

		switch (action) {
			case '':
				resetSort();
				break;
			case 'Category':
				reset();
				break;
			case 'Alphabetical':
				alphabet();
				break;
			case 'Random':
				shuffle();
				break;
			default:
				break;
		}
	};

	const handleRefresh = () => {
		setIsLoaded(false);
		setRefresh(true);
		setSearchText('');
		resetSort();
	};

	useEffect(() => {
		const matches = (list) => {
			return (
				list['API'].toLowerCase().includes(searchText.toLowerCase()) ||
				list['Description']
					.toLowerCase()
					.includes(searchText.toLowerCase())
			);
		};
		if (apis) {
			setDisplayList(apis.filter(matches));
		}
	}, [searchText, apis, refresh]);

	const searchBar = (
		<input
			placeholder='Search APIs'
			onChange={debounce((e) => setSearchText(e.target.value), 400)}
			className='px-4 my-4 outline-none focus:ring rounded-lg
            hover:shadow focus:shadow w-32 h-10 text-sm md:text-base mx-2'
		/>
	);

	const select = (
		<select
			value={sort}
			onChange={(e) => handleSort(e.target.value)}
			className='px-2 mx-2 my-4 outline-none focus:ring rounded-lg 
            hover:shadow focus:shadow cursor-pointer h-10 text-sm md:text-base 
            bg-gray-300 w-min'
		>
			<option key='' value=''>
				Sort by:
			</option>
			{sortWays.map((method) => (
				<option key={method} value={method}>
					{method}
				</option>
			))}
		</select>
	);

	if (error) {
		return 'Error occurred';
	} else if (!isLoaded) {
		return <LoadingScreen />;
	} else {
		return (
			<Template>
				<ListDisplay
					shuffle={shuffle}
					reset={resetSort}
					search={searchBar}
					select={select}
					includeSelect
					isCategory={sort === 'Category' || sort === ''}
					numResults={displayList.length}
					refresh={handleRefresh}
				>
					{displayList}
				</ListDisplay>
				<ScrollUp />
			</Template>
		);
	}
}

export default Browse;
