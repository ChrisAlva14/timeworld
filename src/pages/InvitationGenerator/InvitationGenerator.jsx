import { useState } from "react";
import "./InvitationGenerator.css";
import Invitation from "../Invitation/Invitation";

function InvitationGenerator() {
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    link: "",
    fecha: "",
    hora: "",
    ciudadOrigen: "",
    cities: [],
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleCities = (event) => {
    const city = event.target.value;
    if (city && !cities.includes(city)) {
      setCities((prevCities) => {
        const updatedCities = [...prevCities, city];
        setFormData((prevFormData) => ({
          ...prevFormData,
          cities: updatedCities,
        }));
        return updatedCities;
      });
    }
  };

  const handleRemove = (event) => {
    const cityRemove = event.target.textContent.trim();
    if (cities.includes(cityRemove)) {
      const updatedCities = cities.filter((city) => city !== cityRemove);
      setCities(updatedCities);
      setFormData((prevFormData) => ({
        ...prevFormData,
        cities: updatedCities,
      }));
    }
  };

  return (
    <main>
      <h1 className="invitation_h1">Generar invitación </h1>
      <p className="info">
        Utiliza este generador para{" "}
        <span>crear una invitación para tu reunión</span> con los horarios de
        las ciudades que desees
      </p>

      <section id="container">
        <div className="info_container">
          <div className="col">
            <form>
              <div className="div_input">
                <input
                  type="text"
                  id="titulo"
                  placeholder="Titulo de la invitación"
                  value={formData.titulo}
                  onChange={handleInputChange}
                />
              </div>

              <div className="div_input">
                <textarea
                  id="descripcion"
                  placeholder="Descripción de la invitación"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="div_input">
                <input
                  type="text"
                  id="link"
                  placeholder="Link de la invitación"
                  value={formData.link}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>
          <div className="col">
            <form>
              <div className="time">
                <div className="div_input">
                  <input
                    type="date"
                    id="fecha"
                    value={formData.fecha}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="div_input">
                  <input
                    type="time"
                    id="hora"
                    value={formData.hora}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="div_input">
                <select
                  id="ciudadOrigen"
                  value={formData.ciudadOrigen}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    --Seleccione la ciudad--
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Brasil">Brasil</option>
                  <option value="Canadá">Canadá</option>
                  <option value="Chile">Chile</option>
                  <option value="Colombia">Colombia</option>
                  <option value="España">España</option>
                  <option value="México">México</option>
                  <option value="Perú">Perú</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Venezuela">Venezuela</option>
                </select>
              </div>
              <div className="div_input">
                <select id="cityinvited" onChange={handleCities}>
                  <option value="" disabled>
                    --Seleccione la ciudad--
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Brasil">Brasil</option>
                  <option value="Canadá">Canadá</option>
                  <option value="Chile">Chile</option>
                  <option value="Colombia">Colombia</option>
                  <option value="España">España</option>
                  <option value="México">México</option>
                  <option value="Perú">Perú</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Venezuela">Venezuela</option>
                </select>
              </div>

              <div className="container_cities">
                {cities.length > 0 ? (
                  cities.map((city, key) => {
                    return (
                      <p onClick={handleRemove} className="cityLabel" key={key}>
                        {city}{" "}
                      </p>
                    );
                  })
                ) : (
                  <p id="message">No hay ciudades seleccionadas</p>
                )}
              </div>
            </form>
          </div>
        </div>
        {<Invitation formData={formData} />}
      </section>
    </main>
  );
}

export default InvitationGenerator;
