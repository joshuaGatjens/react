import"./ImagenOrnitorrinco.css";

function ImagenOrnitorrinco(props){

    function imagen(tieneSombrero){
        let imagen= ""
        if(tieneSombrero === true){
          imagen="/perry-a-secas.png"
        }else{
          imagen="/perry-sin-sombrero.jpg"
        }
            return (<img className="img-perry" src={imagen} alt="ornitorrinco"/>)
        }
        return <div>{imagen(props.tieneSombrero)}</div>
}

export default ImagenOrnitorrinco;