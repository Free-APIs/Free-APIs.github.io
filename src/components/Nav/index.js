import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div
			className='h-20 bg-gradient-to-r from-gray-800 to-gray-900
            px-8 py-4 text-lg'
		>
			<div
				className='flex max-w-3xl justify-between items-center h-full
                ml-auto mr-auto'
			>
				<Link to='/' className='h-full'>
					<img src={logo} className='h-full' alt='placeholdersvg' />
				</Link>
				<Link
					to='/browse'
					className='text-white hover:text-gray-300 hidden xs:block
                    cursor-pointer'
				>
					Browse APIs
				</Link>
				<a
					href='https://google.com'
					target='_blank'
					rel='noreferrer'
					className='text-white hover:text-gray-300 cursor-pointer'
				>
					GitHub
				</a>
			</div>
		</div>
	);
}

export default Nav;
