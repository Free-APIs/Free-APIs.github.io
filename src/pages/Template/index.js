import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

function Template(props) {
	return (
		<div className='App flex flex-col h-screen justify-between bg-gray-300'>
			<Nav />
			{props.children}
			<Footer about={props.about} />
		</div>
	);
}

export default Template;
