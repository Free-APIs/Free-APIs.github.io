import { Link } from 'react-router-dom';

function Button(props) {
	return (
		<Link
			to={props.to}
			className='w-72 h-auto m-4 shadow-lg hover:shadow-xl group 
            rounded-lg focus:outline-none focus:ring sm:w-96'
		>
			<img
				src={props.src}
				alt={props.alt}
				className={'w-full h-72 rounded-t-lg p-6 ' + props.color}
			/>
			<div
				className='bg-gray-200 group-hover:bg-gray-100 rounded-b-lg
                text-gray-800 text-center p-4 text-base md:text-lg w-full bg-'
			>
				{props.children}
			</div>
		</Link>
	);
}

export default Button;
