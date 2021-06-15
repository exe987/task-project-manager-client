import {
  ADD_TASK,
  ADD_TASK_ERROR,
  ADD_TASK_SUCCESS,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_ERROR,
  READY_TASK,
  CLEAN_ERROR,
} from '../../types/index';

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
      };

    case ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
      };

    case ADD_TASK_ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    case CLEAN_ERROR:
      return {
        ...state,
        errors: null,
      };

    case DELETE_TASK:
      return {
        ...state,
      };

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
      };

    case DELETE_TASK_ERROR:
      return {
        ...state,
      };

    case READY_TASK:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default taskReducer;
