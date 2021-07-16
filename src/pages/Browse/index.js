import Template from '../Template';
import { useEffect, useState, useCallback } from 'react';
// import DataStore from '../../components/DataStore';
import ListDisplay from '../../components/ListDisplay';
import { debounce } from 'lodash';

function Browse() {
	const [apis, setApis] = useState([]);
	const [displayList, setDisplayList] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [sort, setSort] = useState('category');
	const [categories, setCategories] = useState([]);

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
	};

	const reset = () => {
		setApis(JSON.parse(sessionStorage.getItem('data')));
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
            hover:shadow-xl focus:shadow-xl'
		/>
	);

	if (error) {
		return 'Error occurred';
	} else if (!isLoaded) {
		return 'loading screen';
	} else {
		return (
			<Template>
				<ListDisplay shuffle={shuffle} reset={reset} search={searchBar}>
					{displayList}
				</ListDisplay>
			</Template>
		);
	}
}

export default Browse;
