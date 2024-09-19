import { useEffect, useRef, useState } from "react";

import SelectComponent from "../../components/select-input/select-component"
import { cities as cityList } from "../../utils/api.cities";
import { getDate, getHour } from "../../utils/dateHelper";
import Invitation from "../Invitation/Invitation";

import "./InvitationGenerator.css";

const lista = cityList

function InvitationGenerator() {

  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    link: "",
    fecha: (getDate()),
    hora: (getHour()),
    ciudadOrigen: "",
    cities: [],
  });

  // cities Collected
  const [cities, setCities] = useState([]);
  // origin citiy
  const [city, setCity] = useState(null);

  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const selectItem = (item) => {
    setCities([...cities, item])
  }
  const selectOrigin = (item) => {
    setCity(item)
    setFormData({
      ...formData, ciudadOrigen:item
    })
  }

  useEffect(() => {
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      cities: cities,
    }));
  }, [cities])

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };



  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.addEventListener('click', handleDateClick);
    }
    if (timeRef.current) {
      timeRef.current.addEventListener('click', handleTimeClick);
    }
    
    return () => {
      if (dateRef.current) {
        dateRef.current.removeEventListener('click', handleDateClick);
      }
      if (timeRef.current) {
        timeRef.current.removeEventListener('click', handleTimeClick);
      }
    };
  }, []);

  const handleDateClick = (event) => {
    if (dateRef.current) {
      dateRef.current.showPicker();
    }
  };

  const handleTimeClick = (event) => {
    if (timeRef.current) {
      timeRef.current.showPicker();
    }
  };

  const handleRemove = (item) => {

    const updatedCities = cities.filter((city) => city !== item)
    setCities(updatedCities)
    setFormData((prevFormData) => ({
      ...prevFormData,
      cities: updatedCities,
    }))
    
  }

  return (
    <main className="main_invitation_page">
      <h1 className="invitation_h1">Generar invitación </h1>
      <p className="info">
        Utiliza este generador para{" "}
        <span>crear una invitación para tu reunión</span> con los horarios de
        las ciudades que desees
      </p>

      <section id="container">
        <div className="info_container">
          <form>
            <div className="div_input">
              <input
                type="text"
                id="titulo"
                placeholder="Un título para la invitación"
                value={formData.titulo}
                onChange={handleInputChange}
              />
            </div>

            <div className="div_input">
              <textarea
                id="descripcion"
                placeholder="Descripción breve del evento"
                value={formData.descripcion}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="div_input">
              <input
                type="text"
                id="link"
                placeholder="Link a la reunión"
                value={formData.link}
                onChange={handleInputChange}
              />
            </div>

            <div className="time">
              <div className="div_input" id="date">
                <input
                  ref={dateRef}
                  type="date"
                  id="fecha"
                  value={formData.fecha}
                  onChange={handleInputChange}
                />
              </div>

              <div className="div_input" id="time">
                <input
                  ref={timeRef}
                  type="time"
                  id="hora"
                  value={formData.hora}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="div_input">
            <SelectComponent 
                contentList={cityList}         
                itemsCollected={city}
                emptyMessage='No se encontraton resultados...' 
                placeHolder='Seleccione las ciudades invitadas'
                selectItem={selectOrigin}
              />
            </div>

            <div className="select_input">
              <SelectComponent 
                contentList={cityList}         
                itemsCollected={cities}
                emptyMessage='No se encontraton resultados...' 
                placeHolder='Seleccione las ciudades invitadas'
                selectItem={selectItem}
              />
            </div>
          </form>

          <div className="container_cities">
            {cities.length > 0 ? (
              cities.map((city, key) => {
                return (
                  <span onClick={() => handleRemove(city)} className="cityLabel" key={key}>
                    {city}
                    <img src="/svg_icons/crossIcon.svg" alt={city}/>
                  </span>
                );
              })
            ) : (
              <p id="message">No hay ciudades seleccionadas</p>
            )}
          </div>

        </div>
        {<Invitation formData={formData} />}
      </section>
    </main>
  );
}

export default InvitationGenerator;
