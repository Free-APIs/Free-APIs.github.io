function Card(props) {
	const title = props.children['API'];
	const description = props.children['Description'];
	const link = props.children['Link'];
	const category = props.children['Category'];
	let auth, cors;

	if (props.children['Auth'] === '') {
		auth = 'No authorization';
	} else if (props.children['Auth'] === 'apiKey') {
		auth = 'API Key';
	} else {
		auth = 'OAuth';
	}

	if (props.children['Cors'] === 'yes') {
		cors = 'CORS';
	} else if (props.children['Cors' === 'no']) {
		cors = 'No CORS';
	} else {
		cors = 'CORS Unknown';
	}

	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			className='rounded-lg bg-gray-200 p-4 m-3 shadow-lg break-words w-80
            hover:shadow-xl hover:bg-gray-100'
		>
			<div className='text-3xl text-gray-900 text-bold pb-2'>{title}</div>
			<div className='text-lg text-gray-600 italic pb-3'>
				{description}
			</div>
			<div className='text-lg text-gray-800'>
				<p>{auth}</p>
				<p>{cors}</p>
				<p>{link}</p>
				<p>{category}</p>
			</div>
		</a>
	);
}

export default Card;
