function OptionsRow(props) {
	const resultsFound = () => {
		let text;

		if (props.numResults === 1) {
			text = '1 result found';
		} else if (props.numResults === 0) {
			text = 'No results found';
		} else {
			text = `${props.numResults} results found`;
		}

		text += ' – click to refresh';

		return (
			<div
				className='m-2 text-sm md:text-base text-center block
                text-gray-600 cursor-pointer'
				onClick={props.refresh}
			>
				{text}
			</div>
		);
	};

	const shufflePath = (
		<>
			<path d='M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z' />
			<path d='M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z' />
		</>
	);

	const shuffleIcon = (
		<svg
			height='20'
			viewBox='0 0 20 20'
			fill='currentColor'
			className='inline'
		>
			{shufflePath}
		</svg>
	);

	const largeShuffleIcon = (
		<svg
			height='30'
			width='30'
			viewBox='0 -1 23 23'
			fill='currentColor'
			className='inline'
		>
			{shufflePath}
		</svg>
	);

	return (
		<div
			className='w-full p-2 pb-0 flex flex-wrap bg-gray-300 justify-center
            items-center'
		>
			<div
				className='border-b-2 border-gray-400 border-solid flex 
                justify-center items-center flex-wrap'
			>
				{props.search}
				{props.includeSelect && props.select}
				<div className='inline-block xs:hidden'>
					<button
						className='p-2 rounded-lg text-center mr-1 ml-3'
						onClick={props.shuffle}
						title='Shuffle API ordering'
					>
						{largeShuffleIcon}
					</button>
					<button
						className='p-2 rounded-lg text-xl text-center mx-1'
						onClick={props.reset}
						title='Reset API ordering'
					>
						&#8635;
					</button>
				</div>
				<div className='hidden xs:inline-block'>
					<button
						className='p-2 rounded-lg text-sm md:text-base text-center focus:outline-none focus:ring mx-1 hover:shadow focus:shadow'
						onClick={props.shuffle}
						title='Shuffle API ordering'
					>
						Shuffle&nbsp;
						{shuffleIcon}
					</button>
					<button
						className='p-2 rounded-lg text-sm md:text-base text-center focus:outline-none focus:ring mx-1 
                        hover:shadow focus:shadow'
						onClick={props.reset}
						title='Reset API ordering'
					>
						Reset &#8635;
					</button>
				</div>
			</div>
			<div className='w-full' />
			{resultsFound()}
		</div>
	);
}

export default OptionsRow;
