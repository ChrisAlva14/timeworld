function hourDifference(time1, date1, time2, date2) {

  const timestamp1 = convertToTimestamp(date1, time1);
  const timestamp2 = convertToTimestamp(date2, time2);

  let differenceInMinutes = (timestamp1 - timestamp2)/60000;

  if (differenceInMinutes < 0) {

    differenceInMinutes = Math.abs(differenceInMinutes)
  }

  const diffHours = Math.floor(differenceInMinutes / 60);
  const diffMinutes = differenceInMinutes % 60;

  if (diffHours === 0 && diffMinutes === 0) {
    return 'la misma hora';
  } if (diffMinutes === 0) {
    return `${diffHours} horas de diferencia horaria`;
  } else {
    return `${diffHours} horas y ${diffMinutes} minutos de diferencia horaria`;
  }
}
export default hourDifference;


function convertToTimestamp(dateStr, timeStr) {
  // Array de los meses en español para facilitar el parseo
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  // Separar la fecha y convertirla a números
  const [day, de, monthStr] = dateStr.split(" ");
  const monthIndex = months.indexOf(monthStr.toLowerCase()); // Obtener el índice del mes

  if (monthIndex === -1) {
    throw new Error("Mes no válido");
  }

  const today = new Date(); // Para obtener el año actual
  const year = today.getFullYear(); // Usamos el año actual como base
  
  // Separar la hora y minutos
  const [hours, minutes] = timeStr.split(":").map(Number);

  // Crear un objeto Date con los valores extraídos
  const date = new Date(year, monthIndex, Number(day), hours, minutes);

  // Devolver el timestamp en milisegundos
  return date.getTime();
}