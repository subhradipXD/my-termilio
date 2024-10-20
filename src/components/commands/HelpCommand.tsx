/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

const HelpCommand: React.FC = () => {
    const commands = [
        { command: 'about/abt', description: '- stop stalking me, stalker' },
        { command: 'clear/cls', description: '- clear your own trash' },
        { command: 'contact/cnt', description: "- let's have a chat" },
        { command: 'echo', description: '- print something' },
        { command: 'education/edu', description: '- my education' },
        { command: 'gui', description: '- my other portfolio' },
        { command: 'help/hlp', description: "- you already know. don't you?" },
        { command: 'projects/prj', description: '- my babies' },
        { command: 'pwd', description: '- current working directory' },
        { command: 'themes', description: '- for available themes' },
        { command: 'skills', description: '- my skills' },
        { command: '-----', description: '-----' },
        { command: 'Up Arrow', description: '=> go back to previous commands' },
    ];

    const [displayedCommands, setDisplayedCommands] = useState<{ command: string; description: string; }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < commands.length) {
            const timer = setTimeout(() => {
                setDisplayedCommands((prev) => [...prev, commands[currentIndex]]);
                setCurrentIndex((prev) => prev + 1);
            }, 300); // Delay between each command appearing

            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [currentIndex, commands]);

    return (
        <div className='ms-5 text-lg font-vt323'>
            <p className='mt-2'>available commands:</p>
            <div className="ms-5 mt-2 flex flex-col space-y-2">
                {displayedCommands.map(({ command, description }, index) => (
                    <div key={index} className="grid grid-cols-4 gap-0">
                        <span className="ms-10">{command}</span>
                        <span className="me-auto">{description}</span>
                    </div>
                ))}
                {/* <span className='ms-10'>-----</span>
                <div className="grid grid-cols-4 gap-0">
                    <span className="ms-10">Up Arrow</span>
                    <span className="me-auto">{'=>'} go back to previous commands</span>
                </div> */}
            </div>
        </div>
    );
};

export default HelpCommand;
