import { Link } from 'react-router-dom';

function Footer(props) {
	const text = () => {
		if (props.about) {
			return (
				<a
					href='https://github.com/Free-APIs/Free-APIs.github.io/'
					target='_blank'
					rel='noreferrer'
				>
					Design and development by Free-APIs.
				</a>
			);
		} else {
			return <Link to='/about'>About this project</Link>;
		}
	};

	return (
		<div
			className='flex justify-center text-center items-center p-6
            bg-gradient-to-r from-gray-700 to-gray-900 via-gray-800'
		>
			<p
				className='text-gray-300 hover:text-gray-50 cursor-pointer 
                text-sm'
			>
				{text()}
			</p>
		</div>
	);
}

export default Footer;
