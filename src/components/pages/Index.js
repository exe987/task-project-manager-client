import React, { useEffect, useContext } from 'react';
import Form from '../ui/FormProject';
import Projects from '../ui/Projects';
import ProjectContext from '../../context/projects/projectContext';

const Index = () => {
  const projectContext = useContext(ProjectContext);
  const { getProjects } = projectContext;

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container-fluid mt-5'>
      <div className='row align-items-center p-5 screen bg-light'>
        <div className='col-sm-12 col-md-4'>
          <Form />
        </div>
        <div className='col-sm-12 col-md-8'>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Index;
