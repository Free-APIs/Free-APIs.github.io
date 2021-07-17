function ScrollUp() {
	return (
		<div
			className='rounded-full h-12 w-12 text-gray-200 bg-gradient-to-r
            from-gray-700 to-gray-800 fixed bottom-0 right-0 m-8 text-lg 
            cursor-pointer flex justify-center items-center shadow-lg
            hover:shadow-xl hover:from-gray-600'
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			&uarr;
		</div>
	);
}

export default ScrollUp;
