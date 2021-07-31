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
				color='green'
			>
				Browse all APIs
			</Button>
			<Button
				to='/categories'
				src={browseCategory}
				alt='Browse Categories'
				color='blue'
			>
				Explore by category
			</Button>
		</div>
	);
}

export default ButtonRows;
