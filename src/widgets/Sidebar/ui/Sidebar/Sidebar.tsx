import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher";

interface SidebarProps {
    className?: string;

}
//Боковая панель которую можно свернуть
// Развернуть как на ютубе
//Содержит  компоненты переключатель тем и языков
export const Sidebar = ({className} : SidebarProps) => {

    const [collapsed,setCollapsed] = useState(false);

    const onToggle = (()=>{
        setCollapsed(prev => !prev);

    });

    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed},[className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cls. switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>

        </div>
    );
};

