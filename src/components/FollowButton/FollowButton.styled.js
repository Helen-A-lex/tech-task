import styled from 'styled-components';
export const Button = styled.button`
  display: flex;
  width: 196px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10.311px;
  background: ${(props) =>
    props.isfollowing === 'true' ? '#5CD3A8' : '#ebd8ff'};
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  color: #373737;
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  border: none;
`;
