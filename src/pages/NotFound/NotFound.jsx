import { useEffect } from 'react';

import './NotFound.css'
import './NotFound.css';

function NotFound() {

    useEffect(() => {
        document.getElementById('root').className = 'not-found';
        return () => {
            document.getElementById('root').className = '';
        };
    }, [])


    return (
        <>
            <h2 className='ubuntu-bold'>404</h2>
            <p className='ubuntu-regular'>Ups! Parece que estás perdido...</p>
            <br />
            <p className='ubuntu-medium'>No pudimos encontrar la página que buscas {':('}</p>
        </>
    );
}
export default NotFound;