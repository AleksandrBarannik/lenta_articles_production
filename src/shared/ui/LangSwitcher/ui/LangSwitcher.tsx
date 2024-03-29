import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;

}

// switch Language .
// use const  {t, i18n} = useTranslation();
//  key transfer on template:
//  {t('ТЕстовый пример')}
// Translate describe in view:  "key" : "value"
// in  public/locales/ru; public/locales/en;
export const LangSwitcher = ({ className, short } : LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={toggleLanguage}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
