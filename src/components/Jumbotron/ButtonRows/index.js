import Button from '../../Button';

function ButtonRows() {
	return (
		<div className='w-full flex justify-center items-center flex-wrap p-4'>
			<Button>Browse all APIs</Button>
			<Button>Explore by category</Button>
		</div>
	);
}

export default ButtonRows;
