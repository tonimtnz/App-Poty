// import { HeaderUserSearch } from "../components/header/HeaderUserSearch.jsx";
import HomeBoton from "../components/HomeBoton.jsx";
import { HomeLogo } from "../components/HomeLogo.jsx";
import PostForm from "../components/PostForm.jsx";
import PostList from "../components/PostList.jsx";
import RecentRelease from "../components/RecentRelease.jsx";

export function Home() {
  return (
        <div>
            <div className="padding-especial">
                <div className="div-home-escucha">
                    <div>
                        <h1>Escucha y</h1>
                        <h1>comparte</h1>
                    </div>
                    <HomeLogo />
                </div>
            </div>
                <div className="home-container">
            
                  {/* <HeaderUserSearch/> */}
                  {/* <div className="logo-container">
              <HomeLogo/>
            </div> */}
                  <div className="home-post-container">
            <PostForm />
            <PostList />
                  </div>
                  <div className="home-buttons-container">
            <HomeBoton />
                  <RecentRelease />
                  </div>
                </div>
        </div>
  );
}


export default Home
