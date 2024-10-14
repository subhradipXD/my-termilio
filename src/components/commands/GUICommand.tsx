import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Make sure to import the hook

const GUICommand: React.FC = () => {

    const { themeMode } = useTheme(); // Get the current theme mode
    const guiColor = themeMode === 'light' ? 'text-blue-600' : 'text-blue-400'; // Darker blue for light theme

    return (
        <div className='ms-5 mt-2'>
            <p className="ms-5">
                visit my other portfolio:
                <a
                    href="https://portfolio-lilac-one-87.vercel.app/" // Replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`underline ms-2 ${guiColor}`}
                >
                    click here
                </a>
            </p>
        </div>

    );
};

export default GUICommand;
