import FollowButton from "../FollowButton/FollowButton";
import Logo from "../Logo/Logo";
import UserIcon from "../UserIcon/UserIcon";
import { ImageBg, TweetWrap} from "./Tweets.styled";

const Tweets = () => {
  return (
    <>
      <TweetWrap>
        <Logo/>
        <ImageBg />
        <UserIcon />
        <FollowButton/>
      </TweetWrap>
      
    </>
  );
};

export default Tweets;
