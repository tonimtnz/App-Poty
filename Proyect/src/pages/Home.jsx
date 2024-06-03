// import { HeaderUserSearch } from "../components/header/HeaderUserSearch.jsx";
import { Link } from "react-router-dom";
import PostForm from "../components/PostForm.jsx";
import PostList from "../components/PostList.jsx";
import SliderCarousel from "../components/SliderCarousel.jsx";
import '../styles/home.css'


export function Home() {
  return (
    <div className="home-container">
      <SliderCarousel/>
      <div className="home-page-container">
       <div className="home-post-container">
        <PostForm />
        <PostList />
        </div>
        <div className="home-buttons-container">
          <Link></Link>
       </div>
      </div>

    </div>
  );
}
