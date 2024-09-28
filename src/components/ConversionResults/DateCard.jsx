import React from "react";

import styles from "./DateCard.module.css";

export const DateCard = ({ ciudad, pais, hora, fecha }) => {
    return (
        <article className={styles.container}>
            <div className={styles.citiesData}>
                <span>{ciudad}</span>
                <span>{pais}</span>
            </div>

            <div className={styles.timeData}>
                <span className={styles.hora}>{hora}</span>
                <span className={styles.fecha}>{fecha}</span>
            </div>
        </article>
    );
};
