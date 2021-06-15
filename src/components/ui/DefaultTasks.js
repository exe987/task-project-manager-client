import React from 'react';
import { templates } from '../../context/projects/templates';

const DefaultTasks = () => {
  return (
    <ul className='list-group mt-3 bg-secondary p-5'>
      <p className='h4 text-white'>TEMPLATES</p>
      {templates.map((template) => (
        <li key={template.id} className='list-group-item bg-dark text-white'>
          {template.name}
        </li>
      ))}
    </ul>
  );
};

export default DefaultTasks;
