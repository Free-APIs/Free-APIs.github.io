import Card from './Card';
import OptionsRow from './OptionsRow';

function ListDisplay(props) {
	let listItems = props.children;
	const categories = props.categories;

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
		listItems.sort((a, b) => a['Category'].localeCompare(b['Category']));
		let count = -1;
		let category = null;

		return (
			<>
				{listItems.map((api) => {
					if (api['Category'] === category) {
						return <Card key={api['API']}>{api}</Card>;
					} else {
						console.log(api['Category']);
						console.log(category);
						count++;
						category = categories[count];
						return (
							<>
								{header(category)}
								<Card key={api['API']}>{api}</Card>
							</>
						);
					}
				})}
			</>
		);
	};

	if (props.isCategory) {
		return (
			<>
				<OptionsRow
					shuffle={props.shuffle}
					reset={props.reset}
					search={props.search}
					select={props.select}
				/>
				<div className='flex flex-none justify-center bg-gray-300'>
					<div
						className='max-w-screen-2xl flex flex-initial flex-wrap 
                        justify-center p2 xs:p-6'
					>
						{output()}
					</div>
				</div>
				<div className='flex flex-grow bg-gray-300' />
			</>
		);
	} else {
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
}

export default ListDisplay;
