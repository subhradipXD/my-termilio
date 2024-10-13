import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="ms-5 font-mono text-sm leading-tight whitespace-pre text-green-700">
            <pre>
                {`
██╗  ██╗███████╗██╗   ██╗    ████████╗██╗  ██╗███████╗██████╗ ███████╗
██║  ██║██╔════╝╚██╗ ██╔╝    ╚══██╔══╝██║  ██║██╔════╝██╔══██╗██╔════╝
███████║█████╗   ╚████╔╝        ██║   ███████║█████╗  ██████╔╝█████╗  
██╔══██║██╔══╝    ╚██╔╝         ██║   ██╔══██║██╔══╝  ██╔══██╗██╔══╝  
██║  ██║███████╗   ██║          ██║   ██║  ██║███████╗██║  ██║███████╗
╚═╝  ╚═╝╚══════╝   ╚═╝          ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝
        `}
            </pre>
            {/* <pre className="font-mono text-sm leading-tight whitespace-pre text-green-700">
                {`
    ___       __    ______                             
__ |     / /_______  /__________________ ________ 
__ | /| / /_  _ \\_  /_  ___/  __ \\_  __ \`__ \\  _ \\
__ |/ |/ / /  __/  / / /__ / /_/ /  / / / / /  __/
____/|__/  \\___//_/  \\___/ \\____//_/ /_/ /_/\\___/
        `}
            </pre> */}
            <pre>Welcome to my terminal portfolio. (version 1.8.5)</pre>
            <pre>-----</pre>
            <pre className="font-mono text-sm">
                for list of commands enter{' '}
                <span className="text-dark-green animate-pulse">help/hlp</span>.
            </pre>
            <pre>-----</pre>
        </div>
    );
};

export default Header;
