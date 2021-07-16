import Card from './Card';
import OptionsRow from './OptionsRow';

function ListDisplay(props) {
	const listItems = props.children;

	return (
		<>
			<OptionsRow
				shuffle={props.shuffle}
				reset={props.reset}
				search={props.search}
				select={props.select}
			/>
			<div
				className='bg-gray-300 flex flex-grow
                justify-center p-2 xs:p-6'
			>
				<div
					className='max-w-screen-2xl flex flex-1 flex-wrap 
                    justify-center'
				>
					{listItems.map((api) => (
						<Card key={api['API']}>{api}</Card>
					))}
				</div>
			</div>
		</>
	);
}

export default ListDisplay;
