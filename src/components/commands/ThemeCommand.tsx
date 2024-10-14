import React from 'react';

const ThemesCommand: React.FC = () => {
    const themes = ['light', 'dark', 'green-goblin', 'ubuntu'];

    return (
        <div className="mt-2 ms-10 text-lg font-vt323">
            <p className="">available themes:</p>
            <ul className="list-none mt-2 space-y-2 ml-5">
                {themes.map((theme, index) => (
                    <li key={index} className="flex items-center">
                        {theme}
                    </li>
                ))}
            </ul>
            <div className='ms-5'>
                <span className="">-----</span>
                <p className="">for change theme enter: theme {'<theme-name>'}</p>
                <p className="">eg: theme ubuntu</p>
            </div>
        </div>
    );
};

export default ThemesCommand;
