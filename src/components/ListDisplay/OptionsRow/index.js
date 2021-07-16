import Button from '../../Button';

function OptionsRow(props) {
	return (
		<div className='w-full p-2 flex flex-wrap bg-gray-400 justify-center'>
			<Button onClick={props.shuffle}>Shuffle APIs</Button>
			<Button onClick={props.reset}>Reset</Button>
			{props.search}
			{props.select}
		</div>
	);
}

export default OptionsRow;
