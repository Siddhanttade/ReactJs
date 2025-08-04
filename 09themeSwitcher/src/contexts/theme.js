import { createContext,useContext } from "react";

export const ThemeContext = createContext({ //here we create a context for theme management and in that we can give default value
    themeMode: 'light', // default theme mode
    darkTheme: () => {}, // function to toggle to dark theme
    lightTheme: () => {}, // function to toggle to light theme
});

export const ThemeProvider=ThemeContext.Provider; //exporting the provider to wrap around the app

export function useTheme(){
    return useContext(ThemeContext); //this will return the context value to be used in the components
}