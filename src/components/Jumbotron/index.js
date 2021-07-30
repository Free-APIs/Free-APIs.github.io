import page from './page.png';
import Subtitle from '../Subtitle';
import ButtonRows from './ButtonRows';
import { useState } from 'react';

function Jumbotron() {
	const [loaded, setLoaded] = useState(false);

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
				<div className='mx-6 shadow-xl max-h-96'>
					{!loaded && <div className='h-screen max-h-52' />}
					<img
						src={page}
						className={`max-h-96 rounded-lg ${!loaded && 'hidden'}`}
						alt='Development APIs'
						onLoad={() => setLoaded(true)}
					/>
				</div>
				<ButtonRows />
			</div>
			<div className='flex-grow max-h-10' />
		</>
	);
}

export default Jumbotron;
