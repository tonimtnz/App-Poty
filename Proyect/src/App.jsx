import HomeBoton from "./components/HomeBoton";
import HomeIzquierda from "./components/HomeIzquierda";
import { FetchUserProfileData } from "./components/FetchUserProfileData";
import { Routes, Route, useLocation } from "react-router-dom";
// import { UserProfile } from "./pages/UserProfile";
import { Footer } from "./pages/Footer";
import { Header } from "./pages/Header";
import PageLogin from "./pages/PageLogin";
import { Home } from "./pages/Home";
import { UserContext } from "./context/userContext";
import { useContext } from "react";

function App() {
  const {user, setUser} = useContext(UserContext)
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  
  return (

    <>
      {!isLoginPage && <Header />}
        {user.name === undefined ? 
        <Routes>
          <Route path="/" element={<PageLogin/>}/> 
        </Routes>
        : 
        <Routes>
          <Route path="/home" element={<Home/>}/>
          {/* <Route path="/login" element ={<PageLogin/>}/> */}
          <Route path="/users/:userId" element={<FetchUserProfileData />} />
        </Routes> 
        }
        
      {!isLoginPage && <Footer />}
    </>

  );
}

export default App;
