import React from "react";
import style from "./SectionTitle.module.scss";

export function SectionTitle(props) {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    );
}