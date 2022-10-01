import React from 'react';


// Componente Contenedor: Tienen estados, llaman APIs externas, establecen lógica y les pasan los datos a los conponentes de presentaciónpara que se encarguen de mostrarlos
function Contenedor({ children }) {

  console.log(children.length);

  let arrayChildren = [];

  if(!children.length) {
    arrayChildren = [children]
  } else{
    arrayChildren = children
  }

  const [component1, component2,component3] = arrayChildren;

  return (
    <div>
      <h2>Categorías</h2>
      <ul style={{listStyle: 'none'}}>
        <li style={{color: 'darkblue'}}>Tonos Frios</li>
        <li style={{color: 'orange'}}>Tonos Cálidos</li>
        <li style={{color: 'gray'}}>Tonos Grises</li>
      </ul>

      { children }  

      { component1 }
      { component2 }
      { component3 }

    </div>
  );
}

export default Contenedor;