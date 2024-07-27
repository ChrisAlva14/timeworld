
import './Invitation.css'

// eslint-disable-next-line react/prop-types
function Invitation({ formData }) {

    // eslint-disable-next-line react/prop-types
    const { titulo, descripcion, link, fecha, hora,cities} = formData


    return (
        
        <div className="modal">
            <div className='buttons'>
            <div className='button' id='orange'></div>
            <div className='button' id='blue'></div>
            <div className='button' id='green'></div>
        </div>
            <div className='modal-container'>

             
                <div className="modal-content">

                        <img src="./logo-inkua.png" alt="logo-inkua" />

                    <h2>{titulo} </h2>
                    <p>{descripcion} </p>
                   <div className='container-link'><div className='line'></div> <a href={link}>{link} </a> <div className='line'></div></div>
                   <div className="modal-times">
              {cities.map((city, key) => (
                <div key={key}>
                  <span>{city} : .............. </span>
                  <span>{fecha} - {hora}</span>
                </div>
              ))}
            </div>


          
                </div>
            </div>
            <div className="modal-buttons">
                <button >Descargar img</button>
                <button>Copiar texto</button>
            </div>
        </div>

    )
}

export default Invitation        