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
	const [refresh, setRefresh] = useState(false);

	const sortWays = ['Category', 'Alphabetical', 'Random'];

	useEffect(() => {
		setError(null);
		setIsLoaded(false);

		const cached = sessionStorage.getItem('data');

		if (!cached || refresh) {
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
			setRefresh(false);
		} else {
			setApis(JSON.parse(cached));
			setIsLoaded(true);
		}
	}, [refresh]);

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

	const handleRefresh = () => {
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
		setDisplayList(apis.filter(matches));
	}, [searchText, apis, refresh]);

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
		const card = (
			<div
				className='w-72 h-64 m-4 p-4 bg-gray-200
                rounded-xl flex-none shadow-lg flex flex-col'
			>
				<div className='rounded-lg h-12 w-28 bg-gray-400 mb-4' />
				<div className='rounded-lg flex-grow bg-gray-300' />
			</div>
		);

		return (
			<Template>
				<div className='flex flex-col items-center animate-pulse'>
					<div
						className='h-24 w-1/2 max-w-lg bg-gray-200 
                        rounded-xl mt-6 m-4 shadow-lg flex flex-col'
					>
						<div className='rounded h-8 bg-gray-300 m-4' />
						<div className='rounded flex-grow bg-gray-300 mx-4 mb-4' />
					</div>
					<div
						className='h-16 w-32 bg-gray-700 
                        rounded-xl m-4 shadow-lg'
					/>
					<div className='flex justify-center flex-wrap'>
						{card}
						{card}
						{card}
						{card}
					</div>
				</div>
				<div className='flex flex-grow bg-gray-300 pb-6' />
			</Template>
		);
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
