import Button from '../../Button';

function OptionsRow(props) {
	return (
		<div className='w-full p-2 flex flex-wrap bg-gray-400'>
			<Button onClick={props.shuffle}>Shuffle APIs</Button>
			<Button onClick={props.reset}>Reset</Button>
		</div>
	);
}

export default OptionsRow;
