import React, { Suspense } from 'react';
import  './Index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className="app">
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