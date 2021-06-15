import React, { useReducer } from 'react';
import ProjectContext from './projectContext';
import projectReducer from './projectReducer';
import clienteAxios from '../../config/axios';
import { templates } from './templates';

import {
  ADD_PROJECT,
  ADD_PROJECT_ERROR,
  ADD_PROJECT_SUCCESS,
  DELETE_PROJECT,
  DELETE_PROJECT_ERROR,
  DELETE_PROJECT_SUCCESS,
  ADD_TASK_ERROR,
  CLEAN_ERROR,
} from '../../types/index';

const Projects = (props) => {
  const initialState = {
    projects: [],
    templates: templates,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const addProjectContext = async (project, template_id) => {
    dispatch({
      type: ADD_PROJECT,
    });
    try {
      const response = await clienteAxios.post('/api/projects', project);
      const id = response.data.id;
      const tasks_template = templates[parseInt(template_id)].tasks;
      await tasks_template.map((task) =>
        addTaskTemplate({
          name: task.name,
          id_project: id,
          description: task.description,
          done: task.done,
        })
      );
      getProjects();
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADD_PROJECT_ERROR,
      });
      setTimeout(() => {
        dispatch({
          type: CLEAN_ERROR,
        });
      }, 3000);
    }
  };

  const addTaskTemplate = async (task) => {
    try {
      await clienteAxios.post('/api/tasks', task);
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADD_TASK_ERROR,
      });
    }
  };

  const getProjects = async () => {
    try {
      const response = await clienteAxios.get('/api/projects');
      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: response.data.projects,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADD_PROJECT_ERROR,
      });
    }
  };

  const deleteProjectContext = async (id) => {
    dispatch({
      type: DELETE_PROJECT,
    });
    try {
      await clienteAxios.delete(`/api/projects/${id}`, {
        params: {
          id: id,
        },
      });
      getProjects();
      dispatch({
        type: DELETE_PROJECT_SUCCESS,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: DELETE_PROJECT_ERROR,
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
        getProjects,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default Projects;
