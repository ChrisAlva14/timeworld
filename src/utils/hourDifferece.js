function hourDifference(time1, time2) {
  // Separar las horas y los minutos de ambos tiempos
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);

  // Convertir ambos tiempos a minutos desde el inicio del día
  const totalMinutes1 = hours1 * 60 + minutes1;
  const totalMinutes2 = hours2 * 60 + minutes2;

  // Calcular la diferencia de minutos, tomando en cuenta la medianoche
  let differenceInMinutes = totalMinutes2 - totalMinutes1;
  if (differenceInMinutes < 0) {
    // Si la diferencia es negativa, significa que cruzamos la medianoche
    differenceInMinutes += 24 * 60; // Agregar un día completo (1440 minutos)
  }

  // Convertir la diferencia de minutos a horas y minutos
  const diffHours = Math.floor(differenceInMinutes / 60);
  const diffMinutes = differenceInMinutes % 60;

  // Formatear la diferencia como una cadena "hh:mm"
  return `${diffHours} horas y ${diffMinutes} minutos`;
}
export default hourDifference;
