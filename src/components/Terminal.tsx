import React, { useState, KeyboardEvent } from 'react';
import HelpCommand from './commands/HelpCommand';
import AboutCommand from './commands/AboutCommand';
import ProjectsCommand from './commands/ProjectsCommand';
import ContactMeCommand from './commands/ContactMeCommand';
import EducationCommand from './commands/EducationCommand';
import EchoCommand from './commands/EchoCommand';
import GUICommand from './commands/GUICommand';
import PWDCommand from './commands/PWDCommand';
import SkillCommand from './commands/SkillCommand';

interface Command {
    command: string;
    output: JSX.Element;
}

const Terminal: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<Command[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);

    const handleCommand = (command: string) => {
        let response: JSX.Element;

        const [baseCommand, ...args] = command.split(' ');
        const message = args.join(' ');

        switch (baseCommand.toLowerCase()) {
            case 'help':
            case 'hlp':
                response = <HelpCommand />;
                break;
            case 'about':
            case 'abt':
                response = <AboutCommand />;
                break;
            case 'projects':
            case 'prj':
                response = <ProjectsCommand />;
                break;
            case 'education':
            case 'edu':
                response = <EducationCommand />;
                break;
            case 'contact':
            case 'cnt':
                response = <ContactMeCommand />;
                break;
            case 'clear':
            case 'cls':
                setOutput([]);
                return;
            case 'echo':
                response = <EchoCommand message={message} />;
                break;
            case 'gui':
                response = <GUICommand />;
                break;
            case 'pwd':
                response = <PWDCommand />;
                break;
            case 'skills':
            case 'skill':
                response = <SkillCommand />;
                break;

            default:
                response = <p>Command not found. Type "help" for a list of commands.</p>;
        }

        setOutput((prevOutput) => [...prevOutput, { command, output: response }]);
        setHistory((prevHistory) => [...prevHistory, command]);
        setHistoryIndex(-1);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            if (historyIndex < history.length - 1) {
                setHistoryIndex((prevIndex) => prevIndex + 1);
                setInput(history[history.length - 1 - (historyIndex + 1)]);
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex > 0) {
                setHistoryIndex((prevIndex) => prevIndex - 1);
                setInput(history[history.length - 1 - (historyIndex - 1)]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    return (
        <div className="bg-black text-green-500 font-mono h-screen p-4">
            <div className="overflow-auto mb-4">
                {output.map((entry, index) => (
                    <div key={index} className="mb-2">
                        <p>
                            <span className="pr-2">visitor@terminal.subhradipXD:~$</span>
                            {entry.command}
                        </p>
                        {entry.output}
                    </div>
                ))}
            </div>
            <div className="flex items-center">
                <span className="pr-2">visitor@terminal.subhradipXD:~$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-black text-green-500 focus:outline-none flex-grow"
                    autoFocus
                />
            </div>
        </div>
    );
};

export default Terminal;
