import moment from "moment-timezone";

export function getTimeZones() {
  console.log(moment.tz.names());
}
export function convertirHorario(
  horario_original,
  ciudad_original,
  ciudad_nueva
) {
  console.log("Convirtiendo horario");
}
