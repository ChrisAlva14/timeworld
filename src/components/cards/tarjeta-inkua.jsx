import countries from 'i18n-iso-countries';
import esLocale from 'i18n-iso-countries/langs/es.json';
import React, { useState } from 'react'

countries.registerLocale(esLocale);

function obtenerBandera(lugar) {
    console.log(lugar)
    const partes = lugar.split(', ');
    const pais = partes[1].trim();
    if(pais==="EEUU"){
        return ", USA"
    }
    const codigoPais = countries.getAlpha3Code(pais, 'es');
    if(codigoPais){
        return ", "+ codigoPais
    }
    return ""
}

export const TarjetaInkua = ({formData}) => {
    const { titulo, descripcion, link, fecha, hora, cities} = formData
    const [ uploadImg, setUploadImg ] = useState(null)

    const dateSplit = fecha.split('-')
    const dayMonth = `${dateSplit[2]}/${dateSplit[1]}`


    const imgOnChange = (event) => {

        const archivoSeleccionado = event.target.files[0]
        if (archivoSeleccionado) {
            const imgUrl = URL.createObjectURL(archivoSeleccionado)
            setUploadImg(imgUrl)
        }
    }
    
    
  return (
    <div className="modal-content">

        {/* <img src="./logo-inkua.png" alt="logo-inkua" id='card-logo'/> */}

        <h2>{titulo} </h2>
        <p>{descripcion} </p>

        <div className='container-link'>
            <div className='line'></div>
                {
                    !link ? <span className='enlace'>🔗</span>
                    :
                    <a href={link}>{link}</a>
                }
            <div className='line'></div>
        </div>
        
        <ul id="invitation-times">
            {cities.map((item, index) => (
                <li key={index}>
                    <span>{`${item.city.split(', ')[0]}${obtenerBandera(item.city)}`}:</span>
                    <div className='dotted-line'></div>
                    <span>{item.date}hs</span>
                </li>
            ))}
        </ul>

        <section className='upload-img'>
            <figure>
                <img src={uploadImg ? uploadImg : "/card-image.png"} alt="imagen de reunion de grupo"/>
            </figure>

            <div className='upload-filter-img'>
                {
                    uploadImg ?
                    <div className='simbolos-de-carga'>
                        <span title='Remover imagen' onClick={() => setUploadImg(null)}>
                            <img src="/svg_icons/crossIcon.svg" alt="icono de cruz" />
                        </span>
                        <label htmlFor="imgCarga">
                            <span title='Cargar otra imagen'>
                                <img src="/svg_icons/pencilIcon.svg" alt="icono de lapiz" />
                            </span>
                        </label>
                    </div>
                        :
                    <label htmlFor="imgCarga" className='imgSelector'>
                        <img src="/image-selector.png" alt="" />
                        <span>Seleccione una imagen</span>                    
                    </label>
                }

                <input type="file" accept="image/jpeg,image/png" id="imgCarga" onChange={imgOnChange}/>    
            </div>
        </section>

    </div>
  )
}
