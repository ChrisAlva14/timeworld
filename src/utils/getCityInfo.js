import moment from "moment";
import cityCountryMapping from "./cityCountryMapping";

function getCityCountryDateTime(cityCountry, dateTime) {
  // Separar ciudad y país
  const [city, country] = cityCountry.split(", ").map((item) => item.trim());

  // Usar moment.js para formatear la fecha y la hora
  const momentDateTime = moment(dateTime, "YYYY-MM-DD HH:mm:ss");

  // Formatear la hora como "HH:mm"
  const time = momentDateTime.format("HH:mm");

  // Formatear la fecha como "DD de Mes" (con mes en texto)
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const day = momentDateTime.date();
  const monthName = months[momentDateTime.month()];
  const formattedDate = `${day} de ${monthName}`;

  // Devolver el objeto con los datos
  return {
    ciudad: city,
    pais: country,
    hora: time,
    fecha: formattedDate,
  };
}
function getArrayCityCountryDateTime(ciudades, info) {
  return info.map((item, index) => {
    const [ciudad, pais] = ciudades[index].split(", ").map((str) => str.trim());
    const { horario } = item;
    const [hora, fecha] = horario.split(" ");
    const [dia, mes, anio] = fecha.split("-").map(Number);

    // Mapear el mes a su nombre en español
    const nombresMeses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const mesNombre = nombresMeses[mes - 1];

    return {
      ciudad: ciudad,
      pais: pais,
      hora: hora,
      fecha: `${dia} de ${mesNombre}`,
    };
  });
}

export { getCityCountryDateTime, getArrayCityCountryDateTime };
