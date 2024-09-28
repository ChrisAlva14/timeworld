import styles from "./selectedCities.module.css";

const SelectedCities = (props) => {
    return (
        <div className={styles.mainUlContainer}>
            <ul className={styles.mainUl}>
                <li className={styles.mainLi}>Buenos Aires</li>
                <li className={styles.mainLi}>Brasilia</li>
                <li className={styles.mainLi}>Asunción</li>
                <li className={styles.mainLi}>Santiago</li>
                <li className={styles.mainLi}>La Paz</li>
                <li className={styles.mainLi}>Lima</li>
                <li className={styles.mainLi}>Buenos Aires</li>
                <li className={styles.mainLi}>Brasilia</li>
                <li className={styles.mainLi}>Asunción</li>
                <li className={styles.mainLi}>Santiago</li>
                <li className={styles.mainLi}>La Paz</li>
                <li className={styles.mainLi}>Lima</li>
            </ul>
        </div>
    );
};

export default SelectedCities;
