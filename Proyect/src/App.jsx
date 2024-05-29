import { FetchUserProfileData } from "./components/FetchUserProfileData";
import { Routes, Route } from "react-router-dom";
// import { UserProfile } from "./pages/UserProfile";
// import { useEffect } from "react";
import { Footer } from "./pages/Footer";
import { Header } from "./pages/Header";
// import { useGetUserData } from "./components/useGetUserData";

function App() {
  // const { GetUserData } = useGetUserData();

  // useEffect(() => {
  //   GetUserData("llues_mtnz");
  // }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/users/:userId" element={<FetchUserProfileData />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
