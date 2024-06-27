import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <>
            <header className='header'>
                <nav className='navbar'>
                    {/* PRIMER LINK */}
                    <a href='#' className='nav-link' id='convertorHorario'>Convertor Horario</a>

                    <a href="#">
                        {/* IMG */}
                        <img src="src/assets/logoConvertor.png" alt="Logo Web" width={75} height={75} id='logotipo' className='logo' />
                    </a>

                    {/* SEGUNDO LINK */}
                    <a href='#' className='nav-link' id='generarInvitacion'>Generar Invitación</a>
                </nav>
            </header>
        </>
    )
}