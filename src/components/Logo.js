import React from 'react';
import '../hojas-de-estilo/Logo.css';

function Logo(props) {
  
  return (
    <div className='contenedor'>

      <img className='logo' src={require('../img/logotipo.png')} alt='Logotipo' />
      
    </div>
  );
}

export default Logo;