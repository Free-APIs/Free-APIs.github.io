import logo from '../../logo.svg';
import githubIcon from './github.svg';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div
			className='h-20 bg-gradient-to-r from-gray-800 to-gray-900
            px-8 py-4 text-lg flex-none'
		>
			<div
				className='flex max-w-3xl justify-between items-center h-full
                ml-auto mr-auto'
			>
				<Link to='/' replace className='h-4/5'>
					<img
						src={logo}
						className='h-full'
						alt='placeholdersvg'
						title='Return home'
					/>
				</Link>
				<Link
					to='/categories'
					replace
					className='text-white hover:text-gray-300 hidden xs:block
                    cursor-pointer'
					title='Browse APIs by category'
				>
					Browse APIs
				</Link>
				<a
					href='https://google.com'
					target='_blank'
					rel='noreferrer'
					className='text-white hover:text-gray-300 cursor-pointer 
                    h-3/5'
					title="View this project's source on GitHub!"
				>
					<img src={githubIcon} className='h-full' alt='GitHub' />
				</a>
			</div>
		</div>
	);
}

export default Nav;
