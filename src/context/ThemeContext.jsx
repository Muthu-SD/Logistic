import React, { createContext, useContext, useState } from "react";
import { theme1, theme2 } from "../theme/Theme";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isThemeOne, setIsThemeOne] = useState(true); // State to toggle between two themes

  const toggleTheme = () => {
    setIsThemeOne((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        isThemeOne,
        toggleTheme,
        theme: isThemeOne ? theme1 : theme2, // Select theme based on state
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
