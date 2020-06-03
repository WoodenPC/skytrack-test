import { ADD_IMAGE, REMOVE_IMAGE } from '../actionTypes/images';

const defaultState = {
  appLoaded: false,
  lastImage: null,
  images: []
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_IMAGE:
      const lastImage = {
        id: action.id,
        url: action.url,
        time: action.time,
        title: action.title
      };
      return {
        ...state,
        images: state.images.concat([{ ...lastImage }]),
        lastImage,
        appLoaded: true
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image) => image.id !== action.id)
      };
    default:
      return state;
  }
}

export { reducer as imagesReducer };