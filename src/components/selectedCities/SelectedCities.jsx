// selectedCities.jsx
import styles from "./selectedCities.module.css";

const SelectedCities = (props) => {
  return (
    <div className={styles.mainUlContainer}>
      <ul className={styles.mainUl}>
        {props.cities.map((city) => {
          return (
            <li className={styles.mainLi} key={city}>
              {city}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectedCities;
