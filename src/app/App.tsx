import React, {Suspense} from 'react';
import  './styles/Index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import { AboutPage } from 'pages/AboutPage';
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";


const App = () => {

    const {theme,toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{}, [theme])}>

            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главная страница </Link>
            <Link to={'/about'}>О нас</Link>
            <AppRouter/>
        </div>
    );
};

export default App;