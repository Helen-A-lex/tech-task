import styled, { keyframes } from 'styled-components';
const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

// Функція для генерації box-shadow
function multipleBoxShadow(n) {
  const shadows = [];
  for (let i = 0; i < n; i++) {
    const x = `${Math.random() * 2000}px`;
    const y = `${Math.random() * 2000}px`;
    shadows.push(`${x} ${y} #FFF`);
  }
  return shadows.join(', ');
}

export const Star1 = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${multipleBoxShadow(700)};
  animation: ${animStar} 50s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${multipleBoxShadow(700)};
  }
`;

export const Star2 = styled.div`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${multipleBoxShadow(200)};
  animation: ${animStar} 100s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${multipleBoxShadow(200)};
  }
`;

export const Star3 = styled.div`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${multipleBoxShadow(100)};
  animation: ${animStar} 150s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${multipleBoxShadow(100)};
  }
`;

export const Section = styled.section`
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
`;
export const Title = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;

  color: #fff;
  text-align: center;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;

  margin-top: -60px;
  padding-left: 10px;
`;
