/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext'; // Make sure to import the hook

const EducationCommand: React.FC = () => {
    const educationDetails = [
        {
            institution: 'Heritage Institute of Technology, Kolkata – MAKAUT',
            duration: '2022 – 2024',
            degree: 'Master of Computer Application',
            score: 'DGPA: 7.32/10'
        },
        {
            institution: 'Mahishadal Raj College, Purba Medinipur – Vidyasagar University',
            duration: '2019 – 2022',
            degree: 'Bachelor of Computer Science',
            score: 'CGPA: 8.54/10'
        },
        {
            institution: 'Haldia Govt. Spon. Vivekananda Vidyabhaban, Purba Medinipur',
            duration: '2017 – 2019',
            degree: 'West Bengal Council of Higher Secondary Education',
            score: 'Percentage: 65.30%'
        },
        {
            institution: 'Vivekananda Mission Asram Sikshayatan, Purba Medinipur',
            duration: '2017',
            degree: 'West Bengal Board of Secondary Education',
            score: 'Percentage: 83.20%'
        }
    ];

    const { themeMode } = useTheme(); // Get the current theme mode

    const textColor = themeMode === 'light' ? 'text-black' : 'text-gray-400';
    const degreeColor = themeMode === 'light' ? 'text-blue-600' : 'text-blue-400'; // Darker blue for light theme

    const [currentIndex, setCurrentIndex] = useState(0);
    const [renderedEducation, setRenderedEducation] = useState<typeof educationDetails>([]);

    useEffect(() => {
        if (currentIndex < educationDetails.length) {
            const timer = setTimeout(() => {
                setRenderedEducation((prev) => [...prev, educationDetails[currentIndex]]);
                setCurrentIndex((prev) => prev + 1);
            }, 300); // Delay between each education block appearing

            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [currentIndex, educationDetails]);

    return (
        <motion.div
            className='ms-10 mt-2 text-lg font-vt323'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <p>My Education:</p>
            <div className="flex flex-col space-y-4 mt-2">
                {renderedEducation.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col space-y-1 ms-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={`font-bold ${textColor}`}>{edu.institution}</div>
                        <span className={`${textColor}`}>{edu.duration}</span>
                        <span className={degreeColor}>{edu.degree}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default EducationCommand;
