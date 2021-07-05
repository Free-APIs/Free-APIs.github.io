import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Browse from './pages/Browse';
import Category from './pages/Category';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<>
			<ScrollToTop />
			<Switch key={'switch'}>
				<Route exact path='/' key='home' component={Home} />
				<Route exact path='/about' key='about' component={About} />
				<Route exact path='/browse' key='browse' component={Browse} />
				<Route
					exact
					path='/category'
					key='category'
					component={Category}
				/>
			</Switch>
		</>
	);
}

export default App;
