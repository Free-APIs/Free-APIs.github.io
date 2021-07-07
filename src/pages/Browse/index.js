import Template from '../Template';
import { useEffect, useState } from 'react';
// import DataStore from '../../components/DataStore';

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
						console.log('pulling');
						setIsLoaded(true);
					},
					(error) => {
						setError(error);
						setIsLoaded(true);
					},
				);
		} else {
			setApis(JSON.stringify(cached));
			setIsLoaded(true);
			console.log('cache hit');
		}
	}, [query]);

	const onSetResult = (result) => {
		sessionStorage.setItem('data', JSON.stringify(result));
		setApis(result);
		console.log(result);
	};

	const output = () => {
		if (error) {
			return 'Error occurred';
		} else if (!isLoaded) {
			return 'isLoading';
		} else {
			return apis;
		}
	};

	console.log(output());

	return (
		<Template>
			<div onClick={() => setQuery((c) => c + 1)}>
				{JSON.stringify(output())}
			</div>
		</Template>
	);
}

export default Browse;
