import './App.css'
import { useState } from 'react';

function App() {

  // Creamos un estado para cada input del formulario
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [direccion, setDireccion] = useState("");

  // Creamos un manejador de eventos para cada uno de los inputs
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeDireccion = (e) => setDireccion(e.target.value);

  // Creamos el manjeador para el evento onSubmit
  const onSubmitForm = (e) => {
    // Evitamos que se recargue la pagina
    // previniendo el comportamiento por
    // defecto
    e.preventDefault();

    // Por ahora solo mostramos el nombre del usuario
    alert(`Bienvenido: ${userName}, De: ${direccion}`);
  };

  return (
    <>

      <div className="App">
        <h3>Iniciar Sesión</h3>
        {/* Pasamos nuestro manejador al evento onSubmit */}
        <form onSubmit={onSubmitForm}>

          {/*
Creamos dos inputs controlados
pasando el estado como value y el manejador
al evento onChange
*/}

          <nav>
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={userName}
              onChange={onChangeUserName}
            />
          </nav>

          <br />

          <nav>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </nav>

          <br />

          <nav>
            <input
              type="direccion"
              placeholder="Direccion"
              value={direccion}
              onChange={onChangeDireccion}
            />
          </nav>

          {/*
Mediante el type nos aseguramos que
se dispare el evento onSubmit al hacer click
en el botón
*/}
          <br />
          <button type="submit">Enviar</button>

        </form>
      </div>
      );
    </>
  )
}


export default App
