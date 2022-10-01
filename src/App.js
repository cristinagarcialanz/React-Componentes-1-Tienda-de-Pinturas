import Logo from './components/Logo.js';
import Testimonio from './components/Presentacion.js';
import Contenedor from './components/Contenedor.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className='header'>
        <Logo />
        <h1>Tienda de Pinturas</h1>
      </header>

      <div className='body'>
        <Testimonio        
        color={'red'}
        id={2}
        texto= {<h3>Nombre: Andres</h3>}
        component={<p>Edad: 27 años</p>} 
        boton= {<button>Click me</button>}
        lista= 'Link'
        input= 'Deja un Mensaje'
        children={<h1 style={{textAlign: 'center', color: 'white'}}>Tarjeta 1</h1>} />        

        <Testimonio        
        color= 'blue'
        id='3'
        texto= {<h3>Nombre: Pedro</h3>}
        component={<p>Edad: 30 años</p>}
        boton= {<button>Ver más</button>}
        lista= 'enlace'
        input= 'Nombre y Apellido'
        children={<h1 style={{textAlign: 'center', color: 'gray'}}>Tarjeta 2</h1>} />

        <Testimonio        
        color= 'green'
        id='4'
        texto= {<h3>Nombre: Juan</h3>}
        component={<p>Edad: 32 años</p>}
        boton= {<button>Enviar</button>}
        lista= 'Link a...'
        input= 'buscar'
        children={<h1 style={{textAlign: 'center', color: 'black'}}>Tarjeta 3</h1>} />
      </div>

      <div>
        <Contenedor >
          <h1 style={{display: 'flex'}}>Pinturas de Aceite</h1>
          <p>Para superficies exteriores, de alto tráfico</p>
          <button>Botón</button>

          <h1 style={{display: 'flex'}}>Pinturas de Agua</h1>
          <p style={{display: 'flex'}}>Para superficies interiores, de bajo tráfico</p>
          <button style={{display: 'flex'}}>Clic on me</button>

        </Contenedor>
      </div>

    </div>
  );
}

export default App;
