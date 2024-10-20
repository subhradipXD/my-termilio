import React from 'react';
import { motion, Variants } from 'framer-motion';

interface Skill {
    name: string;
}

const SkillCommand: React.FC = () => {
    const skills: Skill[] = [
        { name: 'HTML/CSS' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'JAVA' },
        { name: 'MySQL' },
    ];
    const skills2: Skill[] = [
        { name: 'React.js' },
        { name: 'Next.js' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'Spring Boot' },
    ];
    const skills3: Skill[] = [
        { name: 'Firebase' },
        { name: 'MongoDB' },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    const renderSkills = (skillsArray: Skill[]) => (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-1/3"
        >
            {skillsArray.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="ms-5 mt-2">
                    <span>{skill.name}</span>
                </motion.div>
            ))}
        </motion.div>
    );

    return (
        <div className="ms-10 mt-2 text-lg font-vt323">
            <p className="mt-2">my skills:</p>
            <div className="flex w-1/2">
                {renderSkills(skills)}
                {renderSkills(skills2)}
                {renderSkills(skills3)}
            </div>
        </div>
    );
};

export default SkillCommand;