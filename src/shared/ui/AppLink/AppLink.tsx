import { FC } from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

//new Theme in component AppLinks
export enum AppLinkTheme
{
    PRIMARY = 'primary',
    SECONDARY = 'secondary'// все что в кавычках Из .scss берется
}


interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink : FC <AppLinkProps> = (props) => {

    //destructorize props
    const  {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to = {to}
            className={classNames(cls.AppLink,{},[className,cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};




