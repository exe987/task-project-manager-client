import React from 'react';
import Form from '../ui/FormProject';
import DefaultTasks from '../ui/DefaultTasks';
import Projects from './Projects';

const Index = () => {
    return (
        <div className='container-fluid'>
            <div className='row align-items-center bg-dark p-5'>
                <div className='col-sm-12 col-md-4'>
                    <Form />
                    <DefaultTasks />
                </div>
                <div className='col-sm-12 col-md-8'>
                    <Projects />
                </div>
            </div>
        </div>
    );
};

export default Index;
