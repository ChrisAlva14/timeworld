import React, { useContext, useState } from 'react'

import { AppContext } from '../../context/AppContext'

import './ResetButton.css'

export const ResetButton = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { resetValues, switchOffResetButton } = useContext(AppContext)

    const handlerConfirm = () => {
        resetValues()
        setIsOpen(false)
        switchOffResetButton()
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className='resetButton'
            >
                Reiniciar
            </button>

            {isOpen &&
                <div className="Bmodal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="Bmodal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="Bmodal-header">
                            <h2>Reiniciar valores</h2>
                            <button className="Bclose-button"
                                onClick={() => setIsOpen(false)}>
                                &times;
                            </button>
                        </div>

                        <div className="Bmodal-options">
                            <p className='BQuestion'>¿Deseas borrar todos lo valores selecionados?</p>
                        </div>

                        <button className="Bcancel-button"
                            onClick={handlerConfirm}
                        >
                            Reiniciar
                        </button>
                        <button className="Bcancel-btn"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            }
        </>
    )
}
