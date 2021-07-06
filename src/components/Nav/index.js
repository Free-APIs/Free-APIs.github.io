import logo from '../../logo.svg';

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
				<img src={logo} className='h-full' alt='placeholdersvg' />
				<p
					className='text-white hover:text-gray-300 hidden xs:block
                    cursor-pointer'
				>
					Browse APIs
				</p>
				<p className='text-white hover:text-gray-300 cursor-pointer'>
					GitHub
				</p>
			</div>
		</div>
	);
}

export default Nav;
