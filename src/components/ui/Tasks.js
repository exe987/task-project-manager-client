import React, { useContext } from 'react';
import TaskContext from '../../context/tasks/taskContext';
import Swal from 'sweetalert2';

const Tasks = () => {
  const taskContext = useContext(TaskContext);
  const { tasks, deleteTaskContext, changeStateTask } = taskContext;

  const deleteTask = (task) => {
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
        deleteTaskContext(task);
      }
    });
  };

  return (
    <div className='list-group mt-3 p-5'>
      <h1 className='display-3 text-center'>Tasks</h1>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div className='mt-3' key={task._id}>
            <div className='card'>
              <div className='card-header bg-dark'>
                <h4 className='display-5 text-white text-center'>{task.name}</h4>
              </div>
              <div className='card-body'>
                {!task.done ? (
                  <figure className='text-center'>
                    <blockquote className='blockquote'>
                      <p className='card-text'>{task.description}</p>
                    </blockquote>
                  </figure>
                ) : (
                  <figure className='text-center'>
                    <blockquote className='blockquote'>
                      <strike className='card-text'>{task.description}</strike>
                    </blockquote>
                  </figure>
                )}
              </div>
            </div>
            <button type='button' className='btn btn-warning btn-sm' onClick={() => deleteTask(task)}>
              DELETE
            </button>
            <button
              type='button'
              className={`btn ${task.done ? 'btn-danger' : 'btn-success'} btn-sm`}
              onClick={() => changeStateTask(task)}
            >
              {!task.done ? 'READY' : 'NOT-READY'}
            </button>
          </div>
        ))
      ) : (
        <h4 className='display-5 text-center'>No tasks yet!!</h4>
      )}
    </div>
  );
};

export default Tasks;
