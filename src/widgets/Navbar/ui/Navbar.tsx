import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;

}

export function Navbar({className} : NavbarProps) {

    return (
        <div className={classNames(cls.navbar,{},[className])}>

            <ThemeSwitcher/>

            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}
                >
                    Главная страница
                </AppLink>

                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    О нас
                </AppLink>
            </div>




        </div>
    );
};

