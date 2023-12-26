import { lazy } from 'react';

// Async Import
export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Искуственная задержка чтобы видеть лоадинг
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
