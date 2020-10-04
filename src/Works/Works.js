import React from 'react';
import style from './Works.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./Work/Work";


export function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <div className={style.title}>
                    <h2>Мои работы</h2>
                </div>
                <div className={style.works}>
                    <Work
                        title="Todolist"
                        description="Some text for description"
                    />
                    <Work
                        title="SocialNetwork"
                        description="Some text for description"
                    />
                    <Work
                        title="Counter"
                        description="Some text for description"
                    />
                </div>
            </div>
        </div>
    );
}