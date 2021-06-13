import {
  ADD_TASK,
  ADD_TASK_ERROR,
  ADD_TASK_SUCCESS,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_ERROR,
  READY_TASK,
  NOT_READY_TASK,
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
        tasks: [...state.tasks, action.payload],
      };
    case ADD_TASK_ERROR:
      return {
        ...state,
      };

    case DELETE_TASK:
      return {
        ...state,
      };

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case DELETE_TASK_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default taskReducer;
