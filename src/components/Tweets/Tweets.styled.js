import styled from 'styled-components';
import bgCard from '../../assets/bg/bg-card.png';
import dgCard2x from '../../assets/bg/bg-card@2x.png';
export const TweetWrap = styled.div`
  width: 380px;
  height: 460px;
  padding: 20px 20px 36px;
  border-radius: 20px;
  background: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow:
      0px 3.43693px 2.5777px 0px #fbf8ff inset,
      0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
      0px -1.71846px 3.43693px 0px #ae7be3 inset;
  }
`;

export const ImageBg = styled.div`
  background-image: url(${bgCard});
  background-position: top center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${dgCard2x});
  }
`;
