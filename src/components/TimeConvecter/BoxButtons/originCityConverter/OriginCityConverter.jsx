import styles from "../originCityConverter/originCityConverter.module.css";

const OriginCityConverter = () => {
    return (
        <>
            <input
                className={styles.text_input}
                placeholder="Seleccione ciudad de origen"
            />
        </>
    );
};

export default OriginCityConverter;
