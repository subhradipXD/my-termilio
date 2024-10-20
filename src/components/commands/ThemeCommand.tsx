import React from 'react';
import { motion } from 'framer-motion';

const typewriterVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: 'auto', transition: { duration: 0.05, staggerChildren: 0.05 } },
};

const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const ThemesCommand: React.FC = () => {
    const themes = ['light', 'dark', 'green-goblin', 'ubuntu'];

    return (
        <div className="mt-2 ms-10 text-lg font-vt323">
            <motion.p initial="hidden" animate="visible" variants={typewriterVariants}>
                available themes:
            </motion.p>
            <motion.ul className="list-none mt-2 space-y-2 ml-5" initial="hidden" animate="visible" variants={typewriterVariants}>
                {themes.map((theme, index) => (
                    <motion.li key={index} className="flex items-center" variants={letterVariants}>
                        {theme}
                    </motion.li>
                ))}
            </motion.ul>
            <div className='ms-5'>
                <motion.span initial="hidden" animate="visible" variants={letterVariants} className="">
                    -----
                </motion.span>
                <motion.p initial="hidden" animate="visible" variants={typewriterVariants}>
                    for change theme enter: theme {'<theme-name>'}
                </motion.p>
                <motion.p initial="hidden" animate="visible" variants={typewriterVariants}>
                    eg: theme ubuntu
                </motion.p>
            </div>
        </div>
    );
};

export default ThemesCommand;
