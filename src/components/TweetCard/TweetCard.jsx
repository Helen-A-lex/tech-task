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

const TweetCard = ({ user, tweets, followers, avatar }) => {
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
              <CountFollowers>{followers} FOLLOWERS</CountFollowers>
            </li>
          </ul>
          <FollowButton />
        </TweetInfo>
      </TweetWrap>
    </>
  );
};

export default TweetCard;
