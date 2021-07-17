import Template from '../Template';
import { useEffect, useState, useCallback } from 'react';
import ListDisplay from '../../components/ListDisplay';
import { debounce } from 'lodash';

function Category() {
	const [apis, setApis] = useState([]);
	const [displayList, setDisplayList] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [sort, setSort] = useState('Category');
	const [categories, setCategories] = useState([]);

	const sortWays = ['Category', 'Alphabetical', 'Random'];

	useEffect(() => {
		setError(null);
		setIsLoaded(false);

		const cached = sessionStorage.getItem('data');
		const categoryCached = sessionStorage.getItem('categories');

		if (!cached) {
			fetch('https://api.publicapis.org/entries')
				.then((response) => response.json())
				.then(
					(data) => {
						onSetResult(data, true);
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

		if (!categoryCached) {
			fetch('https://api.publicapis.org/categories')
				.then((response) => response.json())
				.then(
					(data) => {
						onSetResult(data, false);
					},
					(error) => {
						setError(error);
						setIsLoaded(true);
					},
				);
		} else {
			setCategories(JSON.parse(categoryCached));
			setIsLoaded(true);
		}
	}, []);

	const onSetResult = (result, isAPIs) => {
		if (isAPIs) {
			let value = result['entries'];
			const unique = [
				...new Map(value.map((api) => [api['API'], api])).values(),
			];
			const uniqueString = JSON.stringify(unique);
			sessionStorage.setItem('data', uniqueString);
			setApis(unique);
		} else {
			sessionStorage.setItem('categories', JSON.stringify(result));
			setCategories(result);
		}
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

	const alphabet = () => {
		let sorted = apis;
		sorted.sort((a, b) => a['API'].localeCompare(b['API']));
		setApis([...sorted]);
		setSort('Alphabetical');
	};

	const handleSort = (action) => {
		setSort(action);

		switch (action) {
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
			placeholder='Search for an API'
			onChange={(e) => handler(e)}
			className='px-4 m-4 outline-none focus:ring rounded-lg shadow-lg
            hover:shadow-xl focus:shadow-xl h-10'
		/>
	);

	const select = (
		<select
			value={sort}
			onChange={(e) => handleSort(e.target.value)}
			className='px-4 m-4 outline-none focus:ring rounded-lg shadow-lg
            hover:shadow-xl focus:shadow-xl bg-gray-200 hover:bg-gray-100
            focus:bg-gray-100 cursor-pointer h-10'
		>
			{sortWays.map((method) => (
				<option key={method} value={method}>
					Sort by: {method}
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
					reset={reset}
					search={searchBar}
					select={select}
					isCategory={sort === 'Category'}
				>
					{displayList}
				</ListDisplay>
			</Template>
		);
	}
}

export default Category;
