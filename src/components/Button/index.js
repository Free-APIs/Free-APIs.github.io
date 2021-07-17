import { Link } from 'react-router-dom';
function Button(props) {
	const output = (
		<button
			className='bg-gray-200 hover:bg-gray-100 focus:bg-gray-100
                text-gray-800 text-center px-4 py-2 rounded-lg m-4 shadow-lg
                hover:shadow-xl focus:shadow-xl cursor-pointer
                focus:outline-none focus:ring text-sm md:text-base'
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);

	if (props.to !== undefined) {
		return (
			<Link to={props.to} replace>
				{output}
			</Link>
		);
	} else {
		return output;
	}
}

export default Button;
