import React from 'react';

const GUICommand: React.FC = () => {
    return (
        <div className='ms-5 mt-2'>
            <p className="text-green-500 ms-5">
                visit my other portfolio:
                <a
                    href="https://portfolio-lilac-one-87.vercel.app/" // Replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline ms-2"
                >
                    Click here
                </a>
            </p>
        </div>

    );
};

export default GUICommand;
