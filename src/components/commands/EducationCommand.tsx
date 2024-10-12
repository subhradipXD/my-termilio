import React from 'react';

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

    return (
        <div className='ms-10 mt-2'>
            <p>my education:</p>
            <div className="flex flex-col space-y-4 mt-2">
                {educationDetails.map((edu, index) => (
                    <div key={index} className="flex flex-col space-y-1 ms-5">
                        <div className="font-bold text-green-500">{edu.institution}</div>
                        <span className="text-gray-400">{edu.duration}</span>
                        <span className="text-blue-400">{edu.degree}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationCommand;
