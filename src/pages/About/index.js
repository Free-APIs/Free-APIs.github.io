import { useEffect } from 'react';
import Template from '../Template';
import logo from '../../logo.svg';

function About() {
	useEffect(() => {
		document.title = 'Free APIs  |  About';
	});

	return (
		<Template about>
			<div className='flex justify-center mt-4'>
				<div
					className='m-4 p-4 flex justify-center rounded-xl
                    bg-gradient-to-r max-w-3xl w-full flex-col items-center
                    from-gray-100 to-gray-200 shadow-lg'
				>
					<div className='text-2xl xs:text-3xl m-2'>
						About Free APIs
					</div>
					<img src={logo} className='m-2 h-44' alt='logo' />
					<div
						className='m-2 italic text-gray-600 mb-6 text-center 
                        text-sm xs:text-base'
					>
						A collection for new and experienced developers
					</div>
					<div className='text-lg xs:text-xl m-2 text-gray-700'>
						This React.js project houses a clean, minimalist user
						interface for exploring and accessing APIs. As a
						software developer looking for more things to build,
						such a collection brings me the inspiration I need to
						explore new ideas and sources of content. And in making
						this, I've strived for simple design, accessibility, and
						intuitive use –&nbsp;
						<div className='text-gray-800 inline font-medium'>
							because that's what the best things are.
						</div>
						<br />
						<br />
						Free APIs is organized by two main modes: a general view
						of all APIs and a targeted, category-specific approach.
						There are further options to search, sort, shuffle, and
						reset the API cards. Each card links to its respective
						API.
						<br />
						<br />
						Go ahead and
						<a
							href='https://github.com/Free-APIs/Free-APIs.github.io/issues'
							rel='noreferrer'
							target='_blank'
							className='text-gray-800 inline font-medium'
						>
							&nbsp;open a GitHub issue&nbsp;
						</a>
						if you have any optimizations, improvements, or
						suggestions. If you'd like to get in touch,
						<a
							href='mailto:freeapis256@gmail.com?subject=Hey%20there!'
							rel='noreferrer'
							target='_blank'
							className='text-gray-800 inline font-medium'
						>
							&nbsp;feel free to reach out!
						</a>
					</div>
				</div>
			</div>
			<div className='flex-grow mb-4' />
		</Template>
	);
}

export default About;
