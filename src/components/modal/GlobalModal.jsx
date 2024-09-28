import { useContext, useState } from 'react';
import { isDesktop } from 'react-device-detect';

import { AppContext } from '../../context/AppContext';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import './GlobalModal.css'

const GlobalModal = () => {
    const { isOpen, setIsOpen } = useContext(AppContext)

    const {
        format24h,
        updateFormat24h,
        customBg,
        updateCustomBg,
    } = useContext(AppContext);


    const [format, setFormat] = useState(format24h)
    const [background, setBackground] = useState(customBg)

    const handleSaveChanges = () => {
        updateFormat24h(format)
        updateCustomBg(background)

        setIsOpen(false)
    };

    return (
        <>
            {isOpen &&
                <div className="Gmodal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="Gmodal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="Gmodal-header">
                            <h2>Configuración</h2>
                            <button className="close-button" onClick={() => setIsOpen(false)}>
                                &times;
                            </button>
                        </div>

                        <div className="Gmodal-options">
                            {/* <ToggleSwitch checked={format} setChecked={setFormat}>Formato 24 horas</ToggleSwitch> */}
                            <ToggleSwitch checked={background} setChecked={setBackground} disabled={!isDesktop}>Fondo personalizado</ToggleSwitch>
                            {
                                background &&
                                <p className='modalBGNote'>* Utilizamos la ubicación SOLO para saber el clima de tu ciudad y actualizar el fondo de pantalla.</p>
                            }
                        </div>

                        <button className="Gsave-button" onClick={handleSaveChanges}>
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            }
        </>
    );
};

export default GlobalModal;