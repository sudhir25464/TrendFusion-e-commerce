import { createContext, useState, useEffect } from 'react';
import CreateContexts from './CreateContexts';


const  ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
    }, [theme]);

    return (
        <CreateContexts.Provider value={{ theme, toggleTheme }}>
            {children}
        </CreateContexts.Provider>
    );
};


export default ThemeContext