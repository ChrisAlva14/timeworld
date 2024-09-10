import "./ToggleSwitch.css"

function ToggleSwitch({ checked, setChecked, disabled=false, children }) {

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <label className="Gtoggle-container">
                <span className="Glabel-text">{children}</span>
                <div className="Gtoggle-switch">
                    <input type="checkbox" checked={checked} onChange={handleChange} disabled={disabled}/>
                    <span className="Gslider round"></span>
                </div>
            </label>
            {disabled&&
                <p className="toggleNote">* Caracteristica no disponible en dispositivos moviles</p>
            }
        </>
    )
}

export default ToggleSwitch
