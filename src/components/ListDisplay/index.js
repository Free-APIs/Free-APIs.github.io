import { Fragment } from 'react';
import Card from './Card';
import OptionsRow from './OptionsRow';

function ListDisplay(props) {
	let listItems = props.children;

	const header = (categoryTitle) => (
		<div className='w-full flex'>
			<div
				className='mx-auto mb-4 mt-6 p-4 rounded-lg shadow-lg 
                bg-gray-700 sm:text-xl lg:text-2xl xl:text-3xl text-gray-100
                flex-none'
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
						<Fragment key={api['API']}>
							{props.isCategory &&
								previous !== current &&
								header(current)}
							<Card key={api['API']}>{api}</Card>
						</Fragment>
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
				numResults={props.numResults}
			/>
			<div className='flex flex-none justify-center bg-gray-300'>
				<div
					className='max-w-screen-2xl flex flex-1 flex-wrap 
                        justify-center p2 xs:p-6'
				>
					{output()}
				</div>
			</div>
			<div className='flex flex-grow bg-gray-300' />
		</>
	);
}

export default ListDisplay;
