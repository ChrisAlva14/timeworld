import { useEffect, useState } from "react";

import { getTimeZones } from "../../utils/timeConverter";
import styles from "./BtnPagConverterCities.module.css";

const BtnPagConverterCities = (props) => {
    const [timeZone, setTimeZone] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isListVisible, setIsListVisible] = useState(false);

    useEffect(() => {
        const timeZoneValue = getTimeZones();
        setTimeZone(timeZoneValue);
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setIsListVisible(true);
    };

    const handleOptionClick = (city) => {
        setSearchQuery(city);
        setIsListVisible(false);
    };

    const handleOutsideClick = (event) => {
        if (event.target.closest(`.${styles.container}`) === null) {
            setIsListVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const filteredCities = timeZone.filter((city) =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder={props.placeholderText}
                value={searchQuery}
                onChange={handleSearchChange}
                onClick={() => setIsListVisible(true)}
                className={styles.searchInput}
            />
            {isListVisible && searchQuery && (
                <ul className={styles.optionsList}>
                    {filteredCities.map((city, index) => (
                        <li
                            key={index}
                            className={styles.option}
                            onClick={() => handleOptionClick(city)}>
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BtnPagConverterCities;
