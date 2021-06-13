import React from 'react';

const DefaultTasks = () => {
    const templates = [
        {
            id: 1,
            name: 'Have a child',
            tasks: [
                {
                    name: 'Put a name',
                    description: 'Put a name to baby',
                    id: 1,
                },
                {
                    name: 'Wash baby',
                    description: 'Wash baby please',
                    id: 2,
                },
            ],
        },
        {
            id: 2,
            name: 'Plant a tree',
            tasks: [
                {
                    name: 'Put a name',
                    description: 'Put a name to baby',
                    id: 1,
                },
                {
                    name: 'Wash baby',
                    description: 'Wash baby please',
                    id: 2,
                },
            ],
        },
    ];

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
