import React from 'react';

const ProjectsCommand: React.FC = () => {
    const projects = [
        {
            name: 'next-todo',
            repo: 'https://github.com/subhradipXD/next-todo',
            description: 'A simple todo list application using next.js, tailwind css, mongodb.'
        },
        {
            name: 'Tirupati Iron',
            repo: 'https://github.com/subhradipXD/tirupatiiron',
            description: 'A clients project for business using react, bootstrap (working...).'
        },
        {
            name: 'Spring todo',
            repo: 'https://github.com/subhradipXD/SpringBootTodoApp',
            description: 'A simple todo list application using spring-boot.'
        },
        {
            name: 'NUXBUY',
            repo: 'https://github.com/subhradipXD/NUXBUY',
            description: 'An online store using react.js, tailwind css, firebase, fake store api. '
        },
        {
            name: 'tic-tac-toe',
            repo: 'https://github.com/subhradipXD/tic-tac-toe',
            description: 'A tic-tac-toe game using react.js.'
        },
        {
            name: 'Weather-App',
            repo: 'https://github.com/subhradipXD/weather-app',
            description: 'A weather application using react.js, bootstrap, openweather api.'
        },
        {
            name: 'FundWise',
            repo: 'https://github.com/subhradipXD/FundWise',
            description: 'A responsive website for make a communication channel between entrepreneur and investor, to help entrepreneurs make their business grow.'
        },
        {
            name: 'Task-Master',
            repo: 'https://github.com/subhradipXD/TaskMaster',
            description: 'A simple todo list application using react.js, bootstrap, mongodb.'
        },
        {
            name: 'GUI Porfolio',
            repo: 'https://github.com/subhradipXD/portfolio',
            description: 'My gui portfolio using react.js, tailwind css, framer motion.'
        },
        // Add more projects as needed
    ];

    return (
        <div className='mt-2 ms-10'>
            <p>Here are some of my projects:</p>
            <div className="flex flex-col space-y-4 mt-2 ms-5">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="flex">
                            <span className="font-bold text-green-500">{project.name}:</span>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline ms-5"
                            >
                                GitHub Repo
                            </a>
                        </div>
                        <p className="text-white">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsCommand;
