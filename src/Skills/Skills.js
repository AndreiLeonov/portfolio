import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";


export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.title}>
                    <h2>Мои навыки</h2>
                </div>
                <div className={style.skills}>
                    <Skill
                        title="HTML"
                        description="Some text for description"
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJ_nc7MmbS-z8RqlZ6yQUfkJ46YW_8cs6Mm9iLrvx3nLyPfnHcCSR2NHHhmcG6FgHVNxG-BZNOmAKs3NFlMKXtrOfhzb8LDpoqzLTn&usqp=CAU&ec=45704948"
                    />
                    <Skill
                        title="CSS"
                        description="Some text for description"
                        img="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                    />
                    <Skill
                        title="JavaScript"
                        description="Some text for description"
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQnh5QCAzka8bT1e1t-avBteIJIdPz12W6wtZuY5uuetZ80puIEyLuFOCIVxuovywBdclm5j-jJCKiGqf1DI_E9dwSK4KN3b064kWs&usqp=CAU&ec=45704948"
                    />
                    <Skill
                        title="React"
                        description="Some text for description"
                        img="https://cdn.worldvectorlogo.com/logos/react.svg"
                    />
                </div>
            </div>
        </div>
    );
}