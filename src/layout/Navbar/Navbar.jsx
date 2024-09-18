import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

import logo from '../../assets/nav/LogoW.svg';
import { AppContext } from '../../context/AppContext';

import './Navbar.css';

export const Navbar = () => {
    const [location] = useLocation();
    const { setIsOpen}= useContext(AppContext)

    useEffect(() => {
        const logoElement = document.querySelector('.logo');
        const circleElement = document.querySelector('.circle');
        
        const toggleMenu = (e) => {
            e.preventDefault();
            circleElement.classList.toggle('open');
        };

        logoElement.addEventListener('click', toggleMenu);

        return () => {
            logoElement.removeEventListener('click', toggleMenu);
        };
    }, []);

    return (
        <>
            <header className='header'>
                <nav className='navbar'>
                    <Link to={'/'} className={`nav-link ${location === '/' ? 'active' : ''}`}>Convertor Horario</Link>

                    <button id="menu-button">
                        <img src={logo} alt="Logo Web" width={75} height={75} id='logotipo' className='logo' />
                    </button>

                    <Link to={'/invitacion'} className={`nav-link ${location === '/invitacion' ? 'active' : ''}`}>Generar Invitación</Link>
                </nav>

                <nav className="circular-menu">
                    <div className="circle">
                        <Link to="/team"  > < img src="/teamLogo2.png" className="link-item" alt="team" />  </Link>
                        <a id='modal' onClick={() => setIsOpen(true)}  ><img src="/logoModal2.png" alt="config" className="link-item" />   </a>
                        <Link to="/tutorial"  ><img src="/link2.png" alt="tutorial" className="link-item" />   </Link>
                    </div>
                </nav>
            </header>
        </>
    );
} 
