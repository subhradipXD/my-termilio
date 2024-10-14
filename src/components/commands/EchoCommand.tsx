import React from 'react';

interface EchoCommandProps {
    message: string;
}

const EchoCommand: React.FC<EchoCommandProps> = ({ message }) => {
    return (
        <>
            <div className="ms-5 mt-2 text-lg font-vt323">
                <p className="ms-5">
                    {message}
                </p>
            </div>

        </>

    );
};

export default EchoCommand;
