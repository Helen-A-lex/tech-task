import { Flex } from '../Flex/Flex';
import { useEffect, useState } from 'react';
import { getUsers } from '../../services/api';
import TweetCard from '../TweetCard/TweetCard';

export default function Tweets() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadUsers() {
      setIsLoading(true);
      setError(null);
      try {
        const userData = await getUsers();
        console.log(userData);
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
    <Flex>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => <TweetCard key={user.id} {...user} />)
      )}
      {error && <p>{error}</p>}
    </Flex>
  );
}
