import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}
// Навигационная панель вверху с сылками
export function Navbar({ className } : NavbarProps) {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    Главная страница
                </AppLink>

                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    О нас
                </AppLink>
            </div>

        </div>
    );
}
