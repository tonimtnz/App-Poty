import React, { useState } from 'react'

function OlvidoContraseña() {
  const [display,setDisplay] = useState(true)

  function handleDisplay() {
    setDisplay(!display)
  }

  return (
      <div className='div-olvido'>
 </div>
  )
}

export default OlvidoContraseña
