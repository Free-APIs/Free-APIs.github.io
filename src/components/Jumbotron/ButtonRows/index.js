import Button from '../../Button';

function ButtonRows() {
	return (
		<div className='w-full flex justify-center items-center flex-wrap p-4'>
			<Button to='/browse'>Browse all APIs</Button>
			<Button to='/category'>Explore by category</Button>
		</div>
	);
}

export default ButtonRows;
