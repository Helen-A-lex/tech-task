import React from 'react';
import { List, Section } from './Flex.styled';

export const Flex = ({ children }) => {
  return (
    <Section>
      <List>{children}</List>
    </Section>
  );
};
