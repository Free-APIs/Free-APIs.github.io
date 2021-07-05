import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Subheader from './components/Subheader';
import logo from './logo.svg';

function App() {
	return (
		<div className='App flex flex-col h-screen justify-between'>
			<Header />
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
		</div>
	);
}

export default App;
