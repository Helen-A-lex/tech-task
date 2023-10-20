// import { useState, useEffect } from 'react';
// import FollowButton from '../FollowButton/FollowButton';
// import Logo from '../Logo/Logo';
// import UserIcon from '../UserIcon/UserIcon';
// import {
//   ImageBg,
//   TweetWrap,
//   TweetInfo,
//   CountTweets,
//   CountFollowers,
//   TweetWrapImage,
// } from './TweetCard.styled';

// const LS_KEY_PREFIX = 'followerCount_';

// const TweetCard = ({ user, tweets, followers, avatar, id }) => {
//   const LS_KEY = LS_KEY_PREFIX + id;

//   const [followerCount, setFollowerCount] = useState(followers);

//   const [isFollowing, setIsFollowing] = useState(false);

//   const updateFollowerCount = (newCount, newIsFollowing) => {
//     setFollowerCount(newCount);
//     setIsFollowing(newIsFollowing);
//     const dataToSave = { count: newCount, isFollowing: newIsFollowing };
//     localStorage.setItem(LS_KEY, JSON.stringify(dataToSave));
//   };
//   useEffect(() => {
//     const savedData = localStorage.getItem(LS_KEY);

//     if (savedData !== null) {
//       const parsedData = JSON.parse(savedData);

//       setFollowerCount(parsedData.count);
//       setIsFollowing(parsedData.isFollowing);
//     }
//   }, [LS_KEY]);

//   return (
//     <>
//       <TweetWrap>
//         <Logo />
//         <ImageBg />
//         <TweetWrapImage>
//           <UserIcon />
//           <img src={avatar} alt={user} width="70" height="70" />
//         </TweetWrapImage>
//         <TweetInfo>
//           <ul>
//             <li>
//               <CountTweets>{tweets} TWEETS</CountTweets>
//             </li>
//             <li>
//               <CountFollowers>
//                 {followerCount.toLocaleString('en-US')} FOLLOWERS
//               </CountFollowers>
//             </li>
//           </ul>
//           <FollowButton
//             initialFollowerCount={followers}
//             onFollowerCountChange={updateFollowerCount}
//             isFollowing={isFollowing}
//           />
//         </TweetInfo>
//       </TweetWrap>
//     </>
//   );
// };

// export default TweetCard;
import { useState } from 'react';
import FollowButton from '../FollowButton/FollowButton';
import Logo from '../Logo/Logo';
import UserIcon from '../UserIcon/UserIcon';
import {
  ImageBg,
  TweetWrap,
  TweetInfo,
  CountTweets,
  CountFollowers,
  TweetWrapImage,
} from './TweetCard.styled';

const LOCAL_STORAGE_KEY = 'tweetCardData';

const TweetCard = ({ user, tweets, followers, avatar, id }) => {
  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

  const data = localStorageData[id] || {
    followerCount: followers,
    isFollowing: false,
  };

  const [followerCount, setFollowerCount] = useState(data.followerCount);
  const [isFollowing, setIsFollowing] = useState(data.isFollowing);

  const updateFollowerCount = (newCount, newIsFollowing) => {
    setFollowerCount(newCount);
    setIsFollowing(newIsFollowing);

    const updatedData = {
      ...data,
      followerCount: newCount,
      isFollowing: newIsFollowing,
    };
    localStorageData[id] = updatedData;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localStorageData));
  };

  return (
    <>
      <TweetWrap>
        <Logo />
        <ImageBg />
        <TweetWrapImage>
          <UserIcon />
          <img src={avatar} alt={user} width="70" height="70" />
        </TweetWrapImage>
        <TweetInfo>
          <ul>
            <li>
              <CountTweets>{tweets} TWEETS</CountTweets>
            </li>
            <li>
              <CountFollowers>
                {followerCount.toLocaleString('en-US')} FOLLOWERS
              </CountFollowers>
            </li>
          </ul>
          <FollowButton
            initialFollowerCount={followers}
            onFollowerCountChange={updateFollowerCount}
            isFollowing={isFollowing}
          />
        </TweetInfo>
      </TweetWrap>
    </>
  );
};

export default TweetCard;
