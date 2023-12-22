import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

//Hook for change Theme
interface useThemeResult{
    toggleTheme: ()=> void;
    theme: Theme;
}

export  function useTheme():useThemeResult {

    const {theme,setTheme} = useContext(ThemeContext);

    const toggleTheme = ()=>
    {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY,newTheme);
    }
    return {theme,toggleTheme}

}