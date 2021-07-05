import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<>
			<ScrollToTop />
			<Switch key={'switch'}>
				<Route exact path='/' key='home' component={Home} />
			</Switch>
		</>
	);
}

export default App;
