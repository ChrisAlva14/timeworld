import { useEffect, useState } from "react";
import styles from "./ConversionResults.module.css";
import { DateCard } from "./DateCard";
import { convertirHorario } from "../../utils/timeConverter";
import {
  getRegionFromCityCountry,
  getRegionsFromCityCountryArray,
} from "../../utils/getRegionCountry";
import {
  getCityCountryDateTime,
  getArrayCityCountryDateTime,
} from "../../utils/getCityInfo";
import hourDifference from "../../utils/hourDifferece";
export const ConversionResults = ({
  setBox,
  cityOfOrigin,
  selectedCities,
  dateInput,
}) => {
  let horariosConvertidos = [];
  let region = getRegionFromCityCountry(cityOfOrigin);
  let regionesDestino = getRegionsFromCityCountryArray(selectedCities);

  const [convertedCities, setConvertedCities] = useState([]);
  useEffect(() => {
    horariosConvertidos = convertirHorario(dateInput, region, regionesDestino);
    setConvertedCities(horariosConvertidos);
  }, []);

  const ciudadOrigen = getCityCountryDateTime(cityOfOrigin, dateInput);

  const ciudadesDestino = getArrayCityCountryDateTime(
    selectedCities,
    convertedCities
  );
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
                La hora en {`${item.ciudad}, ${item.pais}`} es{" "}
                {hourDifference(item.hora, ciudadOrigen.hora)} hs menos que en{" "}
                {`${ciudadOrigen.ciudad}, ${ciudadOrigen.pais}`}
              </small>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.actionButtonsDiv}>
        <button
          className={styles.actionButton}
          onClick={() => setBox("CONVERSOR")}>
          <span style={{ fontWeight: "700" }} className={styles.navButtonSpan}>
            Volver
          </span>
        </button>
        <button className={styles.actionButton}>
          <span style={{ fontWeight: "700" }}>Copiar Datos</span>
        </button>
      </div>
    </div>
  );
};
