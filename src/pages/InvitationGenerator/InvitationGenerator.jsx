import { useState } from "react";
import "./InvitationGenerator.css";

function InvitationGenerator() {
  const [cities, setCities] = useState([]);

  const handleCities = (event) => {
    const city = event.target.value;
    if (city && !cities.includes(city)) {
      setCities((prevCities) => {
        const updatedCities = [...prevCities, city];
        console.log(updatedCities);
        return updatedCities;
      });
    }
  };

  const handleRemove = (event) => {
    const cityRemove = event.target.textContent.trim(); 

    if (cities.includes(cityRemove)) {
      const citiesRemoves = cities.filter((city) => city !== cityRemove);
      setCities(citiesRemoves);
      console.log(citiesRemoves);
    }
  };

  return (
    <main>
      <h1>Generar invitación </h1>
      <p>
        Utiliza este generador para{" "}
        <span>crear una invitación para tu reunión</span> con los horarios de
        las ciudades que desees
      </p>

      <div className="info_container">
        <div className="col">
          <form>
            <div className="div_input">
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                id="titulo"
                placeholder="Titulo de la invitación"
              />
            </div>

            <div className="div_input">
              <label htmlFor="message">Descripción:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Descripción de la invitación"
              ></textarea>
            </div>

            <div className="div_input">
              <label htmlFor="link">Link:</label>
              <input
                type="text"
                id="link"
                placeholder="Link de la invitación"
              />
            </div>
          </form>
        </div>
        <div className="col">
          <form>
            <div className="time">
              <div className="div_input">
                <label htmlFor="date">Fecha:</label>
                <input type="date" id="date" />
              </div>

              <div className="div_input">
                <label htmlFor="hour">Hora:</label>
                <input type="time" id="hour" />
              </div>
            </div>

            <div className="div_input">
              <label htmlFor="cityOrigin">Ciudad de origen :</label>
              <select name="cityOrigin" id="cityOrigin" onChange={handleCities}>
                <option value="" disabled>
                  --Seleccione la ciudad--
                </option>
                <option value="ARG">Argentina</option>
                <option value="BRA">Brasil</option>
                <option value="CAN">Canadá</option>
                <option value="CHL">Chile</option>
                <option value="COL">Colombia</option>
                <option value="ESP">España</option>
                <option value="MEX">México</option>
                <option value="PER">Perú</option>
                <option value="URU">Uruguay</option>
                <option value="VEN">Venezuela</option>
              </select>
            </div>
            <div className="div_input">
              <label htmlFor="cityinvited">Ciudades invitadas:</label>
              <select name="cityinvited" id="cityinvited">
                <option value="" disabled>
                  --Seleccione la ciudad--
                </option>
                <option value="ARG">Argentina</option>
                <option value="BRA">Brasil</option>
                <option value="CAN">Canadá</option>
                <option value="CHL">Chile</option>
                <option value="COL">Colombia</option>
                <option value="ESP">España</option>
                <option value="MEX">México</option>
                <option value="PER">Perú</option>
                <option value="URU">Uruguay</option>
                <option value="VEN">Venezuela</option>
              </select>
            </div>

            <div className="container_cities">
              {cities.length > 0 ? (
                cities.map((city, key) => {
                  return (
                    <p
                      onClick={handleRemove}
                      className="cityLabel"
                      key={key}
                    >
                      {city}{" "}
                    </p>
                  );
                })
              ) : (
                <p>No hay ciudades seleccionadas</p>
              )}
            </div>
          </form>
        </div>

        <div className="container_button">
          <button>Generar invitación</button>{" "}
        </div>
      </div>
    </main>
  );
}

export default InvitationGenerator;
