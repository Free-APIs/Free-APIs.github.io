import logo from '../../logo.svg';
import Subtitle from '../Subtitle';
import ButtonRows from './ButtonRows';

function Jumbotron() {
	return (
		<div
			className='h-auto bg-gray-300 flex flex-col justify-center
            items-center flex-grow pb-6'
		>
			<div
				className='text-6xl xs:text-7xl sm:text-8xl font-bold
                text-center mb-6 mt-12'
			>
				Free APIs
			</div>
			<Subtitle />
			<img src={logo} className='max-h-96' alt='placeholdersvg' />
			<ButtonRows />
		</div>
	);
}

export default Jumbotron;
