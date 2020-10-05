import React from 'react';
import style from './Work.module.css';


export function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.icon}>
                    <div className={style.clickLink}>
                        <a href="">Смотерть</a>
                    </div>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}