function hourDifference(time1, time2) {
  // Separar las horas y los minutos
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);

  // Convertir todo a minutos
  const totalMinutes1 = hours1 * 60 + minutes1;
  const totalMinutes2 = hours2 * 60 + minutes2;

  // Calcular la diferencia en minutos
  let diffMinutes = totalMinutes2 - totalMinutes1;

  // Si la diferencia es negativa, ajustar como si fuera al día siguiente
  if (diffMinutes < 0) {
    diffMinutes += 24 * 60; // Sumar 24 horas en minutos
  }

  // Convertir la diferencia a horas y minutos
  const diffHours = Math.floor(diffMinutes / 60);
  const remainingMinutes = diffMinutes % 60;

  // Formar el string de la diferencia
  const resultado = `${diffHours} horas y ${remainingMinutes} minutos`;

  return resultado;
}
export default hourDifference;
