import React, {Suspense} from 'react';
import  './styles/Index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {

    const {theme,toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{}, [theme])}>

            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главная страница </Link>
            <Link to={'/about'}>О нас</Link>

{/*Suspense показывает загрузку до появления асинхронного компонента*/}
            <Suspense fallback={<div> Loading </div>}>
                <Routes>
                    <Route path={'/about'}  element={<AboutPageAsync/>}/>
                    <Route path={'/'}  element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;