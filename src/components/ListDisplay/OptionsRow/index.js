import Button from '../../Button';

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

		return (
			<div
				className='m-2 text-sm md:text-base w-32 text-center 
                inline-block'
			>
				{text}
			</div>
		);
	};

	return (
		<div
			className='w-full p-2 flex flex-wrap bg-gray-300 justify-center 
            items-center'
		>
			<div className='border-b-2 border-gray-400 border-solid'>
				{props.search}
				{resultsFound()}
				<Button onClick={props.shuffle}>Shuffle APIs</Button>
				<Button onClick={props.reset}>Reset</Button>
				{props.select}
			</div>
		</div>
	);
}

export default OptionsRow;
