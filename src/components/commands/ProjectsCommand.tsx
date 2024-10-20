/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext'; // Make sure to import the hook

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
            description: 'An online store using react.js, tailwind css, firebase, fake store api.'
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
            description: 'A responsive website to make a communication channel between entrepreneur and investor, to help entrepreneurs make their business grow.'
        },
        {
            name: 'Task-Master',
            repo: 'https://github.com/subhradipXD/TaskMaster',
            description: 'A simple todo list application using react.js, bootstrap, mongodb.'
        },
        {
            name: 'GUI Portfolio',
            repo: 'https://github.com/subhradipXD/portfolio',
            description: 'My GUI portfolio using react.js, tailwind css, framer motion.'
        },
        // Add more projects as needed
    ];

    const { themeMode } = useTheme(); // Get the current theme mode

    // Determine text colors based on the theme mode
    const nameColor = themeMode === 'light' ? 'text-black' : 'text-green-500';
    const repoColor = themeMode === 'light' ? 'text-blue-600' : 'text-blue-400'; // Darker blue for light theme
    const descriptionColor = themeMode === 'light' ? 'text-gray-800' : 'text-white'; // Darker gray for light theme

    const [currentIndex, setCurrentIndex] = useState(0);
    const [renderedProjects, setRenderedProjects] = useState<typeof projects>([]);

    useEffect(() => {
        if (currentIndex < projects.length) {
            const timer = setTimeout(() => {
                setRenderedProjects((prev) => [...prev, projects[currentIndex]]);
                setCurrentIndex((prev) => prev + 1);
            }, 300); // Delay between each project block appearing

            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [currentIndex, projects]);

    return (
        <motion.div
            className='mt-2 ms-10 w-1/2 text-lg font-vt323'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <p>Here are some of my projects:</p>
            <div className="flex flex-col space-y-4 mt-2 ms-5">
                {renderedProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex">
                            <span className={`font-bold ${nameColor}`}>{project.name}:</span>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${repoColor} underline ms-5`}
                            >
                                gitHub repo
                            </a>
                        </div>
                        <p className={descriptionColor}>{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectsCommand;
