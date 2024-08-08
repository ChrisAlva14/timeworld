import React from 'react'


export const TarjetaInkua = ({formData}) => {

    const { titulo, descripcion, link, fecha, hora,cities} = formData


  return (
    <div className="modal-content">

        <img src="./logo-inkua.png" alt="logo-inkua" />

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
        
        <div className="modal-times">
            {cities.map((city, key) => (
                <div key={key}>
                    <span>{city} : .............. </span>
                    <span>{fecha} - {hora}</span>
                </div>
            ))}
        </div>

    </div>
  )
}
