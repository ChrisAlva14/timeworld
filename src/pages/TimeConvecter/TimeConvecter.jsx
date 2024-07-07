import { useEffect } from "react";

import { getTimeZones } from "../../utils/timeConverter";
function TimeConvecter() {
  useEffect(() => {
    getTimeZones();
  }, []);
  <>
    <h1>Convertor horario</h1>
    <h3>
      Utiliza esta convertor para conocer el horario exacto de las ciudades que
      desees
    </h3>
  </>;
}

export default TimeConvecter;
