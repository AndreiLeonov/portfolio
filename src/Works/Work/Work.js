import React from 'react';
import style from './Work.module.css';


export function Work(props) {


    return (
        <div className={style.work}>
            <div className={style.icon} style={props.style}>
                    <div className={style.clickLink}>
                        <a href="">{props.title}</a>
                    </div>
            </div>
        </div>
    );
}