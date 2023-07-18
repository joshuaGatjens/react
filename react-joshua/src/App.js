import './App.css';
import ImagenOrnitorrinco from './components/ImagenOrnitorrinco/ImagenOrnitorrinco';
import Titulo from './components/Titulo/Titulo';
import Boton from './components/BotonJoshua/BotonJoshua';
import { useState } from 'react';
import ElementoLista from './components/ElementoLista/ElementoLista';


function App() {

  const inventos = [
    "Magneto Gigante",
    "Destructinador",
    "Edificio Robot Gigante",
    "Desinfla-inador",
    "Acelerador de edad y tiempo (Age Accelerator-inator)",
    "Hipnotizador (The Slave-inator)",
    "Drill-inator",
    "Plans for magnet",
    "Desinteti-vaporizador",
    "Copy and Paste-inator",
    "Termite Controlling Helmet",
    "Melt-inator 6-5000-inator",
  ];

const [tieneSombrero, setTieneSombrero]=useState(false)
const [textoBoton, setTextoBoton] =useState("Poner Sombrero")

function ponerSombrero(){
  setTieneSombrero( !tieneSombrero );

if(tieneSombrero === true){

  setTextoBoton("Poner Sombrero")
  } else{
  setTextoBoton("Quitar sombrero")
  }
}  

  return (
    <div className="App">
      <header className="App-header">
        
      <Titulo tieneSombrero={tieneSombrero}>

      <ImagenOrnitorrinco tieneSombrero ={tieneSombrero}></ImagenOrnitorrinco>

      </Titulo>

<Boton onClick={ponerSombrero} BotonPractica={textoBoton}></Boton>





<ul>




    { inventos.map( (inventItem, indice)=>(

      <ElementoLista key={indice} texto={inventItem}></ElementoLista>

    ) ) }

</ul>


      </header>
    </div>
  );
  }

export default App;
