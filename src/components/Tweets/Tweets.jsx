import { Flex } from '../Flex/Flex';
import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getUsers } from '../../services/api';
import TweetCard from '../TweetCard/TweetCard';
import { TiArrowLeftThick } from 'react-icons/ti';
import { GoButton } from './Tweets.styled';

export default function Tweets() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    async function loadUsers() {
      setIsLoading(true);
      setError(null);
      try {
        const userData = await getUsers();

        setUsers(userData);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Oops! Something went wrong! Try reloading the page!');
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadUsers();
  }, []);
  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <GoButton>
          <TiArrowLeftThick width={20} height={20} /> Go back
        </GoButton>
      </Link>
      <Flex>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          users.map((user) => <TweetCard key={user.id} {...user} />)
        )}
        {error && <p>{error}</p>}
      </Flex>
    </>
  );
}
