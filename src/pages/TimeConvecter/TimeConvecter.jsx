import { useContext, useEffect, useState } from "react";

import { ConversionResults } from "../../components/ConversionResults/ConversionResults";
import BoxButtons from "../../components/TimeConvecter/BoxButtons/BoxButtons";
import { AppContext } from "../../context/AppContext";
import { convertirHorario } from "../../utils/timeConverter";
import styles from "./TimeConvecter.module.css";
import { ResetButton } from "../../components/buttons/ResetButton";

function TimeConvecter() {
  const {originCity, selectedCities, convertAvailable, resetButtonAvailable}= useContext(AppContext)

  const [boxShow, setBoxShow] = useState("CONVERSOR");
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
          Utiliza esta convertor para conocer el <b>horario exacto </b>
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
            originCity={originCity}
            selectedCities={selectedCities}
            dateInput={dateInput}
            setDateInput={setDateInput}
          />
          <div>
            <button 
              className={styles.btn__converter} 
              onClick={handleConverter}
              disabled={!convertAvailable}
            >
              Convertir
            </button>

            {
              resetButtonAvailable &&
              <ResetButton />
            }

         
          </div>

        </>
      )}

      {boxShow === "RESULTS" && (
        <>
          <ConversionResults
            setBox={setBox}
            dateInput={dateInput}
          />
        </>
      )}
    </div>
  );
}

export default TimeConvecter;
