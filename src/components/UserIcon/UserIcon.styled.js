import styled from 'styled-components';
// export const Path = styled.path`
//   fill: currentColor;
// `;

export const Svg = styled.svg`
  width: 85px;
  height: 85px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover,
  &:focus {
    background-color: #ebd8ff;
  }
`;
