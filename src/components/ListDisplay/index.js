import Card from './Card';

function ListDisplay(props) {
	const listItems = props.children;

	return (
		<div
			className='h-auto bg-gray-300 flex justify-center
            flex-1 flex-wrap p-6'
		>
			{listItems.map((api) => (
				<Card>{api}</Card>
			))}
		</div>
	);
}

export default ListDisplay;
