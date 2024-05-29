import { FetchUserProfileData } from "./components/FetchUserProfileData";
import { Routes, Route } from "react-router-dom";
// import { UserProfile } from "./pages/UserProfile";
import { Footer } from "./pages/Footer";
import { Header } from "./pages/Header";

import Login from "./components/Login";
import PageLogin from "./pages/PageLogin";



function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element ={<PageLogin/>}/>
        <Route path="/users/:userId" element={<FetchUserProfileData />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
