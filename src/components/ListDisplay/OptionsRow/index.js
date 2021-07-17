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

		return <div className='m-2'>{text}</div>;
	};
	return (
		<div
			className='w-full p-2 flex flex-wrap bg-gray-400 justify-center
            items-center'
		>
			<Button onClick={props.shuffle}>Shuffle APIs</Button>
			<Button onClick={props.reset}>Reset</Button>
			{props.search}
			{props.select}
			{resultsFound()}
		</div>
	);
}

export default OptionsRow;
