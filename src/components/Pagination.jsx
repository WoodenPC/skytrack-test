import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Button } from './Button';


const StyledPagination = styled.nav`
  display: flex;
  flex-direction: row;
  max-width: 600px;
  justify-content: center;
`;

const PaginationButton = styled(Button)`
  width: 40px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  background: #FFFFFF;
  color: black;
  padding: 5px 10px;
  border-radius: none;
  margin: 5px 5px 5px 0;
  flex-wrap: wrap;
`;

const Pagination = React.memo(({ pageCount, currentPage, onPageClick, className }) => {
  const items = useMemo(() => {
    const result = [];
    for (let i = 0; i < pageCount; i++) {
      result.push(
        <PaginationButton
          key={i}
          selected={currentPage === i}
          onClick={() => { onPageClick(i); }}
          text={i + 1}
        />
      );
    }
    return result;
  }, [pageCount, currentPage, onPageClick]);

  return (
  <StyledPagination className={className}>
    {items}
  </StyledPagination>);
});

export { Pagination }