import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
	return (
		<Switch key={'switch'}>
			<Route exact path='/' key='home' component={Home} />
		</Switch>
	);
}

export default App;
