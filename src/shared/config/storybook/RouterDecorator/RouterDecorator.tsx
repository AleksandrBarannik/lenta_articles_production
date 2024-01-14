import 'app/styles/Index.scss';
import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
// Оборачивает наши сторитеты в маршруты ( для навбара )
export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
