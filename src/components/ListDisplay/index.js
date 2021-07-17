import Card from './Card';
import OptionsRow from './OptionsRow';

function ListDisplay(props) {
	let listItems = props.children;

	const header = (categoryTitle) => (
		<div className='w-full flex'>
			<div
				className='mx-auto my-4 p-4 rounded-lg shadow-lg bg-gray-700
                sm:text-xl lg:text-2xl xl:text-3xl text-gray-100 flex-none'
			>
				{categoryTitle}
			</div>
		</div>
	);

	const output = () => {
		if (props.isCategory) {
			listItems.sort((a, b) =>
				a['Category'].localeCompare(b['Category']),
			);
		}

		let previous = null;

		return (
			<>
				{listItems.map((api) => {
					let current = api['Category'];

					let val = (
						<>
							{props.isCategory &&
								previous !== current &&
								header(current)}
							<Card key={api['API']}>{api}</Card>
						</>
					);

					previous = current;

					return val;
				})}
			</>
		);
	};

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
					{output()}
				</div>
			</div>
		</>
	);
}

export default ListDisplay;
