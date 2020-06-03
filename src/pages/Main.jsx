import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Page } from '../components/Page';
import { ImageView } from '../components/ImageView';
import { Button } from '../components/Button';

import { FETCH_IMAGE } from '../store/actionTypes/images';

const StyledPageContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  align-items: center;
  justify-content: space-between;
`;

class MainPage extends React.PureComponent {
  componentDidMount() {
    const { fetchImage, appLoaded } = this.props;
    if (appLoaded) {
      return;
    }

    fetchImage();
  }

  render() {
    const { fetchImage, lastImage } = this.props;
    const url = (lastImage && lastImage.url) || '';
    return (
      <Page>
        <StyledPageContent>
          <ImageView
            url={url}
            title='Картинка для загрузки'
          />
          <Button text='Загрузить' onClick={fetchImage} />
        </StyledPageContent>
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appLoaded: state.appLoaded,
    lastImage: state.lastImage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImage: () => dispatch({ type: FETCH_IMAGE })
  };
};

const ConnectedPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export { ConnectedPage as MainPage };