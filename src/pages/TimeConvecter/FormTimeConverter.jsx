import React, { useState } from "react";
import moment from "moment-timezone";

// Lista de ciudades y sus zonas horarias
const cities = [
  { name: "New York", timezone: "America/New_York" },
  { name: "London", timezone: "Europe/London" },
  { name: "Tokyo", timezone: "Asia/Tokyo" },
  { name: "Sydney", timezone: "Australia/Sydney" },
  // Agrega más ciudades según sea necesario
];

const FormTimeConverter = () => {
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCityChange = (event) => {
    const { value } = event.target;
    if (!selectedCities.includes(value)) {
      setSelectedCities([...selectedCities, value]);
    }
  };

  const removeCity = (city) => {
    setSelectedCities(selectedCities.filter((c) => c !== city));
  };

  return (
    <div>
      <h1>Seleccionar Ciudades</h1>
      <select onChange={handleCityChange}>
        <option value="">Seleccione una ciudad</option>
        {cities.map((city) => (
          <option key={city.name} value={city.timezone}>
            {city.name}
          </option>
        ))}
      </select>

      <h2>Horas Locales</h2>
      <ul>
        {selectedCities.map((timezone) => {
          const city = cities.find((city) => city.timezone === timezone);
          return (
            <li key={timezone}>
              {city.name}: {moment().tz(timezone).format("YYYY-MM-DD HH:mm:ss")}
              <button onClick={() => removeCity(timezone)}>Eliminar</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FormTimeConverter;
