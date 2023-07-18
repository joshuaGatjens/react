import React from "react";
import "./BotonJoshua.css";

function Boton(props){
    return (
    <div>
        <button onClick={props.onClick} 
        className="botonSombrero">{props.BotonPractica}
        </button>
    </div>
    )
}

export default Boton 