import React from 'react';
import '../hojas-de-estilo/Presentacion.css';

// Componente de Presentación: Orientados al aspecto visual (Recibe los datos, los Inserta y luego los Muestra)
function Presentacion(props) {
  console.log(props)
  const src = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`

  return (
    <div>
      <picture className='testimonio' style={{color: props.color}}>
        {props.children}
        <img className='imagen' style={{width: 100}} src={src} alt='Testimonio' />
        {props.texto}
        {props.component}
        {props.boton}
        {<li style={{listStyle: 'none'}}><a href='#' >{props.lista}</a> </li>}
        {<input type='text' placeholder={props.input}/>}
        

      </picture>
      
    </div>
  );
}

export default Presentacion;