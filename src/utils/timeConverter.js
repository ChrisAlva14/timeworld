import moment from "moment-timezone";

import 'moment/locale/es';

moment.locale('es');

import { getCityReference } from "./api.cities";

export function getTimeZones() {
  return moment.tz.names();
}

export function convertirHorario(
  horario_original,
  ciudad_original,
  array_ciudades_nuevas
) {

  const referenciaOrigen = getCityReference(ciudad_original)
  const horaOriginal = moment.tz(horario_original, referenciaOrigen);
  const ciudadesDestino = array_ciudades_nuevas.map((ciudad) => getCityReference(ciudad))
  
  return ciudadesDestino.map((ciudad) => ({
    ciudad: ciudad,
    horario: horaOriginal.clone().tz(ciudad).format("HH:mm DD-MM-YYYY"),
  }));
}
export function getHourConverted(
  horario_original,
  ciudad_original,
  ciudadDestino
) {

  const referenciaOrigen = getCityReference(ciudad_original)
  const horaOriginal = moment.tz(horario_original, referenciaOrigen);
  const refCiudadDestino = getCityReference(ciudadDestino)
    return ` ${horaOriginal.clone().tz(refCiudadDestino).format("DD MMM - HH:mm")}`
 
}



