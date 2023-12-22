import {createContext} from "react";

//Global Context and key for LocalStorage
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export  interface ThemeContextProps{
    theme?: Theme;
    setTheme?: (theme: Theme)=> void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

//ключ - чтобы тема сохранялась при закрытии браузера
export const LOCAL_STORAGE_THEME_KEY = 'theme';