import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../Template';

function HelpPage() {
	const shufflePath = (
		<>
			<path d='M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z' />
			<path d='M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z' />
		</>
	);

	const shuffleIcon = (
		<svg
			height='20'
			viewBox='0 0 20 20'
			fill='currentColor'
			className='inline'
		>
			{shufflePath}
		</svg>
	);

	useEffect(() => {
		document.title = 'Help - Free APIs';
	});

	const links = (
		<div className='mx-auto my-8 text-xl'>
			<Link
				to='/browse'
				className='bg-gray-200 shadow-md rounded-lg m-3
                p-3 cursor-pointer hover:shadow-lg hover:bg-gray-100'
			>
				&larr; To browse
			</Link>
			<Link
				className='bg-gray-200 shadow-md rounded-lg m-3
                p-3 cursor-pointer hover:shadow-lg hover:bg-gray-100'
				to='/categories'
			>
				&larr; To categories
			</Link>
		</div>
	);
	return (
		<Template>
			{links}
			<div className='mx-auto'>
				<div
					className='rounded-lg bg-gray-200 p-4 shadow-lg 
                    break-words mx-4 md:w-full md:max-w-2xl flex
                    flex-col items-center'
				>
					<div className='text-2xl xs:text-3xl m-2'>
						How to use this site
					</div>
					<div className='m-3'>
						There are two ways to browse APIs - either by viewing
						them all through the browse page, or by searching using
						categories.
						<br />
						<br />
						Both pages have the option to search for APIs, shuffle,
						and reset to the original view. {shuffleIcon} is the
						icon to shuffle the cards, and &#8635; is the icon to
						reset. Shuffling changes the order from the default
						alphabetical view to a random order. The purpose of this
						shuffle is to browse APIs if you don't have a specific
						one in mind, like if you're looking for a random one
						with which to build a project.
						<br />
						<br />
						Clicking on the "click to refresh" below the search bar
						instantly refreshes the list of APIs - there may not
						always be new ones. This is more relevant on desktop
						because of the way APIs are loaded and cached.
					</div>
					<div className='text-xl xs:text-2xl m-2'>Color codes</div>
					<div className='m-3'>
						Each card is clickable, and links to an API. The
						structure of each API consists of the title,
						description, and then information about authorization,
						HTTPS, and CORS. This info has associated color cells
						for a faster and more visual browsing experience.
					</div>
					<div className='text-lg xs:text-xl m-2'>
						Authorization colors
					</div>
					<div className='table m-3'>
						<div className='table-row'>
							<div className='table-cell py-1 px-3'>
								Purple means OAuth is used
							</div>
							<div className='table-cell w-12 bg-purple-500' />
						</div>
						<div className='table-row h-2' />
						<div className='table-row'>
							<div className='table-cell py-1 px-3'>
								Blue means an API key is used
							</div>
							<div className='table-cell w-12 bg-blue-500' />
						</div>
						<div className='table-row h-2' />
						<div className='table-row'>
							<div className='table-cell py-1 px-3'>
								And green means no authorization
							</div>
							<div className='table-cell w-12 bg-green-500' />
						</div>
					</div>
					<div className='text-lg xs:text-xl m-2'>HTTPS colors</div>
					<div className='table m-3'>
						<div className='table-row'>
							<div className='table-cell py-1 px-3'>
								Green means HTTPS is available
							</div>
							<div className='table-cell w-12 bg-green-500' />
						</div>
						<div className='table-row h-2' />
						<div className='table-row'>
							<div className='table-cell py-1 px-3'>
								And red means HTTPS unavailable
							</div>
							<div className='table-cell w-12 bg-red-500' />
						</div>
					</div>
					<div className='text-lg xs:text-xl m-2'>CORS colors</div>
					<div className='table m-3'>
						<div className='table-row'>
							<div className='table-cell py-1 px-3'>
								Green for CORS available
							</div>
							<div className='table-cell w-12 bg-green-500' />
						</div>
						<div className='table-row h-2' />
						<div className='table-row'>
							<div className='table-cell py-1 px-3'>
								Orange for CORS unknown
							</div>
							<div className='table-cell w-12 bg-yellow-500' />
						</div>
						<div className='table-row h-2' />
						<div className='table-row'>
							<div className='table-cell py-1 px-3'>
								Red for CORS unavailable
							</div>
							<div className='table-cell w-12 bg-red-500' />
						</div>
					</div>
				</div>
			</div>
			{links}
			<div className='flex-grow' />
		</Template>
	);
}

export default HelpPage;
