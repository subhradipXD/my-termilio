import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ContactMeCommand: React.FC = () => {
    const contactText = `yoou can reach me at:\n`;
    const contactLinks = [
        { name: 'email', href: 'mailto:subhradipdas6969@gmail.com' },
        { name: 'linkedIn', href: 'https://www.linkedin.com/in/subhradip-das-2000s69/' },
        { name: 'gitHub', href: 'https://github.com/subhradipXD' },
        { name: 'whatsApp', href: 'https://wa.me/9635760319' },
    ];

    const [displayedText, setDisplayedText] = useState('');
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            setDisplayedText((prev) => prev + contactText[index]);
            index++;
            if (index === contactText.length - 1) {
                clearInterval(typingInterval);
                setShowLinks(true); // Show links after text has finished typing
            }
        }, 20); // Adjust typing speed here

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <motion.div
            className="mt-2 me-96 ms-10 text-lg font-vt323"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <p>{displayedText}</p>
            {showLinks && (
                <ul className="list-none pl-5">
                    {contactLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
};

export default ContactMeCommand;
