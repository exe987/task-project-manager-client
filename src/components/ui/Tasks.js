import React, { useContext } from 'react';
import TaskContext from '../../context/tasks/taskContext';

const Tasks = () => {
  const taskContext = useContext(TaskContext);
  const { tasks, deleteTaskContext, getTaskToEdit } = taskContext;

  return (
    <div className='list-group mt-3 bg-secondary p-5'>
      <p className='h4 text-white'>TASKS</p>
      {tasks.length > 0
        ? tasks.map((task) => (
            <div className='mt-3' key={task.id}>
              <div className='card '>
                <div className='card-header h5 bg-dark text-white'>{task.name}</div>
                <div className='card-body'>
                  {!task.done ? (
                    <p className='card-text'>{task.description}</p>
                  ) : (
                    <strike className='card-text'>{task.description}</strike>
                  )}
                </div>
              </div>
              <button type='button' className='btn btn-success btn-sm'>
                {!task.done ? 'READY' : 'NOT-READY'}
              </button>
              <button type='button' className='btn btn-danger btn-sm' onClick={() => deleteTaskContext(task.id)}>
                DELETE
              </button>
            </div>
          ))
        : 'NO TASKS'}
    </div>
  );
};

export default Tasks;
