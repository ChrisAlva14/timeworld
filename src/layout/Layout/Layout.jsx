import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../Navbar/Navbar";
import { getLocation, getWeather, getBackgroundClass} from "../../utils/weatherBg";
import NavBotton from "../NavBotton/NavBotton";
import styles from "./Layout.module.css"
import { getReactiveBg, setReactiveBg } from "../../utils/localstorage.util";

export default function Layout({ children }) {
    const [weather, setWeather] = useState(null);
    const [partOfDay, setPartOfDay] = useState(null);
    const [error, setError] = useState(null)
    const [loadingLocation, setLoadingLocation] = useState(true); // Estado para indicar si se está cargando la ubicación
    const [loadingWeather, setLoadingWeather] = useState(true); // Estado para indicar si se está cargando el clima
    const [coords, setCoords] = useState({ latitude: null, longitude: null });
    const [customExperience, setCustomExperience] = useState(() => getReactiveBg())// Estado para el background personalizado


    const handleBtn = (value) => {
        setReactiveBg(value)
        setCustomExperience(value)
    }

    // Obtener la posición actual del usuario si el navegador lo permite
    const getDevicePosition = () => {
        getLocation(setCoords, setLoadingLocation, setError);
    }

    // Obtener el clima cuando las coordenadas cambian
    const getWeatherPosition = () => {
        getWeather(
            coords.latitude,
            coords.longitude,
            setPartOfDay,
            setWeather,
            setError,
            setLoadingWeather,
        );
    }

    // Establecer la clase de fondo en el nivel del documento una vez que se tenga el clima
    const updateBackground = () => {
        if(error){
            alert("No se ha podido actualizar el background")
        }else{
            const bgClass = `${partOfDay}-${getBackgroundClass(weather)}`;
            document.documentElement.className = bgClass;
        }
    }


    useEffect(() => {
        if (customExperience) {
            getDevicePosition();
        }
    }, [customExperience]);
    
    useEffect(() => {
        if (coords.latitude !== null && coords.longitude !== null) {
            getWeatherPosition();
        }
    }, [coords]);
    
    useEffect(() => {
        if (partOfDay && weather) {
            updateBackground();
        }else{
            document.documentElement.className = 'dia-Sunny';
        }
    }, [partOfDay, weather]);

    return (
        <>
            <Navbar />
            <main className={styles.main}>{children}</main>
            {customExperience ?
                <button onClick={() => handleBtn(false)}>desactivar</button>
                :
                <button onClick={() => handleBtn(true)}>activar</button>
            }
            <NavBotton />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
