import React from 'react'
import styles from './ConversionResults.module.css'
import { DateCard } from './DateCard'

export const ConversionResults = ({setBox}) => {

    const ciudadOrigen = {
        ciudad: 'Ciudad origen',
        pais: 'País',
        hora: '00:00',
        fecha: '15 de Abril'
    }

    const ciudadesDestino = [
        {
            ciudad: 'Ciudad destino',
            pais: 'País',
            hora: '03:00',
            fecha: '15 de Abril'
        },
        {
            ciudad: 'Ciudad destino',
            pais: 'País',
            hora: '03:00',
            fecha: '15 de Abril'
        }
    ]


  return (
    <div className={styles.container}>
        <section className={styles.cardsContainer}>
            <DateCard 
                ciudad={ciudadOrigen.ciudad}
                pais={ciudadOrigen.pais}
                hora={ciudadOrigen.hora}
                fecha={ciudadOrigen.fecha}
            />

            <span className={styles.equal}>=</span>

            <ul className={styles.destinationCities}
                style={ciudadesDestino.length > 3 ? {overflowY: 'scroll'} : {paddingRight: '0'}}
            >
                {
                    ciudadesDestino.map((item, index) => (
                        <li key={index} className={styles.destinationCitiesListItem}>
                            <DateCard 
                                ciudad={item.ciudad}
                                pais={item.pais}
                                hora={item.hora}
                                fecha={item.fecha}
                            />
                            <small className={styles.messagge}>La hora en ciudad origen, país es 7hs menos que en ciudad destino 1, país</small>
                        </li>
                    ))
                }
            </ul>
        </section>

        <div className={styles.actionButtonsDiv}>
            <button
                className={styles.actionButton}
                onClick={() => setBox('CONVERSOR')}
            >
                <span style={{fontWeight: '700'}}
                    className={styles.navButtonSpan}>Volver</span>
            </button>
            <button className={styles.actionButton}>
                <span style={{fontWeight: '700'}}>Copiar Datos</span>
            </button>
        </div>

    </div>
  )
}
