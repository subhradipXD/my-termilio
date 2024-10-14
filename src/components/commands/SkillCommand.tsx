import React from 'react';

const SkillCommand: React.FC = () => {

    const skills = [
        { name: 'HTML/CSS' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'JAVA' },
        { name: 'MySQL' },
    ];

    const skills2 = [
        { name: 'React.js' },
        { name: 'Next.js' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'Spring Boot' },
    ];

    const skills3 = [
        { name: 'Firebase' },
        { name: 'MongoDB' },
    ];
    return (
        <div className="ms-10 mt-2 text-lg font-vt323">
            <p className='mt-2'>my skills:</p>
            <div className="flex w-1/2">

                <div className="w-1/3">
                    {skills.map((skill, index) => (
                        <div key={index} className="ms-5 mt-2">
                            <span className="">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="w-1/3">
                    {skills2.map((skill, index) => (
                        <div key={index} className="ms-5 mt-2">
                            <span className="">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="w-1/3">
                    {skills3.map((skill, index) => (
                        <div key={index} className="ms-5 mt-2">
                            <span className="">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillCommand;
