import React from 'react';
import styled from 'styled-components';

export const StyledPage = styled.div`
  width: 100%;
  flex: 1 0 auto;
  box-sizing: border-box;
`;


const Page = ({children}) => {
  return (
    <StyledPage>{children}</StyledPage>
  );
};

export { Page };