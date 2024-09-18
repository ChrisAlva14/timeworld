import { useContext, useEffect, useState } from "react";
import styles from "./ConversionResults.module.css";
import { DateCard } from "./DateCard";
import { convertirHorario } from "../../utils/timeConverter";
import {
  getCityCountryDateTime,
  getArrayCityCountryDateTime,
} from "../../utils/getCityInfo";
import hourDifference from "../../utils/hourDifferece";
import { AppContext } from "../../context/AppContext";
import Swal from "sweetalert2";

export const ConversionResults = ({ setBox, dateInput }) => {
  const { originCity, selectedCities, switchOnResetButton } =
    useContext(AppContext);

  let horariosConvertidos = [];

  const [convertedCities, setConvertedCities] = useState([]);

  useEffect(() => {
    horariosConvertidos = convertirHorario(
      dateInput,
      originCity,
      selectedCities
    );
    setConvertedCities(horariosConvertidos);
  }, []);

  const ciudadOrigen = getCityCountryDateTime(originCity, dateInput);

  const ciudadesDestino = getArrayCityCountryDateTime(
    selectedCities,
    convertedCities
  );

  const HandleClickVolver = () => {
    switchOnResetButton();
    setBox("CONVERSOR");
  };
  const handleCopyData = () => {
    const formattedData = ciudadesDestino
      .map(
        (item, index) =>
          ` ${item.ciudad}, ${item.pais} - ${item.hora}h ${item.fecha}`
      )
      .join("\n");

    navigator.clipboard
      .writeText(formattedData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "¡Datos copiados!",
          text: "Los datos han sido copiados al portapapeles exitosamente.",
          confirmButtonText: "Entendido",
          timer: 3000,
        });
      })
      .catch((err) => {
        console.error("Error al copiar los datos: ", err);
      });
  };

  return (
    <div className={styles.container}>
      <section className={styles.cardsContainer}>
        <DateCard
          ciudad={ciudadOrigen.ciudad}
          pais={ciudadOrigen.pais}
          hora={ciudadOrigen.hora}
          fecha={ciudadOrigen.fecha}
        />

        <span className={styles.equal}>=</span>

        <ul
          className={styles.destinationCities}
          style={
            ciudadesDestino.length > 3
              ? { overflowY: "scroll" }
              : { paddingRight: "0" }
          }>
          {ciudadesDestino.map((item, index) => (
            <li key={index} className={styles.destinationCitiesListItem}>
              <DateCard
                ciudad={item.ciudad}
                pais={item.pais}
                hora={item.hora}
                fecha={item.fecha}
              />
              <small className={styles.messagge}>
                {`${item.ciudad}, ${item.pais} tiene ${hourDifference(
                  item.hora,
                  ciudadOrigen.hora
                )} de diferencia horaria`}
              </small>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.actionButtonsDiv}>
        <button
          className={styles.actionButton}
          onClick={() => HandleClickVolver()}>
          <span style={{ fontWeight: "700" }} className={styles.navButtonSpan}>
            Volver
          </span>
        </button>
        <button className={styles.actionButton} onClick={handleCopyData}>
          <span style={{ fontWeight: "700" }}>Copiar Datos</span>
        </button>
      </div>
    </div>
  );
};
