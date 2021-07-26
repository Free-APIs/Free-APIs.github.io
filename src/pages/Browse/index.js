import Template from '../Template';
import { useEffect, useState, useCallback } from 'react';
import ListDisplay from '../../components/ListDisplay';
import { debounce } from 'lodash';
import ScrollUp from '../../components/ScrollUp';

function Browse() {
	const [apis, setApis] = useState([]);
	const [displayList, setDisplayList] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [sort, setSort] = useState('');

	const sortWays = ['Category', 'Alphabetical', 'Random'];

	useEffect(() => {
		setError(null);
		setIsLoaded(false);

		const cached = sessionStorage.getItem('data');

		if (!cached) {
			fetch('https://api.publicapis.org/entries')
				.then((response) => response.json())
				.then(
					(data) => {
						onSetResult(data);
						setIsLoaded(true);
					},
					(error) => {
						setError(error);
						setIsLoaded(true);
					},
				);
		} else {
			setApis(JSON.parse(cached));
			setIsLoaded(true);
		}
	}, []);

	const onSetResult = (result) => {
		let value = result['entries'];
		const unique = [
			...new Map(value.map((api) => [api['API'], api])).values(),
		];
		const uniqueString = JSON.stringify(unique);
		sessionStorage.setItem('data', uniqueString);
		setApis(unique);
	};

	const shuffle = () => {
		let shuffled = apis;
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		setApis([...shuffled]);
		setSort('Random');
	};

	const reset = () => {
		setApis(JSON.parse(sessionStorage.getItem('data')));
		setSort('Category');
	};

	const resetSort = () => {
		setApis(JSON.parse(sessionStorage.getItem('data')));
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

	const handler = useCallback(
		debounce((e) => setSearchText(e.target.value), 400),
		[],
	);

	useEffect(() => {
		const matches = (list) => {
			return (
				list['API'].toLowerCase().includes(searchText.toLowerCase()) ||
				list['Description']
					.toLowerCase()
					.includes(searchText.toLowerCase())
			);
		};
		setDisplayList(apis.filter(matches));
	}, [searchText, apis]);

	const searchBar = (
		<input
			placeholder='Search APIs'
			onChange={(e) => handler(e)}
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
            bg-transparent w-min'
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
		return 'loading screen';
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
				>
					{displayList}
				</ListDisplay>
				<ScrollUp />
			</Template>
		);
	}
}

export default Browse;
