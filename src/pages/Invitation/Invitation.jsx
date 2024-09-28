import html2canvas from 'html2canvas'
import { useEffect, useRef, useState } from 'react'

import ColorButton from '../../components/buttons/color-button'
import { TarjetaInkua } from '../../components/cards/tarjeta-inkua'
import { copyText } from '../../utils/invitationCard'
import { getHourConverted } from '../../utils/timeConverter'

import './Invitation.css'

function Invitation({ formData }) {
    const [dataConverted, setDataConverted] = useState(formData)

    const colorStyleTpyes = {
        lightBlue: 'linear-gradient(90deg, #93ADC8 -3.59%, #6893BF 100%)',
        blue: 'linear-gradient(90deg, #0B61B0 -20%, #04407D 20%)',
        darkBlue: 'linear-gradient(90deg, #001C32 -3.59%, #003156 100%)'
    }

    const [bgColor, setBgColor] = useState(colorStyleTpyes.darkBlue)
    const canvasRef = useRef()

    const changeColor = (color) => {
        setBgColor(color)
    }

    const handleDownload = () => {
        if (canvasRef.current) {

            const uploadFilterImg = canvasRef.current.querySelector('.upload-filter-img');
            if (uploadFilterImg) {
                uploadFilterImg.style.display = 'none';
            }

            html2canvas(canvasRef.current).then((canvas) => {
                const url = canvas.toDataURL()
                const link = document.createElement('a')
                link.href = url
                link.download = 'mi_tarjeta.png'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                if (uploadFilterImg) {
                    uploadFilterImg.style.display = 'flex';
                }
            }).catch(() => {
                alert('Error al capturar la imagen');
            });

        }
    };

    const handleCopyText = () => {
        copyText()
    };

    const formatDateTime = (date, time) => {
        if (date && time) {
            const dateTime = `${date} ${time}:00`;
            return dateTime
        }
    };

    useEffect(() => {
        if (formData.cities.length > 0) {
            let citiesConverted = []
            const date = formatDateTime(formData.fecha, formData.hora)
            formData.cities.forEach(item => {
                citiesConverted.push(
                    {
                        city: item,
                        date: (getHourConverted(date, formData.ciudadOrigen, item)),
                    }
                )
            });
            setDataConverted({ ...formData, cities: citiesConverted })
        } else {
            setDataConverted(formData)
        }
    }, [formData])

    return (
        <div className="modal">
            <div className='buttons'>
                <ColorButton color={colorStyleTpyes.lightBlue} styles={{ border: '2px solid white' }} changeColor={changeColor} />
                <ColorButton color={colorStyleTpyes.blue} styles={{ border: '2px solid white' }} changeColor={changeColor} />
                <ColorButton color={colorStyleTpyes.darkBlue} styles={{ border: '2px solid white' }} changeColor={changeColor} />
            </div>

            <article
                ref={canvasRef}
                className='modal-container'
                style={{ background: bgColor }}
            >
                <TarjetaInkua formData={dataConverted} />
            </article>

            <div className="modal-buttons">
                <button onClick={handleDownload}>Descargar img</button>
                <button onClick={handleCopyText}>Copiar texto</button>
            </div>
        </div>
    )
}

export default Invitation        