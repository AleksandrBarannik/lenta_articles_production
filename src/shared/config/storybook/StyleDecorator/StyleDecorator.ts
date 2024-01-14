import 'app/styles/Index.scss';
import { Story } from '@storybook/react';
// Добавляет глобальное подключение стилей для сторибука
export const StyleDecorator = (story: () => Story) => story();
