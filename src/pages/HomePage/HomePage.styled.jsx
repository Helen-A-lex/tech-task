import styled from 'styled-components';
import BgLaptop from '../../assets/bg/bg-laptop.webp';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`;

export const Title = styled.h1`
  position: absolute;
  top: 230px;
  right: 275px;
  transform: rotate(-2deg);
  margin: 0;
  color: #ffffff;
  text-shadow:
    0 0 5px #cb7aaf,
    0 0 10px #bf40b6,
    0 0 20px #cb7aaf,
    0 0 40px #cb7aaf,
    0 0 80px #cb7aaf;
  text-align: end;
  font-size: 85px;
  /* padding-top: 230px;
  padding-right: 290px; */
`;

export const Section = styled.section`
  /* padding: 50px; */
  /* background-image: linear-gradient(
    135deg,
    #e7627d 0%,
    #b8235a 25%,
    #801357 50%,
    #3d1635 75%,
    #1c1a27 100%
  ); */
  height: 100%;

  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(${BgLaptop});
  background-repeat: no-repeat;
  background-position: center center;
`;
export const Wrap = styled.div`
  position: relative;
  height: calc(100vh - 82px);
`;
