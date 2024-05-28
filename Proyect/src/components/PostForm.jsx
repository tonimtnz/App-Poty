import React, { useState, useEffect } from 'react';

function PostForm() {
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
    if (comment.trim()) {
      const newComment = {
        post: comment,
        date: new Date()
      };
      const newComments = [...comments, newComment];
      newComments.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setComments(newComments);
      localStorage.setItem('comments', JSON.stringify(newComments));
      setComment('');
    }
  }

  return (
    <form onSubmit={handleForm}>
      <div className='form_container'>
        <div className='parte_superior_form'>
          <div className='fondo_imagen_form'>
            <svg width="27" height="36" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.8615 25.4801C26.7703 25.6382 26.6392 25.7695 26.4813 25.8607C26.3234 25.952 26.1442 26 25.9619 26H1.03745C0.855246 25.9998 0.676294 25.9516 0.518568 25.8603C0.360841 25.7689 0.229892 25.6377 0.138869 25.4796C0.0478459 25.3216 -4.6744e-05 25.1423 3.42345e-08 24.9599C4.68125e-05 24.7774 0.0480313 24.5982 0.139135 24.4402C2.11621 21.0178 5.16297 18.5637 8.7186 17.4004C6.95982 16.352 5.59336 14.7546 4.82907 12.8533C4.06477 10.9521 3.9449 8.85221 4.48785 6.87617C5.03081 4.90012 6.20658 3.15716 7.83459 1.91496C9.4626 0.672758 11.4528 0 13.4997 0C15.5465 0 17.5367 0.672758 19.1648 1.91496C20.7928 3.15716 21.9685 4.90012 22.5115 6.87617C23.0545 8.85221 22.9346 10.9521 22.1703 12.8533C21.406 14.7546 20.0395 16.352 18.2808 17.4004C21.8364 18.5637 24.8831 21.0178 26.8602 24.4402C26.9516 24.5982 26.9998 24.7774 27 24.96C27.0002 25.1425 26.9525 25.3219 26.8615 25.4801Z" fill="#393939" />
            </svg>
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

