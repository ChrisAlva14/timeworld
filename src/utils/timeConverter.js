import moment from "moment-timezone";

export function getTimeZones() {
  return moment.tz.names();
}
export function convertirHorario(
  horario_original,
  ciudad_original,
  array_ciudades_nuevas
) {
  let horaOriginal = moment.tz(horario_original, ciudad_original);
  let horariosConvertidos = [];

  array_ciudades_nuevas.forEach((ciudad) => {
    let horarioConvertido = horaOriginal.clone().tz(ciudad);
    horariosConvertidos.push({
      ciudad: ciudad,
      horario: horarioConvertido.format("HH:mm  DD-MM-YYYY "), // Formato de salida deseado
    });
  });
  return horariosConvertidos;
}
