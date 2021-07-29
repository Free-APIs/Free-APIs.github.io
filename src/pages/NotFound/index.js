import { Link } from 'react-router-dom';
import Template from '../Template';

function NotFound() {
	return (
		<Template>
			<div
				className='flex flex-col items-center my-8 p-4 rounded-xl 
                shadow-lg w-max justify-center bg-gray-200 mx-auto'
			>
				<div className='text-5xl m-4'>Page not found</div>
				<div className='text-2xl m-3'>
					That URL doesn't exist – return
					<Link to='/' className='inline font-medium'>
						&nbsp;home
					</Link>
				</div>
			</div>
			<div className='flex-grow' />
		</Template>
	);
}

export default NotFound;
