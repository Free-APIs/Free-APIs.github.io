import page from './page.png';
import Subtitle from '../Subtitle';
import ButtonRows from './ButtonRows';

function Jumbotron() {
	return (
		<>
			<div
				className='h-auto bg-gray-300 flex flex-col justify-center
                items-center pb-6'
			>
				<div
					className='text-6xl xs:text-7xl sm:text-8xl font-bold
                    text-center mb-6 mt-12'
				>
					Free APIs
				</div>
				<Subtitle />
				<div className='mx-6'>
					<img
						src={page}
						className='max-h-96 rounded-lg shadow-xl'
						alt='Development APIs'
					/>
				</div>
				<ButtonRows />
			</div>
			<div className='flex-grow max-h-10' />
		</>
	);
}

export default Jumbotron;
