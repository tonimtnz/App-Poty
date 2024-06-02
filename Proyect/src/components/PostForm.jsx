import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';

function PostForm() {

  const {user, setUser} = useContext(UserContext)
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([{
    post:'',
    date: new Date()
  }]);

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const intervalId = setInterval(() => {
      const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
      setComments(savedComments);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleForm(event) {
    event.preventDefault();
    const postImage = user.image_url;
    const postName = user.name;
    if (comment.trim()) {
      const newComment = {
        post: comment,
        date: new Date(),
        img: postImage,
        name: postName
      };
      const newComments = [...comments, newComment];
      newComments.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      console.log(comments);
      setComments(newComments);
      localStorage.setItem('comments', JSON.stringify(newComments));
      setComment('');
    }
  }

  return (
    <form className="home-form"onSubmit={handleForm}>
      <div className='form_container'>
        <div className='parte_superior_form'>
          <div className='fondo_imagen_form'>
            <img src={user.image_url} />
          </div>
          <input className='form_input' value={comment} onChange={handleChange} type="text" placeholder='¿Cual es tu recomendacion de hoy?' />
        </div>
        <div className='parte_inferior'>
          <button type='submit' className='button_post'>
            <svg
              width="12"
              height="18"
              viewBox="0 0 16 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0547 12.5291C15.0553 12.8478 14.9957 13.1613 14.8818 13.4391C14.7679 13.7168 14.6035 13.9494 14.4046 14.1142L2.08029 24.4557C1.8725 24.6303 1.63452 24.7255 1.39092 24.7317C1.14731 24.7379 0.906922 24.6548 0.69457 24.4909C0.48424 24.3296 0.309029 24.0944 0.186955 23.8094C0.0648819 23.5244 0.00035144 23.2 0 22.8694V2.18879C0.00035144 1.85825 0.0648819 1.53381 0.186955 1.24882C0.309029 0.963836 0.48424 0.728593 0.69457 0.567285C0.906922 0.403431 1.14731 0.320306 1.39092 0.326494C1.63452 0.332682 1.8725 0.427958 2.08029 0.602484L14.4046 10.944C14.6035 11.1088 14.7679 11.3414 14.8818 11.6192C14.9957 11.8969 15.0553 12.2104 15.0547 12.5291Z"
                fill="#f8f8f8"
              />
            </svg>
            Post
          </button>
        </div>
      </div>
    </form>
  )
}

export default PostForm;

