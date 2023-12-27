import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;

}

// switch Language .
// use const  {t, i18n} = useTranslation();
//  key transfer on template:
//  {t('ТЕстовый пример')}
// Translate describe in view:  "key" : "value"
// in  public/locales/ru; public/locales/en;
export const LangSwitcher = ({ className } : LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </Button>
    );
};
