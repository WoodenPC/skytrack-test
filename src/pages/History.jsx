import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Page } from '../components/Page';
import { REMOVE_IMAGE } from '../store/actionTypes/images';
import { ImageList } from '../components/ImageList';

const StyledHistoryList = styled(ImageList)`
  margin: 0 auto;
`;

class HistoryPage extends React.PureComponent {
  render() {
    const { images, removeImage } = this.props;
    return (
      <Page>
        <StyledHistoryList
          images={images}
          maxCount={8}
          onRemoveImage={removeImage}
        />
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeImage: (id) => dispatch({ type: REMOVE_IMAGE, id })
  }
}

const ConnectedPage = connect(mapStateToProps, mapDispatchToProps)(HistoryPage);

export { ConnectedPage as HistoryPage };