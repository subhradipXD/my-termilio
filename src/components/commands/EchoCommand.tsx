import React from 'react';

interface EchoCommandProps {
    message: string;
}

const EchoCommand: React.FC<EchoCommandProps> = ({ message }) => {
    return (
        <>
            <div className="ms-5 mt-2">
                <p className="text-green-500 ms-5">
                    {message}
                </p>
            </div>

        </>

    );
};

export default EchoCommand;
