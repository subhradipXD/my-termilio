import React from 'react';

const GUICommand: React.FC = () => {
    return (
        <div className='ms-5 mt-2'>
            <p className="text-dark-green ms-5">
                visit my other portfolio:
                <a
                    href="https://portfolio-lilac-one-87.vercel.app/" // Replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline ms-2"
                >
                    click here
                </a>
            </p>
        </div>

    );
};

export default GUICommand;
