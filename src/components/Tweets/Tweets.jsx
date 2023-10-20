import { Flex } from '../Flex/Flex';
import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getUserPage } from '../../services/api';
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
  const [isEmpty, setIsEmpty] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  // const [endIndex, setEndIndex] = useState(0);
  // const [perPage] = useState(3);
  // const [isShownButton, setIsShownButton] = useState(false);
  // useEffect(() => {
  //   async function loadUsers(page) {
  //     setIsLoading(true);
  //     setError(null);
  //     setIsShownButton(false);
  //     try {
  //       const usersData = await getUsers();

  //       const startIndex = (page - 1) * perPage;

  //       const newEndIndex = startIndex + perPage;

  //       const newVisibleUsers = usersData.slice(startIndex, newEndIndex);

  //       setUsers((prevStateUsers) => {
  //         const uniqueUsers = newVisibleUsers.filter(
  //           (newUser) => !prevStateUsers.some((user) => user.id === newUser.id),
  //         );

  //         return [...prevStateUsers, ...uniqueUsers];
  //       });
  //       setPage(page);
  //       setEndIndex(newEndIndex);
  //       setIsShownButton(newEndIndex < usersData.length);
  //     } catch (error) {
  //       if (error.code !== 'ERR_CANCELED') {
  //         setError('Oops! Something went wrong! Try reloading the page!');
  //       }
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   loadUsers(page);
  // }, [page]);

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);

      try {
        const usersData = await getUserPage(page);
        if (!users.length) {
          setUsers(usersData);
        } else {
          if (usersData.length === 0) {
            setIsEmpty(true);
          }
          setUsers((prevUsers) => [...prevUsers, ...usersData]);
        }
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Oops! Something went wrong! Try reloading the page!');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [page]);

  const handleButtonLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const isHideButton = isEmpty || hideButton || users.length >= 12;

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <GoButton>
          <TiArrowLeftThick width={20} height={20} /> Go back
        </GoButton>
      </Link>
      <Flex>
        {users.map((user) => (
          <TweetCard key={user.id} {...user} />
        ))}

        {error && <p>{error}</p>}
        {isLoading && <Loader />}
        {users.length ? (
          isHideButton ? null : (
            <LoadMoreBtn onClick={handleButtonLoadMore} />
          )
        ) : null}
      </Flex>
    </>
  );
}
