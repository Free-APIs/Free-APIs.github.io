import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

function Template(props) {
	return (
		<div className='App flex flex-col h-screen justify-between'>
			<Nav />
			{props.children}
			<Footer about={props.about} />
		</div>
	);
}

export default Template;
