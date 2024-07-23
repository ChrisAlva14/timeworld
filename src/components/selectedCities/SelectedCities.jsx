import styles from "./selectedCities.module.css";
const selectedCities = () => {
  return (
    <ul className={styles.mainUl}>
      <li className={styles.mainLi}>Caracas</li>
      <li className={styles.mainLi}>Montevideo</li>
      <li className={styles.mainLi}>Berlin</li>
      <li className={styles.mainLi}>Santiago de Chile</li>
      <li className={styles.mainLi}>Lima</li>
      <li className={styles.mainLi}>Brasilia</li>
      <li className={styles.mainLi}>Quito</li>
      <li className={styles.mainLi}>Buenos Aires</li>
    </ul>
  );
};

export default selectedCities;
