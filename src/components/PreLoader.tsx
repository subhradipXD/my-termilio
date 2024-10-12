import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PreLoader: React.FC = () => {
    const [messageIndex, setMessageIndex] = useState<number>(0);
    const messages = [
        'Creating the terminal...',
        'Connecting to the server...',
        'Welcome to my terminal!',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="overflow-hidden">
                {messages.map((message, index) => (
                    <motion.p
                        key={index}
                        className="text-green-500 font-mono text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: messageIndex === index ? 1 : 0, y: messageIndex === index ? 0 : 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        {message}
                    </motion.p>
                ))}
            </div>
        </div>
    );
};

export default PreLoader;
