import Template from '../Template';

function LoadingScreen() {
	const card = (
		<div
			className='w-72 h-64 m-3 p-4 bg-gray-200
            rounded-xl flex-none shadow-lg flex flex-col'
		>
			<div className='rounded-lg h-12 w-28 bg-gray-400 mb-4' />
			<div className='rounded-lg flex-grow bg-gray-300' />
		</div>
	);

	return (
		<Template>
			<div className='flex flex-col items-center animate-pulse'>
				<div
					className='h-24 w-1/2 max-w-lg bg-gray-200 
                    rounded-xl mt-6 m-4 shadow-lg flex flex-col'
				>
					<div className='rounded h-8 bg-gray-300 m-4' />
					<div className='rounded flex-grow bg-gray-300 mx-4 mb-4' />
				</div>
				<div
					className='h-16 w-32 bg-gray-700 
                    rounded-xl m-4 shadow-lg'
				/>
				<div className='flex justify-center flex-wrap p-4 pt-0'>
					{card}
					{card}
					{card}
					{card}
				</div>
			</div>
			<div className='flex flex-grow bg-gray-300 pb-6' />
		</Template>
	);
}

export default LoadingScreen;
