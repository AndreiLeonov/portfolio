import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import photo from '../common/img/photo.png'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.aboutMeText}>
                    <span>Привет!</span>
                    <h1>Меня зовут Андрей, я</h1>
                    <p>Frontend-разработчик</p>
                </div>
                <div className={style.aboutMePhoto}>
                    <img className={style.photo} src={photo} alt="Здесь будет фото"/>
                </div>
            </div>
        </div>
    );
}
