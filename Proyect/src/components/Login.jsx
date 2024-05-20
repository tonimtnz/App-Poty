import React, { useState } from 'react'
import OlvidoContraseña from './OlvidoContraseña';

function Login() {
  const [error,setError] = useState(false)
  const [toggle, setToggle] = useState(false)
  
  function handleForm(event) {
    event.preventDefault()
    if (event.target.contraseña.value === "hola") {
      console.log("contraseña correcta");
    } else {
      setError(true)
    }
  }

  function handleOlvido(params) {
    setToggle(!toggle)
  }

  return (
    <div>
      <div className='div-login'>
          <h1 className='login-h1'>LISTEN <br/>AND <span>SHARE</span></h1>
        <form className='form-login' title='Login' onSubmit={handleForm}>
          <h2 className='login-h'>Registrate</h2>
          <p className='login-p'>Usuario o Correo</p>
          <input type="text" className='input-login'/>
          <p className='login-p'>Contraseña {error && <span className='error-contraseña'>Contraseña incorrecta</span>}</p>
          <input type="password" className='input-login' name='contraseña'/>
          <p className='olvide-p' onClick={handleOlvido}>Olvide mi contraseña</p>
          <button className='input-button'>Login</button>
        </form>
      </div>
      {  toggle && <OlvidoContraseña />}
    </div>
  )
}

export default Login
