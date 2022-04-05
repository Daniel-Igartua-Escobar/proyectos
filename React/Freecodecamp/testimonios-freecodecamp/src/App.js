import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre='Calavera'
          pais='Suecia'
          imagen='Calavera'
          cargo='Ingeniero de software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam mollitia quis nostrum ad, impedit sint labore itaque obcaecati esse omnis incidunt delectus expedita dolore ipsum error velit molestias. Odit.' />
        <Testimonio
          nombre='Dedpool'
          pais='EE.UU'
          imagen='Dedpool'
          cargo='Ingeniero de software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam mollitia quis nostrum ad, impedit sint labore itaque obcaecati esse omnis incidunt delectus expedita dolore ipsum error velit molestias. Odit.' />
        <Testimonio
          nombre='Desconocido'
          pais='China'
          imagen='Desconocido'
          cargo='Ingeniero de software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam mollitia quis nostrum ad, impedit sint labore itaque obcaecati esse omnis incidunt delectus expedita dolore ipsum error velit molestias. Odit.' />
        <Testimonio
          nombre='Iron Man'
          pais='Japón'
          imagen='IronMan'
          cargo='Ingeniero de software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam mollitia quis nostrum ad, impedit sint labore itaque obcaecati esse omnis incidunt delectus expedita dolore ipsum error velit molestias. Odit.' />
        <Testimonio
          nombre='Spiderman'
          pais='España'
          imagen='Spiderman'
          cargo='Ingeniero de software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam mollitia quis nostrum ad, impedit sint labore itaque obcaecati esse omnis incidunt delectus expedita dolore ipsum error velit molestias. Odit.' />
      </div>
    </div>
  );
}

export default App;
