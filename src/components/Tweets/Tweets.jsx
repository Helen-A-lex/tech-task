import { Flex } from '../Flex/Flex';
import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getUsers } from '../../services/api';
import TweetCard from '../TweetCard/TweetCard';
import { TiArrowLeftThick } from 'react-icons/ti';
import { GoButton } from './Tweets.styled';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { Loader } from '../Loader/Loader';

export default function Tweets() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(3);
  const [isShownButton, setIsShownButton] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [endIndex, setEndIndex] = useState(0);

  useEffect(() => {
    async function loadUsers(page) {
      setIsLoading(true);
      setError(null);
      setIsShownButton(false);
      try {
        const usersData = await getUsers();

        const startIndex = (page - 1) * perPage;

        const newEndIndex = startIndex + perPage;

        const newVisibleUsers = usersData.slice(startIndex, newEndIndex);

        setUsers((prevStateUsers) => {
          const uniqueUsers = newVisibleUsers.filter(
            (newUser) => !prevStateUsers.some((user) => user.id === newUser.id),
          );

          return [...prevStateUsers, ...uniqueUsers];
        });
        setPage(page);
        setEndIndex(newEndIndex);
        setIsShownButton(newEndIndex < usersData.length);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Oops! Something went wrong! Try reloading the page!');
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadUsers(page);
  }, [page]);

  const handleButtonLoadMore = () => {
    setPage((prevStatePage) => prevStatePage + 1);
  };

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <GoButton>
          <TiArrowLeftThick width={20} height={20} /> Go back
        </GoButton>
      </Link>
      <Flex>
        {isLoading ? (
          <Loader />
        ) : (
          users.map((user) => <TweetCard key={user.id} {...user} />)
        )}
        {error && <p>{error}</p>}
        {isShownButton && <LoadMoreBtn onClick={handleButtonLoadMore} />}
      </Flex>
    </>
  );
}

// 2// import { Flex } from '../Flex/Flex';
// import { useEffect, useState, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { getUsers } from '../../services/api';
// import TweetCard from '../TweetCard/TweetCard';
// import { TiArrowLeftThick } from 'react-icons/ti';
// import { GoButton } from './Tweets.styled';
// import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';

// export default function Tweets() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [page, setPage] = useState(1);
//   const [perPage] = useState(3);
//   const [isShownButton, setIsShownButton] = useState(false);
//   const [filter, setFilter] = useState('show all');
//   const location = useLocation();
//   const backLinkLocationRef = useRef(location.state?.from ?? '/');
//   const [endIndex, setEndIndex] = useState(0);

//   useEffect(() => {
//     async function loadUsers() {
//       setIsLoading(true);
//       setError(null);
//       setIsShownButton(false);
//       try {
//         const usersData = await getUsers();

//         const startIndex = (page - 1) * perPage;

//         const newEndIndex = startIndex + perPage;

//         const newVisibleUsers = usersData.slice(startIndex, newEndIndex);

//         setUsers((prevStateUsers) => {
//           const uniqueUsers = newVisibleUsers.filter(
//             (newUser) => !prevStateUsers.some((user) => user.id === newUser.id),
//           );
//           console.log(uniqueUsers);
//           return [...prevStateUsers, ...uniqueUsers];
//         });

//         setEndIndex(newEndIndex);
//         setIsShownButton(newEndIndex < usersData.length);

//         console.log(page);
//       } catch (error) {
//         if (error.code !== 'ERR_CANCELED') {
//           setError('Oops! Something went wrong! Try reloading the page!');
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     loadUsers();
//   }, [page]);

//   const handleButtonLoadMore = (e) => {
//     e.preventDefault();
//     setPage((prevStatePage) => prevStatePage + 1);
//   };

//   const filterTweets = () => {
//     console.log('Selected filter:', filter);
//     if (filter === 'show all') {
//       return users;
//     } else if (filter === 'follow') {
//       return users.filter((user) => user.follow);
//     } else if (filter === 'followings') {
//       return users.filter((user) => user.following);
//     }
//   };

//   return (
//     <>
//       <Link to={backLinkLocationRef.current}>
//         <GoButton>
//           <TiArrowLeftThick width={20} height={20} /> Go back
//         </GoButton>
//       </Link>

//       <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//         <option value="show all">Show All</option>
//         <option value="follow">Follow</option>
//         <option value="followings">Followings</option>
//       </select>

//       <Flex>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           filterTweets().map((user) => <TweetCard key={user.id} {...user} />)
//         )}
//         {error && <p>{error}</p>}
//         {isShownButton && <LoadMoreBtn onClick={handleButtonLoadMore} />}
//       </Flex>
//     </>
//   );
// }
