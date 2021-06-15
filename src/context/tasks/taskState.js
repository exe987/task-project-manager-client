import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
import clienteAxios from '../../config/axios';

import {
  ADD_TASK_ERROR,
  ADD_TASK_SUCCESS,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_ERROR,
  READY_TASK,
  CLEAN_ERROR,
} from '../../types/index';

const Tasks = (props) => {
  const initialState = {
    tasks: [],
    taskToEdit: null,
    errors: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTaskContext = async (task) => {
    try {
      await clienteAxios.post('/api/tasks', task);
      getTasks(task.id_project);
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADD_TASK_ERROR,
        payload: error.response.data.errors,
      });
      setTimeout(() => {
        dispatch({
          type: CLEAN_ERROR,
        });
      }, 3000);
    }
  };

  const getTasks = async (id) => {
    try {
      const response = await clienteAxios.get(`/api/tasks/${id}`, {
        params: { id: id },
      });
      dispatch({
        type: ADD_TASK_SUCCESS,
        payload: response.data.tasks,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADD_TASK_ERROR,
      });
    }
  };

  const deleteTaskContext = async (task) => {
    dispatch({
      type: DELETE_TASK,
    });
    try {
      await clienteAxios.delete(`/api/tasks/${task._id}`, {
        params: {
          id: task._id,
        },
      });
      getTasks(task.id_project);
      dispatch({
        type: DELETE_TASK_SUCCESS,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: DELETE_TASK_ERROR,
        payload: error.response.data.errors,
      });
    }
  };

  const changeStateTask = async (task) => {
    try {
      await clienteAxios.put(`/api/tasks/${task._id}`, task);
      getTasks(task.id_project);
      dispatch({
        type: READY_TASK,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        errors: state.errors,
        addTaskContext,
        getTasks,
        deleteTaskContext,
        changeStateTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default Tasks;
