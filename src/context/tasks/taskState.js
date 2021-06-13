import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
import clienteAxios from '../../config/axios';

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

const Tasks = (props) => {
  const initialState = {
    tasks: [
      {
        id: 1,
        name: 'Have a child',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        done: true,
        id_project: 1,
      },
      {
        id: 2,
        name: 'Plant a tree',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        done: false,
        id_project: 1,
      },
      {
        id: 3,
        name: 'Write a book',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        done: false,
        id_project: 1,
      },
    ],
    taskToEdit: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTaskContext = async (task) => {
    dispatch({
      type: ADD_TASK,
    });
    try {
      dispatch({
        type: ADD_TASK_SUCCESS,
        payload: task,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADD_TASK_ERROR,
        payload: error.response.data.errors,
      });
    }
  };

  const deleteTaskContext = async (id) => {
    dispatch({
      type: DELETE_TASK,
    });
    try {
      dispatch({
        type: DELETE_TASK_SUCCESS,
        payload: id,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: DELETE_TASK_ERROR,
        payload: error.response.data.errors,
      });
    }
  };
  const getTaskToEdit = async (task) => {
    try {
      dispatch({
        type: READY_TASK,
        payload: task,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTaskContext,
        deleteTaskContext,
        getTaskToEdit,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default Tasks;
