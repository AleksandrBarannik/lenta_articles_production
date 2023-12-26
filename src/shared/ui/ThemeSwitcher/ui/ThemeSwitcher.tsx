import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;

}

// Отвечает за переключение темы  ,
// Берет темы из app/styles
export const ThemeSwitcher = ({ className } : ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        // Button - наш созданный и настроенный компонент
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            { theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
