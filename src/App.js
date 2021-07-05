import Footer from './components/Footer';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';

function App() {
	return (
		<div className='App flex flex-col h-screen justify-between'>
			<Nav />
			<Jumbotron />
			<Footer />
		</div>
	);
}

export default App;
