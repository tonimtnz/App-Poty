// import { HeaderUserSearch } from "../components/header/HeaderUserSearch.jsx";
import PostForm from "../components/PostForm.jsx";
import HomeBoton from "../components/HomeBoton.jsx";
import PostList from "../components/PostList.jsx";
import SliderCarousel from "../components/SliderCarousel.jsx";
import '../styles/home.css'
import '../styles/homeDerecha.css'
import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext.jsx";
import { useNavigate, useNavigationType } from "react-router-dom";


export function Home() {  
  
  const navigate = useNavigate()

  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    const logedData = localStorage.getItem("LogedUser")
    console.log(logedData)
    if(logedData && !user.name){
      setUser(JSON.parse(logedData))
    }else if(!user.name){
      navigate("/")
    }
  }, [])

  return (
    <div className="home-container">
      <SliderCarousel/>
      <div className="home-page-container">
       <div className="home-post-container">
        <PostForm />
        <PostList />
        </div>
        <div className="home-buttons-container">   
          <HomeBoton/>  
        </div>
      </div>

    </div>
  );
}
