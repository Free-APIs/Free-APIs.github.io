import { Fragment, useEffect, useState, useCallback, useRef } from 'react';
import Help from '../Help';
import Card from './Card';
import OptionsRow from './OptionsRow';

function ListDisplay(props) {
	let listItems = props.children;
	const [display, setDisplay] = useState([]);

	useEffect(() => {
		if (listItems) {
			setDisplay(listItems.slice(0, 15));
		}
	}, [listItems]);

	const observer = useRef();
	const lastElementRef = useCallback(
		(node) => {
			if (!display) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					if (display.length + 15 < listItems.length) {
						setDisplay(
							display.concat(
								listItems.slice(
									display.length,
									display.length + 15,
								),
							),
						);
					} else {
						setDisplay(listItems);
					}
				}
			});
			if (node) observer.current.observe(node);
		},
		[display, listItems],
	);

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
				{display.map((api, index) => {
					let current = api['Category'];
					let card;

					if (display.length === index + 1) {
						card = (
							<Card key={api['API']} passedRef={lastElementRef}>
								{api}
							</Card>
						);
					} else {
						card = <Card key={api['API']}>{api}</Card>;
					}

					let val = (
						<Fragment key={api['API']}>
							{props.isCategory &&
								previous !== current &&
								header(current)}
							{card}
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
				includeSelect={props.includeSelect}
				numResults={props.numResults}
				refresh={props.refresh}
			/>
			<div className='flex flex-none justify-center bg-gray-300'>
				<div
					className='max-w-screen-2xl flex flex-1 flex-wrap 
                    justify-center px-2 xs:px-6 pb-6'
				>
					{output()}
				</div>
			</div>
			<Help />
			<div className='flex-grow' />
		</>
	);
}

export default ListDisplay;
