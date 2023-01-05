import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")
    console.log(theme);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    
    return (
    <ThemeContext.Provider value={{theme, toggleTheme: toggleTheme}}>
        {children}
    </ThemeContext.Provider>
        )
    }

export const useTheme = () => useContext(ThemeContext);
// console.log(ThemeContext.Provider);
