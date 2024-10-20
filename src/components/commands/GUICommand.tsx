/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from '../../context/ThemeContext'; // Make sure to import the hook

const GUICommand: React.FC = () => {
    const { themeMode } = useTheme(); // Get the current theme mode
    const guiColor = themeMode === 'light' ? 'text-blue-600' : 'text-blue-400'; // Darker blue for light theme

    const aboutText = 'viisit my other portfolio:'; // First part of the text
    const linkText = 'click here'; // Second part with the link

    const [displayedText, setDisplayedText] = useState("");
    const [isLinkVisible, setIsLinkVisible] = useState(false);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + aboutText[index]);
            index++;
            if (index === aboutText.length - 1) {
                clearInterval(intervalId);
                setIsLinkVisible(true); // Show the link after the text finishes typing
            }
        }, 20); // Speed of the typewriter effect

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [aboutText]);

    return (
        <motion.div
            className="ms-5 mt-2 text-lg font-vt323"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <p className="ms-5">
                {displayedText} {/* Display the typewriter effect */}
                {isLinkVisible && ( // Show link after the first part finishes typing
                    <a
                        href="https://portfolio-lilac-one-87.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`underline ms-2 ${guiColor}`}
                    >
                        {linkText}
                    </a>
                )}
            </p>
        </motion.div>
    );
};

export default GUICommand;
