import React from 'react';
import style from './Icon.module.css';


export function Icon(props) {
    return (
        <div className={style.icon}>
            <a href={props.link}>{props.title}</a>
        </div>
    );
}