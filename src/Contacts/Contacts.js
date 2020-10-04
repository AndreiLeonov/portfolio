import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";


export function Contacts() {
    return (
        <div className={style.ContactsBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <form className={style.formBlock} action="">
                    <input type="text" placeholder="Имя"/>
                    <input type="email" name="email" placeholder="Электронная почта"/>
                    <textarea placeholder="Текст обращения"></textarea>
                    <input type="button" value="Отправить"/>
                </form>
            </div>
        </div>
    );
}