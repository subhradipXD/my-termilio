import React from "react";
import { useTheme } from '../../context/ThemeContext'; // Make sure to import the hook

const AboutCommand: React.FC = () => {

    const { themeMode } = useTheme(); // Get the current theme mode

    const textColor = themeMode === 'light' ? 'text-black' : 'text-gray-400';
    return (
        <div className="ms-5">
            <p className={`mt-2 w-1/2 me-96 ms-10 ${textColor}`}>
                Hey there! I’m Subhradip, a successful code copier who spends more time
                Googling “how to fix my code” than actually coding. I juggle React, and
                Next.js, Tailwind CSS while pretending to be a tech genius. Check out my
                projects, or don’t—I’ll be here, sipping coffee and waiting for
                inspiration (or a snack).
            </p>
        </div>
    );
};

export default AboutCommand;
