import { createContext, useState } from 'react';

import { getReactiveBg, getTimeFormat, setReactiveBg, setTimeFormat } from '../utils/localstorage.util';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [format24h, setFormat24h] = useState(getTimeFormat);
    const [customBg, setCustomBg] = useState(getReactiveBg);

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


    return (
        <AppContext.Provider
            value={{
                format24h,
                updateFormat24h,
                customBg,
                updateCustomBg,
                isOpen,
                setIsOpen
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };