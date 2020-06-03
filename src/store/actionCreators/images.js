import { ADD_IMAGE, REMOVE_IMAGE } from '../actionTypes/images';

export const addImage = (id, url) => {
  return {
    type: ADD_IMAGE,
    id,
    url
  };
};

export const removeImage = (id) => {
  return {
    type: REMOVE_IMAGE,
    id
  }
}