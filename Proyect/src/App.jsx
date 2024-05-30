import { FetchUserProfileData } from "./components/FetchUserProfileData";
import { Routes, Route, useLocation } from "react-router-dom";
// import { UserProfile } from "./pages/UserProfile";
import { Footer } from "./pages/Footer";
import { Header } from "./pages/Header";

import Login from "./components/login/Login";
import PageLogin from "./pages/PageLogin";



function App() {

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  
  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/login" element ={<PageLogin/>}/>
        <Route path="/users/:userId" element={<FetchUserProfileData />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
