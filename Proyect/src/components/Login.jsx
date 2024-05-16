import React from 'react'

function Login() {
  function handleForm(event) {
    event.preventDefault()
    
  }

  return (
    <div className='div-login'>
        <h1 className='login-h1'>LISTEN <br/>AND <span>SHARE</span></h1>
      <form className='form-login' title='Login' onSubmit={handleForm}>
        <h2 className='login-h'>Registrate</h2>
        <p className='login-p'>Usuario o Correo</p>
        <input type="text" className='input-login'/>
        <p className='login-p'>Contraseña</p>
        <input type="password" className='input-login'/>
        <button className='input-button'>Login</button>
      </form>
    </div>
  )
}

export default Login
