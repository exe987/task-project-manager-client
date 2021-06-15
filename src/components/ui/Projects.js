import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../../context/projects/projectContext';
import Swal from 'sweetalert2';

const Projects = () => {
  const projectContext = useContext(ProjectContext);
  const { projects, deleteProjectContext } = projectContext;

  const deleteProject = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProjectContext(id);
      }
    });
  };

  return (
    <ul className='list-group mt-3 p-5'>
      <h1 className='display-3 text-center'>Projects</h1>
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project._id} className='mt-2 p-3'>
            <h4 className='list-group-item bg-dark display-5 text-white text-center'>{project.name}</h4>
            <Link to={`project/${project._id}`} className='btn btn-warning btn-sm'>
              VIEW
            </Link>
            <button type='button' className='btn btn-danger btn-sm' onClick={() => deleteProject(project._id)}>
              DELETE
            </button>
          </div>
        ))
      ) : (
        <h4 className='display-5 text-center'>No projects yet!!</h4>
      )}
    </ul>
  );
};

export default Projects;
