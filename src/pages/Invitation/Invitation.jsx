import { useRef, useState } from 'react'
import { TarjetaInkua } from '../../components/cards/tarjeta-inkua'
import ColorButton from '../../components/buttons/color-button'
import html2canvas from 'html2canvas'
import './Invitation.css'


function Invitation({ formData }) {

    const colorStyleTpyes = {
        lightBlue: 'rgba(106, 148, 192, 1)',
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
          html2canvas(canvasRef.current).then((canvas) => {
            const url = canvas.toDataURL()
            const link = document.createElement('a')
            link.href = url
            link.download = 'mi_tarjeta.png'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          });
        }
    };

    const handleCopyText = () => {
        const contentElement = document.querySelector('.modal-container');
        if (contentElement) {
            const textToCopy = contentElement.textContent.trim();
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert('Texto copiado al portapapeles');
                })
                .catch((err) => {
                    console.error('Error al copiar el texto: ', err);
                    alert('Error al intentar copiar el texto')
                });
        }
    };


    return (
        <div className="modal">
            <div className='buttons'>
                <ColorButton color={colorStyleTpyes.lightBlue} changeColor={changeColor}/>
                <ColorButton color={colorStyleTpyes.blue} changeColor={changeColor}/>
                <ColorButton color={colorStyleTpyes.darkBlue} styles={{border: '2px solid white'}} changeColor={changeColor}/>
            </div>

            <article
                ref={canvasRef} 
                className='modal-container'
                style={{background: bgColor}}
            >
                <TarjetaInkua formData={formData}/>
            </article>

            <div className="modal-buttons">
                <button onClick={handleDownload}>Descargar img</button>
                <button onClick={handleCopyText}>Copiar texto</button>
            </div>
        </div>
    )
}

export default Invitation        