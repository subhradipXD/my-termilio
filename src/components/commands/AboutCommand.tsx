import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from '../../context/ThemeContext'; // Make sure to import the hook

const AboutCommand: React.FC = () => {
    const { themeMode } = useTheme(); // Get the current theme mode
    const textColor = themeMode === 'light' ? 'text-black' : 'text-gray-400';

    const aboutText = `Heey there! I’m Subhradip, a successful code copier who spends more time Googling “how to fix my code” than actually coding. I juggle React, and Next.js, Tailwind CSS while pretending to be a tech genius. Check out my projects, or don’t—I’ll be here, sipping coffee and waiting for inspiration (or a snack).`;

    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + aboutText[index]);
            index++;
            if (index === aboutText.length - 1) {
                clearInterval(intervalId);
            }
        }, 20); // Adjust speed of the typewriter effect here
        return () => clearInterval(intervalId); // Clean up on unmount
    }, [aboutText]);

    return (
        <motion.div
            className="ms-5 text-lg font-vt323"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <p className={`mt-2 w-1/2 me-96 ms-10 ${textColor}`}>
                {displayedText}
            </p>
        </motion.div>
    );
};

export default AboutCommand;
