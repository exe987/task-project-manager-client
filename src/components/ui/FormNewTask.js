import React, { useState, useContext } from 'react';
import TaskContext from '../../context/tasks/taskContext';
import { useParams } from 'react-router-dom';

const FormTask = () => {
  const taskContext = useContext(TaskContext);
  const { addTaskContext } = taskContext;

  const { id } = useParams();

  //LOCAL STATES
  const [data, setData] = useState({
    name: '',
    description: '',
  });
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const { name, description } = data;

  const submitData = (e) => {
    e.preventDefault();

    if (name.trim() === '' || description.trim() === '') {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
      return;
    }
    
    data.id_project = id;
    addTaskContext(data);
    setData({
      name: '',
      description: '',
    });
  };

  return (
    <form className='p-4 bg-dark mt-3' onSubmit={submitData}>
      <p className='h4 text-white'>ADD A TASK</p>
      <div className='form-group'>
        <input
          onChange={handleChange}
          type='text'
          className='form-control'
          name='name'
          value={name}
          placeholder='Enter name task'
        />
      </div>
      <div className='form-group'>
        <textarea
          onChange={handleChange}
          className='form-control'
          name='description'
          value={description}
          rows='3'
          placeholder='Describe task'
        ></textarea>
      </div>
      {alert ? (
        <div className='alert alert-danger' role='alert'>
          Please, fill all needed fields with data about task.
        </div>
      ) : null}
      <button type='submit' className='btn btn-warning'>
        +
      </button>
      <br />
      <a href='/' className='text-white'>
        Go to projects
      </a>
    </form>
  );
};

export default FormTask;
