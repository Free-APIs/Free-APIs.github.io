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
				<Link to='/'>
					<img
						src={logo}
						alt='logo'
						title='Return home'
						height='36'
						width='36'
					/>
				</Link>
				<Link
					to='/categories'
					className='text-white hover:text-gray-300 hidden xs:block
                    cursor-pointer'
					title='Browse APIs by category'
				>
					Browse APIs
				</Link>
				<a
					href='https://github.com/Free-APIs/Free-APIs.github.io'
					target='_blank'
					rel='noreferrer'
					className='text-white hover:text-gray-300 cursor-pointer'
					title='View source on GitHub'
				>
					<img src={githubIcon} alt='GitHub' height='28' width='28' />
				</a>
			</div>
		</div>
	);
}

export default Nav;
