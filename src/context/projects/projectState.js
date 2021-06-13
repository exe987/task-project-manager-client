import React, { useReducer } from 'react';
import ProjectContext from './projectContext';
import projectReducer from './projectReducer';
import clienteAxios from '../../config/axios';

import {
  ADD_PROJECT,
  ADD_PROJECT_ERROR,
  ADD_PROJECT_SUCCESS,
  DELETE_PROJECT,
  DELETE_PROJECT_ERROR,
  DELETE_PROJECT_SUCCESS,
} from '../../types/index';

const Projects = (props) => {
  const initialState = {
    projects: [],
    templates: [
      {
        id: 1,
        name: 'Have a child',
        tasks: [
          {
            name: 'Put a name',
            description: 'Put a name to baby',
            id: 1,
          },
          {
            name: 'Wash baby',
            description: 'Wash baby please',
            id: 2,
          },
        ],
      },
      {
        id: 2,
        name: 'Plant a tree',
        tasks: [
          {
            name: 'Put a name',
            description: 'Put a name to baby',
            id: 1,
          },
          {
            name: 'Wash baby',
            description: 'Wash baby please',
            id: 2,
          },
        ],
      },
    ],
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const addProjectContext = async (project) => {
    dispatch({
      type: ADD_PROJECT,
    });
    try {
      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: project,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADD_PROJECT_ERROR,
        payload: error.response.data.errors,
      });
    }
  };

  const deleteProjectContext = async (id) => {
    dispatch({
      type: DELETE_PROJECT,
    });
    try {
      dispatch({
        type: DELETE_PROJECT_SUCCESS,
        payload: id,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: DELETE_PROJECT_ERROR,
        payload: error.response.data.errors,
      });
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        templates: state.templates,
        addProjectContext,
        deleteProjectContext,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default Projects;
