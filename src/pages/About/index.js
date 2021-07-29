import { useEffect } from 'react';
import Template from '../Template';

function About() {
	useEffect(() => {
		document.title = 'Free APIs  |  About this project';
	});

	return <Template about />;
}

export default About;
