import { createContext, useEffect, useState } from 'react';

import { getReactiveBg, getTimeFormat, setReactiveBg, setTimeFormat } from '../utils/localstorage.util';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [format24h, setFormat24h] = useState(getTimeFormat);
    const [customBg, setCustomBg] = useState(getReactiveBg);

    const [selectedCities, setSelectedCities] = useState([])
    const [originCity, setOriginCity] = useState(null)

    const [convertAvailable, setConvertAvailable] = useState(false)
    const [resetButtonAvailable, setResetButtonAvailable] = useState(false)


/* abre el modal */
    const [isOpen, setIsOpen] = useState(false)

    const updateCustomBg =(value)=>{
        setReactiveBg(value)//actualiza el local storage
        setCustomBg(value)//actualiza el estado del contexto
    }

    const updateFormat24h = (value) =>{
        setTimeFormat(value)
        setFormat24h(value)
    }
    const addCity = (newCity)=>{
        setSelectedCities([...selectedCities, newCity ])
    }
    const removeCity = (item)=>{
        const updatedCities = selectedCities.filter((city) => city !== item);
        setSelectedCities(updatedCities);
    }

    const switchOnResetButton = () => {
        setResetButtonAvailable(true)
    }

    const switchOffResetButton = () => {
        setResetButtonAvailable(false)
    }

    const resetValues = () => {
        setSelectedCities([])
        setOriginCity(null)
    }

    useEffect(() => {

        if (selectedCities.length > 0 && originCity) {
            setConvertAvailable(true)
        } else{
            setConvertAvailable(false)
        }

    }, [selectedCities, originCity])



    return (
        <AppContext.Provider
            value={{
                format24h,
                updateFormat24h,
                customBg,
                updateCustomBg,
                isOpen,
                setIsOpen,
                originCity,
                setOriginCity,
                addCity,
                removeCity,
                selectedCities,
                convertAvailable,
                resetButtonAvailable,
                switchOnResetButton,
                switchOffResetButton,
                resetValues,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };