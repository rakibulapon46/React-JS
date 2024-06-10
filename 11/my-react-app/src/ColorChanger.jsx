import { useState } from "react";
import "./Color.css";


function ColorChanger() {
    const [color, setColor] = useState("#ffffff");
    const handleColorChange = (event) => {
        setColor(event.target.value)
    }
  return (
    <div className="color_container">
    <h1 className="color_title">Color Picker</h1>
    <div className="color_display" style={{backgroundColor: color}}>
        <p>Selected Color : {color}</p>
    </div>
    <label>Select a Color: </label>
    <input type="color" value={color} onChange={handleColorChange} />
    </div>
  )
}

export default ColorChanger