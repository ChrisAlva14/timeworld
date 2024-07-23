import styles from "./BtnPagConverterCities.module.css";

const BtnPagConverterCities = ({ placeholderText }) => {
  return (
    <select name="from-city" id="from-city" className={styles.optionsContainer}>
      <option className={styles.options} value="" selected>
        {/* Al hacerlo funcional agregar valueDefault correctamente con un estado */}
        {placeholderText}
      </option>
      <option className={styles.options} value="1">
        Buenos Aires/Argentina
      </option>
      <option className={styles.options} value="2">
        El cairo/Egipto
      </option>
      <option className={styles.options} value="3">
        Brasilia/Brasil
      </option>
      <option className={styles.options} value="4">
        Santiago/Chile
      </option>
    </select>
  );
};

export default BtnPagConverterCities;
