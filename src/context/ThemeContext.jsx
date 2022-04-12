/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState } from 'react';

function ThemeContext() {
  const Theme = createContext();

  function ThemeProvider(props) {
    const { children } = props;
    const [theme, setTheme] = useState(
      localStorage.getItem('color-theme') || 'light'
    );

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
    localStorage.setItem('color-theme', theme);

    if (
      theme === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const themeState = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return <Theme.Provider value={themeState}>{children}</Theme.Provider>;
  }

  return { Theme, ThemeProvider };
}
export default ThemeContext();
