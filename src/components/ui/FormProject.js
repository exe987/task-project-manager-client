import React, { useState, useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';

const FormProject = () => {
  const projectContext = useContext(ProjectContext);
  const { addProjectContext, templates } = projectContext;

  //LOCAL STATES
  const [data, setData] = useState({
    name: '',
  });
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const { name, template } = data;

  const submitData = (e) => {
    e.preventDefault();
    if (name.trim() === '' || template === null) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
      return;
    }

    const id_project = Math.random(5);
    const project = {
      name: name,
      id: id_project,
    };
    const tasksTemplates = templates[parseInt(template)].tasks.map((task) => (task.id = id_project));
    addProjectContext(project);
  };

  return (
    <form className='p-5 bg-secondary mt-3' onSubmit={submitData}>
      <p className='h4 text-white'>ADD A PROJECT</p>
      <div className='form-group'>
        <input
          onChange={handleChange}
          type='text'
          className='form-control'
          name='name'
          value={name}
          placeholder='Enter name project'
        />
      </div>
      {alert ? (
        <div className='alert alert-danger' role='alert'>
          Write a project name!!!
        </div>
      ) : null}
      <div className='form-group'>
        <select onChange={handleChange} className='form-control' placeholder='Select a template' name='template'>
          <option value={null}>---Pick a template---</option>
          {templates.map((template) => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>
      </div>
      <button type='submit' className='btn btn-warning'>
        +
      </button>
    </form>
  );
};

export default FormProject;
