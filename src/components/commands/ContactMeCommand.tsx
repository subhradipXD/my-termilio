import React from 'react';

const ContactMeCommand: React.FC = () => {
    return (
        <div className="mt-2 me-96 ms-10 text-lg font-vt323">
            <p>you can reach me at:</p>
            <ul className="list-none pl-5">
                <li>
                    <a href="mailto:subhradipdas6969@gmail.com" className="text-blue-500 hover:underline">
                        email
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/subhradip-das-2000s69/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        linkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/subhradipXD" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        gitHub
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/9635760319" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        whatsApp
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContactMeCommand;
