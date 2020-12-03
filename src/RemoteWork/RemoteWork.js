import React from 'react';
import style from './RemoteWork.module.scss';
import styleContainer from "../common/styles/Container.module.css";


export function RemoteWork() {
    return (
        <div className={style.RemoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.RemoteWorkContainer}`}>
                <div className={style.title}>
                    <h2>Рассматриваю вариант удаленной работы</h2>
                </div>
                <div>
                    <button className={style.btn}>Нанять меня</button>
                </div>
            </div>
        </div>
    );
}