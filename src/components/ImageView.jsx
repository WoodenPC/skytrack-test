import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledImageView = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  img {
    width: 400px;
    height: 400px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const StyledLoadingIndicator = styled.div`
  display: none;
  position: absolute;
  bottom: calc(5% - 20px);
  right: calc(5% - 20px);
  width: 40px;
  height: 40px;
  background-color: #ff0;

  border-radius: 100%;
  animation: scaleout 1.0s infinite ease-in-out;

  @keyframes scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}
`;

const ImageView = React.memo(({ url = '', title }) => {
  const loadingIndicatorRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    const { current } = loadingIndicatorRef;
    current.style.display = 'block';
    imageRef.current.onload = () => {
      current.style.display = 'none';
    }
  }, [url]);
  return (
    <StyledImageView>
      <img src={url} alt={title} ref={imageRef}></img>
      <StyledLoadingIndicator ref={loadingIndicatorRef} />
    </StyledImageView>
  );
});

export { ImageView };