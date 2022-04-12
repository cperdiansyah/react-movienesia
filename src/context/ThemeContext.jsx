/* eslint-disable react/prop-types */
import React, { createContext, useMemo } from 'react';

export default function ThemeContext() {
  const ThemeContext = createContext();

  function ThemeProvider(props) {
    const { children } = props;
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const themeContext = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
      <ThemeContext.Provider value={themeContext}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return { ThemeContext, ThemeProvider };
}