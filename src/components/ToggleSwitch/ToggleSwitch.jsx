import "./ToggleSwitch.css"

function ToggleSwitch({ checked, setChecked, children }) {

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <label className="Gtoggle-container">
            <span className="Glabel-text">{children}</span>
            <div className="Gtoggle-switch">
                <input type="checkbox" checked={checked} onChange={handleChange} />
                <span className="Gslider round"></span>
            </div>
        </label>
    )
}

export default ToggleSwitch
