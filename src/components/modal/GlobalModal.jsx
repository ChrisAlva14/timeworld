import { useState } from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import './GlobalModal.css'


const GlobalModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [format24h, setFormat24h] = useState(false)
    const [customBg, setCustomBg] = useState(false);
    const [saveSetttings, setSaveSettings] = useState(false);


    const handleSaveChanges = () => {
        // Guardar las opciones seleccionadas
        console.log("Formato 24 horas:", format24h);
        console.log("Fondo personalizado:", customBg);
        console.log("Guardar preferencias:", saveSetttings);
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Abrir Modal</button>

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
                            <ToggleSwitch checked={format24h} setChecked={setFormat24h}>Formato 24 horas</ToggleSwitch>
                            <ToggleSwitch checked={customBg} setChecked={setCustomBg}>Fondo personalizado</ToggleSwitch>
                            <ToggleSwitch checked={saveSetttings} setChecked={setSaveSettings}>Guardar preferencias</ToggleSwitch>
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