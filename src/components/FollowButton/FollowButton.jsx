import React, { useEffect } from 'react';
import { Button } from './FollowButton.styled';

const FollowButton = ({
  initialFollowerCount,
  onFollowerCountChange,
  isFollowing,
}) => {
  const LS_KEY = 'buttonIsFollowing';

  useEffect(() => {
    const savedIsFollowing = localStorage.getItem(LS_KEY);
    if (savedIsFollowing !== null) {
      const parsedIsFollowing = JSON.parse(savedIsFollowing);
      isFollowing = parsedIsFollowing;
    }
  }, []);

  const handleFollowClick = () => {
    const newIsFollowing = !isFollowing;
    localStorage.setItem(LS_KEY, JSON.stringify(newIsFollowing));

    if (!isFollowing) {
      onFollowerCountChange(initialFollowerCount + 1, newIsFollowing);
    } else {
      onFollowerCountChange(initialFollowerCount - 1, newIsFollowing);
    }
  };

  return (
    <Button isfollowing={isFollowing.toString()} onClick={handleFollowClick}>
      {isFollowing ? 'Following' : 'Follow'}
    </Button>
  );
};
export default FollowButton;
