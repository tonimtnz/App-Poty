import React from 'react'
import Login from '../components/login/Login'
import '../styles/login.css'
import { HomeLogo } from '../components/HomeLogo'


function PageLogin() {
  return (
    <div className='bg-image'>
      <div className='div-logo-login'>
        <HomeLogo />
      </div>

      <Login />
    </div>
  )
}

export default PageLogin
