import moment from "moment-timezone";

export function getTimeZones() {
  return moment.tz.names();
}

export function convertirHorario(
  horario_original,
  ciudad_original,
  array_ciudades_nuevas
) {
  const horaOriginal = moment.tz(horario_original, ciudad_original);

  return array_ciudades_nuevas.map((ciudad) => ({
    ciudad: ciudad,
    horario: horaOriginal.clone().tz(ciudad).format("HH:mm DD-MM-YYYY"),
  }));
}
