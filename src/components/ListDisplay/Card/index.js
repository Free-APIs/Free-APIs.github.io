function Card(props) {
	const title = props.children['API'];
	const description = props.children['Description'];
	const link = props.children['Link'];
	let auth, cors, https, authColor, corsColor, httpsColor;

	if (props.children['Auth'] === '') {
		auth = 'No authorization';
		authColor = <div className='table-cell w-12 bg-green-500' />;
	} else if (props.children['Auth'] === 'apiKey') {
		auth = 'API key authorization';
		authColor = <div className='table-cell w-12 bg-blue-500' />;
	} else {
		auth = 'OAuth authorization';
		authColor = <div className='table-cell w-12 bg-purple-500' />;
	}

	if (props.children['Cors'] === 'yes') {
		cors = 'CORS available';
		corsColor = <div className='table-cell w-12 bg-green-500' />;
	} else if (props.children['Cors'] === 'no') {
		cors = 'CORS unavailable';
		corsColor = <div className='table-cell w-12 bg-red-500' />;
	} else {
		cors = 'CORS unknown';
		corsColor = <div className='table-cell w-12 bg-yellow-500' />;
	}

	if (props.children['HTTPS'] === true) {
		https = 'HTTPS available';
		httpsColor = <div className='table-cell w-12 bg-green-500' />;
	} else {
		https = 'HTTPS unavailable';
		httpsColor = <div className='table-cell w-12 bg-red-500' />;
	}

	return (
		<a
			href={link}
			ref={props.passedRef}
			target='_blank'
			rel='noreferrer'
			className='rounded-lg bg-gray-200 p-4 m-3 shadow-lg break-words w-72
            hover:shadow-xl hover:bg-gray-100 flex flex-col justify-between'
		>
			<div>
				<div className='text-2xl text-gray-900 font-bold pb-2'>
					{title}
				</div>
				<div className='text-lg text-gray-600 italic pb-3'>
					{description}
				</div>
			</div>
			<div className='text-lg text-gray-800 table w-full'>
				<div className='table-row'>
					<div className='table-cell py-1'>{auth}</div>
					{authColor}
				</div>
				<div className='table-row h-2' />
				<div className='table-row'>
					<div className='table-cell py-1'>{https}</div>
					{httpsColor}
				</div>
				<div className='table-row h-2' />
				<div className='table-row'>
					<div className='table-cell py-1'>{cors}</div>
					{corsColor}
				</div>
			</div>
		</a>
	);
}

export default Card;
