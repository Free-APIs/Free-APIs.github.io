import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Browse from './pages/Browse';
import Categories from './pages/Categories';
import Category from './pages/Category';
import ScrollToTop from './components/ScrollToTop';
import Tracking from './components/Tracking';

function App() {
	Tracking();

	return (
		<>
			<ScrollToTop />
			<Switch key={'switch'}>
				<Route exact path='/' key='home' component={Home} />
				<Route exact path='/about' key='about' component={About} />
				<Route exact path='/browse' key='browse' component={Browse} />
				<Route
					exact
					path='/categories'
					key='categories'
					component={Categories}
				/>
				<Route
					exact
					path='/categories/:category'
					component={Category}
				/>
			</Switch>
		</>
	);
}

export default App;
