function Button(props) {
	return (
		<button
			className='bg-gray-200 hover:bg-gray-100 focus:bg-gray-100
                text-gray-800 text-center px-4 py-2 rounded-lg m-4 shadow-lg
                hover:shadow-xl focus:shadow-xl cursor-pointer
                focus:outline-none focus:ring'
		>
			{props.children}
		</button>
	);
}

export default Button;
