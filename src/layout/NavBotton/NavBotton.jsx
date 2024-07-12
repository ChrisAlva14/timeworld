import { Link, useLocation } from 'wouter'

import "./NavBotton.css"

function NavBotton() {
    const [location] = useLocation();
    return (
        <nav className="nb-botton">
            <div className="nb-botton-box">
                <Link to='/'>
                    <button className={`nb-btn ${location === '/' && 'conv-selected'}`}>Convertor horario</button>
                </Link>

                <Link to='/invitacion'>
                    <button className={`nb-btn ${location === '/invitacion' && 'inv-selected'}`}>Generar invitación</button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBotton
