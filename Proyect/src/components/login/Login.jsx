import React, { useEffect, useState } from 'react'
import OlvidoContraseña from './OlvidoContraseña';
import { useGetUserId } from '../useGetUserId';
import { useGetUserData } from '../useGetUserData';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const {id, setId, user, setUser, GetId} = useGetUserId()
  const {username, userData, _error, loading, GetUserData} = useGetUserData()
  const [error,setError] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [clave, setClave] = useState("hola")
  const [coincide,setcoincide] = useState(false)
  
  function handleForm(event) {
    event.preventDefault()
    if (event.target.contraseña.value === clave) {
        console.log("contraseña correcta"); 
      try{
          GetId()
          setError(false)
       
      }catch(error){
        console.error(error)
      }
    }else{    
      setError(true)
    }
    
  }
  
  useEffect(() => {
    if(id){
      GetUserData(id)
      console.log(id)
      navigate ('/home')
  }
}, [id])
        

  function handleName(e){
    setUser(e.target.value)
  }

  function handleOlvido() {
    setToggle(!toggle)
  }

  function handleNuevaContraseña(event) {
    event.preventDefault()
    if (event.target.nuevaContraseña.value === event.target.repetirContraseña.value) {
      setClave(event.target.nuevaContraseña.value);
      setToggle(!toggle)
      setcoincide(!coincide)
    } else {
      setcoincide(!coincide)
    }
    console.log(event.target.nuevaContraseña.value);
  }
  
  return (
    <div>
      <div className='div-login'>
          <h1 className='login-h1'>LISTEN <br/>AND <span>SHARE</span></h1>
        <div className='div-form'>
            <h2 className='login-h'>Ingresa</h2>
          <form className='form-login' title='Login' onSubmit={handleForm}>
            <div>
              <label className='login-p' htmlFor='user-field'>Usuario o Correo</label>
              <input type="text" className='input-login' id='user-field' value={user} onChange={handleName}/>
            </div>
            <div>
              <label className='login-p' htmlFor='contraseña-field'>Contraseña {error && <span className='error-contraseña'>Contraseña incorrecta</span>}</label>
              <input type="password" className={!error ? 'input-login' : "input-login-error"} name='contraseña'  id='contraseña-field'/>
            </div>
            <p className='olvide-p' onClick={handleOlvido}>Olvide mi contraseña</p>
            <button className='input-button'>Ingresar</button>
          </form>
        </div>
      </div>
        { toggle ? <div className='div-form olvido'>
          <h2 className='login-h'>Restablecer Contraseña</h2>
          <form className='olvido-form'  onSubmit={handleNuevaContraseña} >
            <div>
              <label className='login-p' htmlFor='olvido-correo'>Correo</label>
              <input type="text" className='input-login' id='olvido-correo'/>
            </div>
            <div>
              <label className='login-p' htmlFor='olvido-Nueva'>Nueva contraseña</label>
              <input type="password" name='nuevaContraseña' className='input-login' id='olvido-Nueva'/>
            </div>
            <div>
              <label className='login-p' htmlFor='olvido-repetir'>Repite contraseña {coincide && <span className='error-contraseña'>No coinciden</span>}</label>
              <input type="password" name='repetirContraseña' className={!coincide ? 'input-login' : "input-login-error"} id='olvido-repetir'/>
            </div>
            <button className='input-button-confirmar'>Confirmar</button>
          </form>
          <div  onClick={handleOlvido}>
          <svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" className='div-olvido'></path> </g></svg>
          </div>
        </div>: null}
        {toggle ? <div className='div-cubre-todo' onClick={handleOlvido}></div> : null}
    </div>
  )
}

export default Login
