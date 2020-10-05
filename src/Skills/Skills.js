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
                    />
                    <Skill
                        title="CSS"
                        description="Some text for description"
                    />
                    <Skill
                        title="JavaScript"
                        description="Some text for description"
                    />
                    <Skill
                        title="React"
                        description="Some text for description"
                    />
                    <Skill
                        title="TypeScript"
                        description="Some text for description"
                    />
                </div>
            </div>
        </div>
    );
}