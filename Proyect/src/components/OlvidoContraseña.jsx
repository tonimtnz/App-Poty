import React from 'react'

function OlvidoContraseña() {
  return (
    <div className='div-olvido'>
        <form className='olvido-form'>
          <p>Correo</p>
          <input type="text" />
          <p>Nueva contraseña</p>
          <input type="text" />
          <p>Repite la nueva contraseña</p>
          <input type="text" />
        </form>
    </div>
  )
}

export default OlvidoContraseña
