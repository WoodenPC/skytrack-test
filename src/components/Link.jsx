import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';


const StyledLink = styled(RouterLink)`
  height: 24px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  background: #FFFFFF;
  color: black;
  padding: 5px 10px;
`;

const Link = React.memo(({ to, children }) => {
  return (
    <StyledLink to={to}>{children}</StyledLink>
  );
});

export { Link };