import './NotFound.css'

import { useEffect, useState } from 'react';
import './NotFound.css';
function NotFound() {
    const [oldClass] = useState(document.documentElement.className)

    useEffect(() => {
        document.documentElement.className = 'not-found';
        console.log(oldClass);
        return () => {
            document.documentElement.className = oldClass;
        };
    }, [oldClass])
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