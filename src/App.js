import Footer from './components/Footer';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import logo from './logo.svg';

function App() {
	return (
		<div className='App flex flex-col h-screen justify-between'>
			<Nav />
			<Jumbotron />
			<header className='App-header'>
				<img src={logo} className='App-logo max-h-48' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
			<Footer />
		</div>
	);
}

export default App;
