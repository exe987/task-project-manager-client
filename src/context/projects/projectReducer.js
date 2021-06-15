import {
  ADD_PROJECT,
  ADD_PROJECT_ERROR,
  ADD_PROJECT_SUCCESS,
  DELETE_PROJECT,
  DELETE_PROJECT_ERROR,
  DELETE_PROJECT_SUCCESS,
} from '../../types/index';

const projectReducer = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT_ERROR:
      return {
        ...state,
      };

    case DELETE_PROJECT:
      return {
        ...state,
      };

    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
      };

    case DELETE_PROJECT_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default projectReducer;
