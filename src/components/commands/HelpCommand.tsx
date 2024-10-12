import React from 'react';

const HelpCommand: React.FC = () => {
    const commands = [
        { command: 'about/abt', description: 'stop stalking me, stalker' },
        { command: 'clear/cls', description: 'clear your own trash' },
        { command: 'contact/cnt', description: "let's have a chat" },
        { command: 'echo', description: 'print something' },
        { command: 'education/edu', description: 'my education' },
        { command: 'gui', description: 'my other portfolio' },
        { command: 'help/hlp', description: "you already know. don't you?" },
        { command: 'projects/prj', description: 'my babies' },
        { command: 'pwd', description: 'current working directory' },
        // { command: 'theme', description: 'for available themes' },
        { command: 'skill/skills', description: 'my skills' },
    ];

    return (
        <div className='ms-5'>
            <p className='mt-2'>available commands:</p>
            <div className="ms-5 mt-2 flex flex-col space-y-2">
                {commands.map(({ command, description }, index) => (
                    <div key={index} className=" grid grid-cols-4 gap-0">
                        <span className="text-green-400 animate-pulse ms-10">{command}</span>
                        <span className="text-green-500 me-auto">- {description}</span>
                    </div>
                ))}
                <span className='ms-10'>-----</span>
                <div className=" grid grid-cols-4 gap-0">
                    <span className="text-green-400 animate-pulse ms-10">Up Arrow</span>
                    <span className="text-green-500 me-auto">{'=>'} go back to previous commands</span>
                </div>
            </div>
        </div>


        // <div className="ms-10 mt-2">
        //     <p className='mt-2'>my skills:</p>

        //     <div className="flex w-1/2">
        //         <div className="w-1/2">
        //             {commands.map((command, index) => (
        //                 <div key={index} className="ms-5 mt-2">
        //                     <span className="text-green-400 animate-pulse">{command.command}</span>
        //                 </div>
        //             ))}
        //         </div>

        //         <div className="w-1/2">
        //             {commands.map((command, index) => (
        //                 <div key={index} className="mt-2">
        //                     <span className="text-green-500">- {command.description}</span>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>

        //     <span className='ms-5'>-----</span>
        //     <div className="flex w-1/2">
        //         <div className="text-green-400 animate-pulse ms-5 w-1/3">Up Arrow</div>
        //         <div className="text-green-500 w-1/2 ms-0">{'=>'} go back to previous command</div>
        //     </div>
        // </div>
    );

};

export default HelpCommand;
