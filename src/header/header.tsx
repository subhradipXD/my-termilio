import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="ms-5 font-mono text-sm leading-tight whitespace-pre">
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
            <pre>Welcome to my terminal portfolio. (version 1.9.8)</pre>
            <pre>-----</pre>
            <pre className="font-mono text-sm">
                for list of commands enter help/hlp.
            </pre>
            <pre>-----</pre>
        </div>
    );
};

export default Header;
