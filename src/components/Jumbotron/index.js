import logo from '../../logo.svg';
import ButtonRow from './ButtonRow';

function Jumbotron() {
	return (
		<div
			className='h-auto bg-gray-300 flex flex-col justify-center
            items-center flex-grow'
		>
			<div
				className='text-6xl xs:text-7xl sm:text-8xl font-bold
                text-center mb-8 mt-16'
			>
				Free APIs
			</div>
			<img src={logo} className='h-96' alt='placeholdersvg' />
			<ButtonRow />
		</div>
	);
}

export default Jumbotron;
