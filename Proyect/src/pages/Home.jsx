import React from 'react'
import HomeIzquierda from '../components/HomeIzquierda'
import HomeBoton from '../components/HomeBoton'
import Logo from '../components/Logo'

function Home() {
  return (
    <div className='home-general'>
        <div className='div-home-escucha'>
            <div>
                <h1>Escucha y</h1>
                <h1>Comparte</h1>
            </div>
            <Logo />
        </div>
        <div className='div-home-ambos-lados'>
            <HomeIzquierda />
            <HomeBoton />
        </div>
    </div>
  )
}

export default Home
