import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
// Добавляет глобальное подключение тем для сторибука через замыкание темы
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
