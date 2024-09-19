import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";

import GlobalModal from "../../components/modal/GlobalModal"
import { AppContext } from "../../context/AppContext";
import { getBackgroundClass, getLocation, getWeather } from "../../utils/weatherBg";
import { Navbar } from "../Navbar/Navbar";
import NavBotton from "../NavBotton/NavBotton";
import styles from "./Layout.module.css"

export default function Layout({ children }) {
    const { customBg } = useContext(AppContext);

    const [weather, setWeather] = useState(null);
    const [partOfDay, setPartOfDay] = useState(null);
    const [error, setError] = useState(null)
    const [loadingLocation, setLoadingLocation] = useState(true); // Estado para indicar si se está cargando la ubicación
    const [loadingWeather, setLoadingWeather] = useState(true); // Estado para indicar si se está cargando el clima
    const [coords, setCoords] = useState({ latitude: null, longitude: null });

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
        if (customBg) {
            getDevicePosition();
        }
    }, [customBg]);
    
    useEffect(() => {
        if (coords.latitude !== null && coords.longitude !== null) {
            getWeatherPosition();
        }
    }, [coords]);
    
    useEffect(() => {
        if (partOfDay && weather) {
            updateBackground();
        }else{
            document.documentElement.className = 'default-weatherDefault';
        }
    }, [partOfDay, weather]);

    return (
        <>
            <Navbar />
            <main className={styles.main}>{children}</main>
            <GlobalModal  />
            <NavBotton />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
