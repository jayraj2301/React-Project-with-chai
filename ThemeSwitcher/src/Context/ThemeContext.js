import React, { useContext } from 'react';

const ThemeContext = React.createContext({
    themeMode : "light",
    lightTheme : () => {},
    darkTheme : () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export default function ThemeCon() {
    return useContext(ThemeContext)
}