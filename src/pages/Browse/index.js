import Template from '../Template';
import { useState, useEffect } from 'react';

function Browse() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [info, setInfo] = useState({});

	useEffect(() => {
		setError(null);
		setIsLoaded(false);
		fetch('https://api.publicapis.org/entries')
			.then((response) => response.json())
			.then(
				(data) => {
					setInfo(data);
					setIsLoaded(true);
				},
				(error) => {
					setError(error);
					setIsLoaded(true);
				},
			);
	}, []);

	console.log(info);

	return <Template />;
}

export default Browse;
