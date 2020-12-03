import React from 'react';
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {Icon} from "./Icon/Icon";

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.fullName}>
                    <span>Леонов Андрей</span>
                </div>
                <div className={style.footerIcons}>
                    <Icon
                        title={"Вконтакте"}
                        link={`vk.com`}
                    />
                    <Icon
                        title={"Инстаграм"}
                        link={`instagram.com`}
                    />
                    <Icon
                        title={"Твиттер"}
                        link={`twitter.com`}
                    />
                </div>
                <div className={style.currentYear}>
                    <span>2020</span>
                </div>
            </div>
        </div>
    );
}