import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';

const Projects = () => {
  const projectContext = useContext(ProjectContext);
  const { projects, deleteProjectContext } = projectContext;

  return (
    <ul className='list-group mt-3 bg-secondary p-5'>
      <p className='h4 text-white'>PROJECTS</p>
      {projects.length > 0
        ? projects.map((project) => (
            <div key={project.id} className='mt-3 '>
              <li className='list-group-item bg-dark text-white'>{project.name}</li>
              <Link to={`project/${project.id}`} className='btn btn-warning btn-sm'>
                VIEW
              </Link>
              <button type='button' className='btn btn-danger btn-sm' onClick={() => deleteProjectContext(project.id)}>
                DELETE
              </button>
            </div>
          ))
        : 'THERE IS NOT PROJECTS'}
    </ul>
  );
};

export default Projects;
