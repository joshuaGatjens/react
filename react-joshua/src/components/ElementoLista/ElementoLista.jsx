import "./ElementoLista.css";


function ElementoLista(props){
    return <li className="li-lista"key={props.key}>{props.texto}</li>
    
}

export default ElementoLista;