import { useEffect, useState } from "react";

import { convertirHorario } from "../../utils/timeConverter";
import styles from "./TimeConvecter.module.css";
import BoxButtons from "../../components/TimeConvecter/BoxButtons/BoxButtons";
import { ConversionResults } from "../../components/ConversionResults/ConversionResults";

function TimeConvecter() {
  const [boxShow, setBoxShow] = useState("CONVERSOR");
  const [cityOfOrigin, setCityOfOrigin] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);
  const [dateInput, setDateInput] = useState("");
  {
    /*const [convertedCities, setConvertedCities] = useState([]);*/
  }

  const setBox = (value) => {
    setBoxShow(value);
  };

  const handleConverter = () => {
    {
      /* let horariosConvertidos = convertirHorario(
      dateInput,
      cityOfOrigin,
      selectedCities
    );

    setConvertedCities(horariosConvertidos);
    console.log(convertedCities);
*/
    }
    setBox("RESULTS");
  };

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

      {boxShow === "CONVERSOR" && (
        <>
          <BoxButtons
            cityOfOrigin={cityOfOrigin}
            setCityOfOrigin={setCityOfOrigin}
            selectedCities={selectedCities}
            setSelectedCities={setSelectedCities}
            dateInput={dateInput}
            setDateInput={setDateInput}
          />
          <button className={styles.btn__converter} onClick={handleConverter}>
            Convertir
          </button>
        </>
      )}

      {boxShow === "RESULTS" && (
        <>
          <ConversionResults
            setBox={setBox}
            cityOfOrigin={cityOfOrigin}
            selectedCities={selectedCities}
            dateInput={dateInput}
          />
        </>
      )}
    </div>
  );
}

export default TimeConvecter;
