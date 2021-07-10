function Card(props) {
	return (
		<div className='rounded-lg bg-gray-200 p-4 m-3 shadow flex flex-1'>
			{JSON.stringify(props.children)}
		</div>
	);
}

export default Card;
