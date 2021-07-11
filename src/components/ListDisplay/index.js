import Card from './Card';

function ListDisplay(props) {
	const listItems = props.children;

	return (
		<div className='h-auto bg-gray-300 flex justify-center p-2 xs:p-6'>
			<div
				className='max-w-screen-2xl flex flex-1 flex-wrap 
            justify-center'
			>
				<button onClick={props.shuffle}>Shuffle</button>
				<button onClick={props.reset}>Reset</button>
				{listItems.map((api) => (
					<Card key={api['API']}>{api}</Card>
				))}
			</div>
		</div>
	);
}

export default ListDisplay;
