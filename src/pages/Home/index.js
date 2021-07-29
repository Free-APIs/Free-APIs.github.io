import { useEffect } from 'react';
import Jumbotron from '../../components/Jumbotron';
import Template from '../Template';

function Home() {
	useEffect(() => {
		document.title = 'Free APIs';
	});
	return (
		<Template>
			<Jumbotron />
		</Template>
	);
}

export default Home;
