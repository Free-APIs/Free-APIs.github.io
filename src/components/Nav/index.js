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
				<Link to='/' className='z-10 group'>
					<div className='flex items-center' title='Return home'>
						<img src={logo} alt='logo' height='36' width='36' />
						<div className='text-white group-hover:text-gray-300'>
							&nbsp;&nbsp;Home
						</div>
					</div>
				</Link>
				<a
					href='https://github.com/Free-APIs/Free-APIs.github.io'
					target='_blank'
					rel='noreferrer'
					className='text-white hover:text-gray-300 cursor-pointer 
                    z-10'
					title='View source on GitHub'
				>
					<img src={githubIcon} alt='GitHub' height='28' width='28' />
				</a>
			</div>
			<div
				className='hidden xs:block absolute top-0 left-0 
                    text-center my-4 py-2.5 w-full z-0'
			>
				<Link
					to='/categories'
					title='Browse APIs by category'
					className='text-white hover:text-gray-300 z-10'
				>
					Browse APIs
				</Link>
			</div>
		</div>
	);
}

export default Nav;
