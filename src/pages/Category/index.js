import Template from '../Template';
import { useEffect, useState } from 'react';
import ListDisplay from '../../components/ListDisplay';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ScrollUp from '../../components/ScrollUp';

function Category() {
  const [apis, setApis] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [backup, setBackup] = useState();
  const [canStore, setCanStore] = useState();

  const category = useParams();

  useEffect(() => {
    document.title = `${category['category']} - Free APIs`;
  });

  useEffect(() => {
    try {
      let storage = window['sessionStorage'];
      let x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      setCanStore(true);
    } catch (e) {
      setCanStore(false);
    }
  }, []);

  useEffect(() => {
    setError(null);

    let stored;

    if (canStore) {
      stored = sessionStorage.getItem('data');
    } else {
      stored = backup;
    }

    if (!stored || refresh) {
      fetch('https://api.publicapis.org/entries')
        .then((response) => response.json())
        .then(
          (data) => {
            if (canStore) {
              onSetResult(data);
            } else {
              onSetResultBackup(data);
            }
          },
          (error) => {
            setError(error);
          },
        );
      setRefresh(false);
    } else {
      if (canStore) {
        setApis(JSON.parse(stored));
      } else {
        setApis(stored);
      }
    }

    return () => {
      setApis([]);
    }
  }, [refresh, canStore, backup]);

  const onSetResult = (result) => {
    let value = result['entries'];
    const unique = [
      ...new Map(value.map((api) => [api['API'], api])).values(),
    ];
    const uniqueString = JSON.stringify(unique);
    sessionStorage.setItem('data', uniqueString);
    setApis(unique);
  };

  const onSetResultBackup = (result) => {
    let value = result['entries'];
    const unique = [
      ...new Map(value.map((api) => [api['API'], api])).values(),
    ];
    setBackup(unique);
    setApis(unique);
  };

  const shuffle = () => {
    let shuffled = [...apis];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setApis([...shuffled]);
  };

  const reset = () => {
    if (canStore) {
      setApis(JSON.parse(sessionStorage.getItem('data')));
    } else {
      setApis(backup);
    }
  };

  useEffect(() => {
    const matches = (list) => {
      return (
        list['Category'] === category['category'] &&
        (list['API'].toLowerCase().includes(searchText.toLowerCase()) ||
          list['Description']
            .toLowerCase()
            .includes(searchText.toLowerCase()))
      );
    };
    setDisplayList(apis.filter(matches));
  }, [searchText, apis, category]);

  const searchBar = (
    <input
      placeholder='Search APIs'
      onChange={(e) => setSearchText(e.target.value)}
      value={searchText}
      className='px-4 my-4 outline-none focus:ring rounded-lg
            hover:shadow focus:shadow w-32 h-10 text-sm md:text-base mx-2'
    />
  );

  const handleRefresh = () => {
    setRefresh(true);
    setSearchText('');
    reset();
  };

  if (error) {
    return 'Error occurred';
  } else {
    return (
      <Template>
        <ListDisplay
          shuffle={shuffle}
          reset={reset}
          search={searchBar}
          isCategory
          numResults={displayList.length}
          refresh={handleRefresh}
        >
          {displayList}
        </ListDisplay>
        <Link className='flex justify-center text-xl' to='/categories'>
          <div
            className='bg-gray-300 shadow-md rounded-lg
                        p-3 mx-4 mt-0 mb-8 cursor-pointer hover:shadow-lg
                        hover:bg-gray-200'
          >
            &larr; Back to categories
          </div>
        </Link>
        <ScrollUp />
      </Template>
    );
  }
}

export default Category;
