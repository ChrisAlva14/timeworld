import { useEffect, useState } from "react";

import BtnPagConverter from "../../components/btn-pag-converter-cities/BtnPagConverterCities";
import CitySelectorContainer from "../../components/citySelectorContainer/CitySelectorContainer";
import DatesInput from "../../components/datesInput/DatesInput";
import { convertirHorario } from "../../utils/timeConverter";
import styles from "./TimeConvecter.module.css";
import BoxButtons from "../../components/TimeConvecter/BoxButtons/BoxButtons";
import { ConversionResults } from "../../components/ConversionResults/ConversionResults";

function TimeConvecter() {

  const [boxShow, setBoxShow] = useState('CONVERSOR')
  const [cityOfOrigin, setCityOfOrigin] = useState(null)
  const [selectedCities, setSelectedCities] = useState([])

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

  const setBox = (value) => {
    setBoxShow(value)
  }


  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerBox}>
        <h1 className={styles.timeConverter__h1}>Convertor horario</h1>
        <p className={styles.message}>
          Utiliza esta convertor para conocer el <b>horario exacto</b>
          de las ciudades que desees
        </p>
      </div>

      {/* <div className={styles.btnContainer}>
        <BtnPagConverter placeholderText={"Seleccione una ciudad de origen"} />

        <DatesInput />

        <CitySelectorContainer />
      </div> */}

      {
        boxShow === 'CONVERSOR' &&
        <>
          <BoxButtons
            cityOfOrigin={cityOfOrigin}
            setCityOfOrigin={setCityOfOrigin}
            selectedCities={selectedCities}
            setSelectedCities={setSelectedCities}
          />
          <button
            className={styles.btn__converter}
            onClick={() => setBox('RESULTS')}
          >Convertir</button>        
        </>
      }

      {
        boxShow === 'RESULTS' &&
        <>
          <ConversionResults
            setBox={setBox}
          />     
        </>
      }


    </div>
  );
}

export default TimeConvecter;
