import styles from "./datesInput.module.css";

const DatesInput = () => {
    return (
        <div role="input" className={styles.container}>
            <input className={styles.inputDate} type="datetime-local" />
        </div>
    );
};

export default DatesInput;
