import { HomeLogo } from '../components/HomeLogo.jsx';
import  PostForm  from '../components/PostForm.jsx';
import  PostList  from '../components/PostList.jsx';

export function Home(){

    return(
      <div className="home-container">
        {/* <div className="logo-container">
          <HomeLogo/>
        </div> */}
        <div className="home-post-container">
        <PostForm />
        <PostList />
        </div>
        <div className="home-buttons-container">
          
        </div>
      </div>
    )
}