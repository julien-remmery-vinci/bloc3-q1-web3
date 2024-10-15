import React, { useState } from "react";

const ThemeContext = React.createContext(null)

const ThemeProviderWrapper = (props) => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {       
        setTheme(theme === 'light' ? 'dark' : 'light')       
    }

    const setLightTheme = () => {
        setTheme('light')
    }

    const setDarkTheme = () => {
        setTheme('dark')
    }

    // const getCurrentThemeDetails = () => {
    //     const currentTheme = {
    //         backgroundColor: theme === 'light' ? '#fff' : '#333',
    //         primaryTextColor: theme === 'light' ? '#333' : '#fff',
    //         secondaryTextColor: theme === 'light' ? '#666' : '#ccc',
    //         linkColor: theme === 'light' ? '#007bff' : '#007bff',
    //     }
    //     return currentTheme;
    // }
    
    const getCurrentThemeDetails = () => {
        const currentTheme = {
            backgroundColor: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#333' : '#fff',
            secondaryColor: theme === 'light' ? '#666' : '#ccc',
            linkColor: theme === 'light' ? '#007bff' : '#007bff',
        };
        return currentTheme;
    };

    const exposedValue = {
        theme,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
        getCurrentThemeDetails,
    }

    return <ThemeContext.Provider value={exposedValue}>
        { props.children }
    </ThemeContext.Provider>    
}
    
export {    
    ThemeContext,
    ThemeProviderWrapper,    
}