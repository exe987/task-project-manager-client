import React from 'react';
import FormTask from '../ui/FormNewTask';
import Tasks from '../ui/Tasks';

const Project = () => {
  return (
    <div className='container-fluid'>
      <div className='row align-items-center bg-dark p-5'>
        <div className='col-sm-12 col-md-4'>
          <FormTask />
        </div>
        <div className='col-sm-12 col-md-8'>
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Project;
