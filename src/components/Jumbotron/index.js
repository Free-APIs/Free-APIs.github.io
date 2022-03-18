import Subtitle from '../Subtitle';
import ButtonRows from './ButtonRows';

function Jumbotron() {
  return (
    <>
      <div
        className='h-auto bg-gray-300 flex flex-col justify-center
                items-center pb-6'
      >
        <div
          className='text-6xl xs:text-7xl sm:text-8xl font-bold
                    text-center mb-6 mt-12'
        >
          Free APIs
        </div>
        <Subtitle />
        <a
          href='https://web.archive.org/web/20220318035229/https://github.com/public-apis/public-apis/issues/3104'
          className='text-lg rounded-lg p-3 mb-4 mx-8 bg-yellow-300 
          w-92 text-center shadow-lg hover:shadow-xl
          cursor-pointer hover:bg-yellow-200'
          target='_blank'
          rel='noreferrer'
        >
          &#9888; Public APIs Situation &#9888;
          <br />
          [VISIT THIS LINK]
        </a>
        <ButtonRows />
      </div>
      <div className='flex-grow max-h-10' />
    </>
  );
}

export default Jumbotron;
