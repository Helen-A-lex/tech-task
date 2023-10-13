import React from 'react';
import { HeaderContainer, Link, List } from '../Header/Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tweets">Tweets</Link>
          </li>
        </List>
      </nav>
    </HeaderContainer>
  );
};
