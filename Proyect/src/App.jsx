import { useEffect } from "react";
import { Footer } from "./pages/Footer";
import { Header } from "./pages/Header";
import { useGetUserData } from "./components/useGetUserData";

function App() {

  const {username, userData, error, loading, GetUserData} = useGetUserData()

  useEffect(() => {
    GetUserData("llues_mtnz")
  }, [])
  return (
    <div>
      <Header/>
      <div style={{height:"600px"}}>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
