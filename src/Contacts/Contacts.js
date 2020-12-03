import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {SectionTitle} from "../common/Components/SectionTitle/SectionTitle";


export function Contacts() {
    return (
        <div className={style.ContactsBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <SectionTitle title={"Связаться со мной"}/>
                <form className={style.formBlock} action="">
                    <input className={style.name}type="text" placeholder="Имя"/>
                    <input className={style.mail}type="email" name="email" placeholder="Электронная почта"/>
                    <textarea className={style.message}placeholder="Текст обращения"></textarea>
                    <input className={style.btn} type="button" value="Отправить"/>
                </form>
            </div>
        </div>
    );
}