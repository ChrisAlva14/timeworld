import styles from "./dateInput.module.css";

const DateInput = () => {
  return (
    <>
      <input className={styles.button_Layout} type="date" />
      <input className={styles.button_Layout} type="time" />
    </>
  );
};

export default DateInput;
