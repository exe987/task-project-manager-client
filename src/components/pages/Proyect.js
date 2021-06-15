import React, { useContext, useEffect } from 'react';
import FormTask from '../ui/FormNewTask';
import Tasks from '../ui/Tasks';
import TaskContext from '../../context/tasks/taskContext';
import { useParams } from 'react-router-dom';

const Project = () => {
  const taskContext = useContext(TaskContext);
  const { getTasks, errors } = taskContext;
  const { id } = useParams();

  useEffect(() => {
    getTasks(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container-fluid mt-5'>
      <div className='row align-items-center p-5 screen bg-light'>
        <div className='col-sm-12 col-md-4'>
          <FormTask />
          {errors
            ? errors.map((error) => (
                <div key={error.msg} className='alert alert-danger mt-3' role='alert'>
                  {error.msg}
                </div>
              ))
            : null}
        </div>
        <div className='col-sm-12 col-md-8'>
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Project;
