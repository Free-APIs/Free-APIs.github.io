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
			setApis(JSON.stringify(cached));
			setIsLoaded(true);
		}
	}, [query]);

	const onSetResult = (result) => {
		sessionStorage.setItem('data', JSON.stringify(result));
		setApis(result);
	};

	if (error) {
		return 'Error occurred';
	} else if (!isLoaded) {
		return 'loading screen';
	} else {
		return (
			<Template>
				<ListDisplay />
			</Template>
		);
	}
}

export default Browse;
