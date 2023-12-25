import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;

}

//Отвечает за смену языка .
// Исползуем const  {t, i18n} = useTranslation();
//  Ключ передаем в нужном нам компоненте таким образом:
//  {t('ТЕстовый пример')}
// Сам перевод описываем в виде  "Ключ" : "значение"
// в  public/locales/ru; public/locales/en;
export const LangSwitcher = ({className} : LangSwitcherProps) => {

    const  {t, i18n} = useTranslation();

    const toggleLanguage = ()=>
    {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher,{},[className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </Button>
    );
};

