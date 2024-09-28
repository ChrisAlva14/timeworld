import styles from "./destinationCityConverter.module.css";

const DestinationCityConverter = () => {
    return (
        <>
            <input
                className={styles.text_input}
                placeholder="Seleccione ciudades que desea conocer"
            />
            <div role="list" className={styles.ul_cities}>
                <div className={styles.items}>Bogotá</div>
                <div className={styles.items}>San Salvador</div>
                <div className={styles.items}>Argentina</div>
                <div className={styles.items}>Chile</div>
                <div className={styles.items}>Perú</div>
                <div className={styles.items}>San Salvador</div>
                <div className={styles.items}>Argentina</div>
                <div className={styles.items}>Chile</div>
                <div className={styles.items}>Perú</div>
                <div className={styles.items}>Perú</div>
                <div className={styles.items}>San Salvador</div>
                <div className={styles.items}>Argentina</div>
                <div className={styles.items}>Chile</div>
                <div className={styles.items}>Perú</div>
                <div className={styles.items}>Perú</div>
                <div className={styles.items}>San Salvador</div>
                <div className={styles.items}>Argentina</div>
                <div className={styles.items}>Chile</div>
                <div className={styles.items}>Perú</div>
            </div>
        </>
    );
};

export default DestinationCityConverter;
