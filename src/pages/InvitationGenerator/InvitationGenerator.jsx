
import './InvitationGenerator.css'

function InvitationGenerator() {
    return (
        <main>
            <h1>Generar invitación </h1>
            <p>Utiliza este generador para <span>crear una invitación para tu reunión</span> con los horarios de las ciudades que deses</p>

          
          
          <div className="info_container">

<div className='col' >
    <form >
       <div className = "div_input">
       <label htmlFor="title">Título:</label>
       <input type="text" id="titulo"   />
       </div>
        
        <div className = "div_input">
        <label htmlFor="message">Descripción:</label>
        <textarea name="message" id="message"></textarea>
        </div>
       
       <div className = "div_input">
       <label htmlFor="link">Link:</label>
       <input type="text" id="link"   />
       </div>
    </form>
</div>
<div className='col' >
    <form >
       <div className='time'>
     <div className = "div_input">
     <label htmlFor="date">Fecha:</label>
     <input type="date" id="date"   />
     </div>
        
        <div className = "div_input"><label htmlFor="hour">Hora:</label>
        <input type="time" id="hour"   /></div>
       </div>
      
       <div className = "div_input"> <label htmlFor="cityOrigin">Ciudad de origen :</label>
       <select name="cityOrigin" id="cityOrigin"></select></div>
       <div className = "div_input"> <label htmlFor="cityinvited">Ciudades invitadas:</label>
       <select name="cityinvited" id="cityinvited"></select></div>
    </form>
</div>                   

<div className='container_button'>
<button>Generar invitación</button> </div>
</div>


     
        </main>
    )
}

export default InvitationGenerator
