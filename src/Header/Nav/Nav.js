import React from 'react';
import style from './Nav.module.scss';

export function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Главная</a>
            <a href="">Мои навыки</a>
            <a href="">Проекты</a>
            <a href="">Связаться со мной</a>
        </div>
    );
}


