import React from 'react';

const ThemesCommand: React.FC = () => {
    const themes = ['light', 'dark', 'green-goblin', 'ubuntu'];

    return (
        <div className="mt-2 ms-10">
            <p className="text-green-500">available themes:</p>
            <ul className="list-none mt-2 space-y-2 ml-5">
                {themes.map((theme, index) => (
                    <li key={index} className="flex items-center text-green-500">
                        {theme}
                    </li>
                ))}
            </ul>
            <div className='text-green-500 ms-5'>
                <span className="">-----</span>
                <p className="">for change theme enter: theme {'<theme-name>'}</p>
                <p className="">eg: theme ubuntu</p>
            </div>
        </div>
    );
};

export default ThemesCommand;
