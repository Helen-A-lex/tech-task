import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  padding: 15px 15px;
  border-bottom: 1px solid #d55eaa;
  min-width: 320px;

  box-shadow: -8px -1px 54px -13px rgba(66, 68, 90, 1);
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  height: 50px;
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: start;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #373737;
  font-weight: 700;
  font-size: 27px;

  &.active {
    color: #6813ad;
  }
`;
