import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Icon} from "./Icon/Icon";

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span>Леонов Андрей</span>
                <div className={style.footerIcons}>
                    <Icon
                        title={"Вконтакте"}
                        link={`vk.com`}
                    />
                    <Icon
                        title={"Инстаграм"}
                        link={`vk.com`}
                    />
                    <Icon
                        title={"Твиттер"}
                        link={`vk.com`}
                    />
                </div>
                <span>2020</span>
            </div>
        </div>
    );
}