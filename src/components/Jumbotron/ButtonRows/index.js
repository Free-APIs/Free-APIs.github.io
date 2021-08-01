import Button from '../../Button';
import browseAll from '../all.svg';
import browseCategory from '../category.svg';

function ButtonRows() {
	return (
		<div className='w-full flex justify-center items-center flex-wrap px-4'>
			<Button
				to='/browse'
				src={browseAll}
				alt='Browse All APIs'
				color='bg-green-400 group-hover:bg-green-300'
			>
				Browse all APIs
			</Button>
			<Button
				to='/categories'
				src={browseCategory}
				alt='Browse Categories'
				color='bg-blue-400 group-hover:bg-blue-300'
			>
				Explore by category
			</Button>
		</div>
	);
}

export default ButtonRows;
