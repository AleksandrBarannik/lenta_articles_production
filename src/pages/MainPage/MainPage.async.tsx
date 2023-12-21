import { lazy } from 'react';

//Async Import
export const MainPageAsync = lazy(()=> new Promise(resolve=>{

    // @ts-ignore
    //Искуственная задержка чтобы видеть лоадинг
    setTimeout(()=>resolve(import('./MainPage')),1500)
}));