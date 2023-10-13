import styled from 'styled-components';
import BGLaptop from '../../assets/bg/bg-laptop.webp';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  text-shadow:
    0 0 5px #cb7aaf,
    0 0 10px #bf40b6,
    0 0 20px #cb7aaf,
    0 0 40px #cb7aaf,
    0 0 80px #cb7aaf;
  text-align: center;
  font-size: 85px;
  /* margin-top: 160px; */
`;

export const Section = styled.section`
  /* padding: 50px; */

  background-image: url(${BGLaptop});

  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;

  height: calc(100vh - 50px);
  overflow: hidden;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
// export const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   justify-content: center;
//   align-items: center;
// `;
