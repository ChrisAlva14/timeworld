import { useEffect } from "react";

import { getTimeZones, convertirHorario } from "../../utils/timeConverter";
function TimeConvecter() {
  const horario_original = "2024-07-07 12:00:00";
  const ciudad_original = "America/Argentina/ComodRivadavia";
  const array_ciudades_nuevas = [
    "America/Los_Angeles",
    "Europe/London",
    "Asia/Tokyo",
  ];

  useEffect(() => {
    let timeZone = getTimeZones();
    let horariosConvertidos = convertirHorario(
      horario_original,
      ciudad_original,
      array_ciudades_nuevas
    );
    console.log(timeZone);
    console.log(horariosConvertidos);
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
