import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { ImageView } from './ImageView';
import { Button } from './Button';
import { Pagination } from './Pagination';

const StyledList = styled.ul`
  list-style: none;
  height: 100%;
  overflow-y: scroll;
  padding: 12px;
  max-width: 800px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0.5px solid grey;
  border-radius: 5px;
  margin-bottom: -0.5px;
  margin: 0 auto;
  justify-content: space-between;
`;

const ListFooter = styled.div`
  margin-top: 10px;
  padding: 5px;
  width: 100%;
`;

const StyledImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow-y: scroll;
  padding: 5px;
  span {
    width: 80%;
    margin-bottom: 5px;
  }
`;

const StyledListPagination = styled(Pagination)`
  margin: 0 auto;
`;

const ImageList = React.memo(({ images, maxCount = 1, className, onRemoveImage }) => {
  const pageCount = useMemo(() => images.length / maxCount, [images, maxCount]);
  const [currentPage, setCurrentPage] = useState(0);
  const onPageClick = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const startIndex = currentPage * maxCount;
  const endIndex = startIndex + maxCount;

  return (
    <StyledList className={className}>
      <div>
        {images.length > 0 ? images.slice(startIndex, endIndex).map(({ id, url, title, time }) => (
          <ListItem key={id}>
            <StyledImageInfo>
              <span>Название: {title}</span>
              <span>Дата загрузки: {time}</span>
              <Button text='Удалить' onClick={() => onRemoveImage(id)} />
            </StyledImageInfo>
            <ImageView url={url} title={title} />
          </ListItem>
        )) : <span>Изображения отсутствуют</span>}
      </div>
      <ListFooter>
        {images.length > 0 && <StyledListPagination
          pageCount={pageCount}
          currentPage={currentPage}
          onPageClick={onPageClick}
        />}
      </ListFooter>
    </StyledList>
  );
});

export { ImageList };