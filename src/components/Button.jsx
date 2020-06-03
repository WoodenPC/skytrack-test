import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  height: 28px;
  padding: 4px;
  color: white;
  background: linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
`;

const Button = React.memo(({ text = '', onClick, className }) => {
  return (
    <StyledButton
      onClick={onClick}
      className={className}
    >
      {text}
    </StyledButton>
  );
});

export { Button };