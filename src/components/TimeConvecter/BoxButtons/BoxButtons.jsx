import SelectComponent from "../../select-input/select-component";
import styles from "./BoxButtons.module.css";
import DateInput from "./dateInput/DateInput";
import { getTimeZones } from "../../../utils/timeConverter";
import { useEffect, useState } from "react";
import { formatCityList } from "../../../utils/formatCityList";
import cityCountryMapping from "../../../utils/cityCountryMapping";

function BoxButtons({
  cityOfOrigin,
  setCityOfOrigin,
  selectedCities,
  setSelectedCities,
  setDateInput,
  dateInput,
}) {
  const [list, setList] = useState(Object.values(cityCountryMapping));
  useEffect(() => {
    const timezones = getTimeZones();
    const formattedTimezones = formatCityList(timezones);
    console.log(list);
  }, []);

  const selectCityOfOrigin = (item) => {
    setCityOfOrigin(item);
  };

  const selectItem = (item) => {
    setSelectedCities([...selectedCities, item]);
  };

  const handleRemove = (item) => {
    const updatedCities = selectedCities.filter((city) => city !== item);
    setSelectedCities(updatedCities);
  };

  return (
    <section className={styles.section}>
      <div className={styles.button_Layout}>
        <SelectComponent
          contentList={list}
          itemsCollected={cityOfOrigin}
          emptyMessage="No se encontraton resultados..."
          placeHolder="Seleccione una ciudad de origen"
          selectItem={selectCityOfOrigin}
        />
      </div>

      <div className={styles.box_btn_layout}>
        <DateInput setDateInput={setDateInput} dateInput={dateInput} />
      </div>

      <div className={styles.destination_Select}>
        <div className={styles.button_Layout_Destination_Select}>
          <SelectComponent
            contentList={list}
            itemsCollected={selectedCities}
            emptyMessage="No se encontraton resultados..."
            placeHolder="Seleccione las ciudades invitadas"
            selectItem={selectItem}
          />
        </div>
        <div className={styles.selected_Cities}>
          {selectedCities.length > 0 &&
            selectedCities.map((city, key) => {
              return (
                <span
                  onClick={() => handleRemove(city)}
                  className={styles.cityLabel}
                  key={key}>
                  {city}
                  <img src="/svg_icons/crossIcon.svg" alt={city} />
                </span>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default BoxButtons;
