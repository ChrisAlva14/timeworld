import { useEffect, useState } from "react";
import styles from "./TimeConvecter.module.css";
import BtnPagConverter from "../../components/btn-pag-converter-cities/BtnPagConverterCities";
import { getTimeZones, convertirHorario } from "../../utils/timeConverter";
import SelectedCities from "../../components/selectedCities/SelectedCities";
import DatesInput from "../../components/datesInput/DatesInput";
function TimeConvecter() {
  const horario_original = "2024-07-07 12:00:00";
  const ciudad_original = "America/Argentina/ComodRivadavia";
  const array_ciudades_nuevas = [
    "America/Los_Angeles",
    "Europe/London",
    "Asia/Tokyo",
  ];

  useEffect(() => {
    let horariosConvertidos = convertirHorario(
      horario_original,
      ciudad_original,
      array_ciudades_nuevas
    );
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div>
        <h1 className={styles.timeConverter__h1}>Convertor horario</h1>
        <h3 className={styles.timeConverter__h3}>
          Utiliza esta convertor para conocer el <b>horario exacto</b>
          de las ciudades que desees
        </h3>
      </div>

      <div className={styles.timeConverter__btnContainer}>
        <BtnPagConverter placeholderText={"Seleccione una ciudad de origen"} />

        <DatesInput />
        <div className={styles.timeConverter__btnCityContainer}>
          <BtnPagConverter placeholderText={"Seleccione ciudades de destino"} />
          <SelectedCities />
        </div>
      </div>

      <div>
        <button className={styles.timeConverter__btn__converter}>
          Convertir
        </button>
      </div>
    </div>
  );
}

export default TimeConvecter;
