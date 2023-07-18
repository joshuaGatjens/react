import './Titulo.css'


function Titulo(props){

    function agente(tieneSombrero){

        if(tieneSombrero === true){
        return(
            <div>
            <h1>Es Perry a secas</h1>
            </div>
        )
        }else{
        return(<h2>un ornitorrinco (Solo es un ornitorrinco, no hace gran cosa)</h2>);
        }
    }




return (
    <div>
        <div>{agente(props.tieneSombrero) }</div>
        <div>{props.children}</div>
    </div>
)
}

export default Titulo;
