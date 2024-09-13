import React, { useEffect, useState } from "react";
import styles from "./dateInput.module.css";

function getDate() {
  const ahora = new Date()
  const anio = ahora.getFullYear()
  const mes = (ahora.getMonth() + 1).toString().padStart(2, '0')
  const dia = ahora.getDate().toString().padStart(2, '0')
  return `${anio}-${mes}-${dia}`
}

function getHour() {
  const ahora = new Date()
  const horas = ahora.getHours().toString().padStart(2, '0')
  const minutos = ahora.getMinutes().toString().padStart(2, '0')
  return `${horas}:${minutos}`
}

const DateInput = ({ setDateInput, dateInput }) => {
  const [date, setDate] = useState(getDate);
  const [time, setTime] = useState(getHour);

  useEffect(() => {
    formatDateTime(date, time)
  },[])

  const handleDateChange = (event) => {
    setDate(event.target.value);
    formatDateTime(event.target.value, time);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    formatDateTime(date, event.target.value);
  };

  const formatDateTime = (date, time) => {
    if (date && time) {
      const dateTime = `${date} ${time}:00`;
      setDateInput(dateTime);
    }
  };

  return (
    <>
      <input
        className={styles.button_Layout}
        type="date"
        value={date}
        onChange={handleDateChange}
      />
      <input
        className={styles.button_Layout}
        type="time"
        value={time}
        onChange={handleTimeChange}
      />
    </>
  );
};

export default DateInput;
