import React from 'react';
import style from './Works.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./Work/Work";
import {SectionTitle} from "../common/Components/SectionTitle/SectionTitle";
import todolistIconImg from '../common/img/todolist-icon.jpg'
import socialNetworkIconImg from '../common/img/social-network-icon.jpg'


export function Works() {
    const todolistIcon = {
        backgroundImage: `url(${todolistIconImg})`
    }
    const socialNetworkIcon = {
        backgroundImage: `url(${socialNetworkIconImg})`
    }

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <SectionTitle title={"Проекты"}/>
                <div className={style.works}>
                    <Work
                        style={todolistIcon}
                        title="Todolist"
                    />
                    <Work
                        style={socialNetworkIcon}
                        title="SocialNetwork"
                    />
                </div>
            </div>
        </div>
    );
}