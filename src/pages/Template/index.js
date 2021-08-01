import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

function Template(props) {
	return (
		<div
			className='App flex flex-col min-h-screen justify-between 
            bg-gray-300'
		>
			<Nav />
			<main className='w-0 h-0' />
			{props.children}
			<Footer about={props.about} />
		</div>
	);
}

export default Template;
