import styles from './BoxButtons.module.css'

function BoxButtons() {

    return (
        <section className={styles.section}> 
            <div className={styles.button_Layout}>
                {/* debes crear el componente solo solo del boton/input */}
                {/* debes pegar los estilos correspondientes */}
                <button className={styles.text_input}>convertidor A</button>
            </div>

            <div className={styles.box_btn_layout}>
                {/* debes crear el componente solo de lo que está dentro de este button layout */}
                {/* En el return de ese componente poneslos dos botones/inputs dentro de un fragment y debes pegar los estilos correspondientes */}
                <button className={styles.button_Layout}>Fecha</button>
                <button className={styles.button_Layout}>Hora</button>
            </div>

            <div className={styles.button_Layout}> 
                {/* debes crear el componente solo de lo que está dentro de este button layout */}
                {/* En el return de ese componente pones el button y la lista dentro de un fragment y debes pegar los estilos correspondientes */}
                <button className={styles.text_input}>convertidor B</button>

                <div role='list' className={styles.ul_cities}>
                    <div className={styles.items}>Bogotá</div>
                    <div className={styles.items}>San Salvador</div>
                    <div className={styles.items}>Argentina</div>
                    <div className={styles.items}>Chile</div>
                    <div className={styles.items}>Perú</div>
                    <div className={styles.items}>San Salvador</div>
                    <div className={styles.items}>Argentina</div>
                    <div className={styles.items}>Chile</div>
                    <div className={styles.items}>Perú</div>
                    <div className={styles.items}>Perú</div>
                    <div className={styles.items}>San Salvador</div>
                    <div className={styles.items}>Argentina</div>
                    <div className={styles.items}>Chile</div>
                    <div className={styles.items}>Perú</div>
                    <div className={styles.items}>Perú</div>
                    <div className={styles.items}>San Salvador</div>
                    <div className={styles.items}>Argentina</div>
                    <div className={styles.items}>Chile</div>
                    <div className={styles.items}>Perú</div>
                </div>
            </div>
            
        </section>
    )
}

export default BoxButtons
