import React from 'react';
import { Link } from './Link';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 80px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Header = React.memo(() => {
  return (
    <StyledHeader>
      <nav>
        <Link to='/'>Главная</Link>
        <Link to='/history'>История</Link>
      </nav>
    </StyledHeader>
  )
});

export { Header };