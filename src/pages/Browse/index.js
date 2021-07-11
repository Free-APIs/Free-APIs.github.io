import Template from '../Template';
import { useEffect, useState } from 'react';
// import DataStore from '../../components/DataStore';
import ListDisplay from '../../components/ListDisplay';

function Browse() {
	const [apis, setApis] = useState();
	const [query, setQuery] = useState(0);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);

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
	};

	const reset = () => {
		setApis(JSON.parse(sessionStorage.getItem('data')));
	};

	if (error) {
		return 'Error occurred';
	} else if (!isLoaded) {
		return 'loading screen';
	} else {
		return (
			<Template>
				<ListDisplay shuffle={shuffle} reset={reset}>
					{apis}
				</ListDisplay>
			</Template>
		);
	}
}

export default Browse;
