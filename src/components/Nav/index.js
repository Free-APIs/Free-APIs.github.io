import logo from '../../logo.svg';

function Nav() {
	return (
		<div
			className='h-20 bg-gradient-to-r from-gray-700 to-gray-700
            via-gray-900 text-white px-8 py-4 text-lg'
		>
			<div
				className='flex max-w-3xl justify-between items-center h-full
                ml-auto mr-auto'
			>
				<img src={logo} className='h-full' alt='placeholdersvg' />
				<div className='hidden xs:block'>Browse APIs</div>
				<div>GitHub</div>
			</div>
		</div>
	);
}

export default Nav;
