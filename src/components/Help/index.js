import { Link } from 'react-router-dom';

function Help() {
	return (
		<Link
			className='rounded-full h-12 w-12 text-gray-200 bg-gradient-to-r
            from-gray-700 to-gray-800 fixed xs:bottom-0 right-0 m-8 text-lg 
            flex justify-center items-center shadow-lg bottom-10 
            hover:shadow-xl hover:from-gray-600'
			title='Need help?'
			to='/help'
		>
			?
		</Link>
	);
}

export default Help;
