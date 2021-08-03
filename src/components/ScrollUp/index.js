import { useCallback, useRef, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

function ScrollUp() {
	const [showScroll, setShowScroll] = useState(false);

	const observer = useRef();
	const scrolledEnough = useCallback((node) => {
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setShowScroll(false);
			} else {
				setShowScroll(true);
			}
		});
		if (node) observer.current.observe(node);
	}, []);

	let button = (
		<div
			className='rounded-full h-12 w-12 text-gray-200 bg-gradient-to-r
            from-gray-700 to-gray-800 fixed xs:bottom-20 right-0 m-8 text-lg 
            cursor-pointer flex justify-center items-center shadow-lg bottom-28
            hover:shadow-xl hover:from-gray-600 animate-fade-in-up'
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			&uarr;
		</div>
	);

	smoothscroll.polyfill();

	return (
		<>
			<div className='absolute'>
				<div className='w-0 h-96' />
				<div className='w-0 h-96' />
				<div className='sticky bottom-0' ref={scrolledEnough} />
			</div>
			{showScroll && button}
		</>
	);
}

export default ScrollUp;
