/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState } from 'react';

function ThemeContext() {
  const Theme = createContext();

  function ThemeProvider(props) {
    const { children } = props;
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const themeState = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return <Theme.Provider value={themeState}>{children}</Theme.Provider>;
  }

  return { Theme, ThemeProvider };
}
export default ThemeContext();
