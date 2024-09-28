import React, { useEffect, useState } from "react";

import { getDate, getHour } from "../../../../utils/dateHelper";
import styles from "./dateInput.module.css";

const DateInput = ({ setDateInput, dateInput }) => {
    const [date, setDate] = useState(getDate);
    const [time, setTime] = useState(getHour);

    useEffect(() => {
        formatDateTime(date, time)
    }, [])

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
