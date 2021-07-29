import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

function Tracking() {
	const location = useLocation();
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (!window.location.href.includes('localhost')) {
			ReactGA.initialize('UA-203532673-2');
		}
		setInitialized(true);
	}, []);

	useEffect(() => {
		if (initialized) {
			ReactGA.pageview(location.pathname + location.search);
		}
	}, [initialized, location]);
}

export default Tracking;
