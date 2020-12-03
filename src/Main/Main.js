import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import photo from '../common/img/photo.png'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.aboutMeText}>
                    <h1>Привет! Меня зовут Андрей, я</h1>
                    <h2>Frontend-разработчик</h2>
                </div>
                <div className={style.aboutMePhoto}>
                    <img className={style.photo} src={photo} alt="Здесь будет фото"/>
                </div>
            </div>
        </div>
    );
}
