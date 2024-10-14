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
import ThemesCommand from './commands/ThemeCommand';
import { useTheme } from '../context/ThemeContext';

interface Command {
    command: string;
    output: JSX.Element;
}

const Terminal: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<Command[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);

    const { themeMode, darkTheme, lightTheme, greenGoblinTheme, ubuntuTheme } = useTheme();

    const handleCommand = (command: string) => {
        let response: JSX.Element;

        const [baseCommand, ...args] = command.split(' ');
        const message = args.join(' ');

        switch (baseCommand.toLowerCase()) {
            case '':
                break;
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
                response = <SkillCommand />;
                break;
            case 'themes':
                response = <ThemesCommand />;
                break;
            case 'theme':
                switch (message.toLowerCase()) {
                    case 'dark':
                        if (themeMode !== 'dark') {
                            darkTheme();
                        }
                        break;
                    case 'light':
                        if (themeMode !== 'light') {
                            lightTheme();
                        }
                        break;
                    case 'green-goblin':
                        if (themeMode !== 'green-goblin') {
                            greenGoblinTheme();
                        }
                        break;
                    case 'ubuntu':
                        if (themeMode !== 'ubuntu') {
                            ubuntuTheme();
                        }
                        break;
                    default:
                        response = <p className='mt-2 ms-10'>No such theme available. Enter "themes" for a list of themes.</p>;
                }
                break;
            default:
                response = <p className='mt-2 ms-10'>Command not found. Enter "help" for a list of commands.</p>;
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
                setHistoryIndex((prev) => prev + 1);
                setInput(history[history.length - 1 - (historyIndex + 1)]);
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex > 0) {
                setHistoryIndex((prev) => prev - 1);
                setInput(history[history.length - 1 - (historyIndex - 1)]);
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    return (
        <div className="h-screen p-4 text-lg font-vt323">
            <div className="overflow-auto mb-4">
                {output.map((entry, index) => (
                    <div key={index} className="mb-2">
                        <p>
                            <span className="pr-2 text-orange-600 text-lg font-vt323">visitor@terminal.subhradipXD:~$</span>
                            <span className='text-yellow-500'>{entry.command}</span>
                        </p>
                        {entry.output}
                    </div>
                ))}
            </div>
            <div className="flex items-center text-lg font-vt323">
                <span className="pr-2 text-orange-600 text-lg font-vt323">visitor@terminal.subhradipXD:~$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="focus:outline-none flex-grow bg-transparent text-lg font-vt323 text-yellow-500"
                    autoFocus
                />
            </div>
        </div>


    );
};

export default Terminal;



