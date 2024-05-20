import React from "react";
import Image from "./assets/imagen.jpg";
import { useState } from "react";
import { useEffect } from "react";

function PostList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
      setComments(savedComments);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  function handleMenu(index) {
    const hiddenMenu = document.getElementById(`hiddenmenu-${index}`);
    // const dotIcon = document.getElementById(`doticon-${index}`);
    hiddenMenu.style.display =
      hiddenMenu.style.display === "flex" ? "none" : "flex";
    // dotIcon.style.display =
    //   hiddenMenu.style.display === "flex" ? "none" : "block";
  }

  function handleEdit(index) {
    const newComment = prompt("Edit your comment:", comments[index]);
    if (newComment) {
      const updatedComments = [...comments];
      updatedComments[index] = newComment;
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setComments(updatedComments);
    }
  }

  function handleDelete(index) {
    const updatedComments = comments.filter((_, i) => i !== index);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setComments(updatedComments);
  }

  return (
    <div className="comments_container">
      {comments.map((comment, index) => {
        return (
          <div className="list_container" key={index}>
            <div className="comentario">
              <div className={`dot_menu-${index}`} onClick={() => handleMenu(index)}>
                <svg
                  id={`doticon-${index}`}
                  width="18"
                  height="4"
                  viewBox="0 0 18 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 2C1 2.26522 1.10536 2.51957 1.29289 2.70711C1.48043 2.89464 1.73478 3 2 3C2.26522 3 2.51957 2.89464 2.70711 2.70711C2.89464 2.51957 3 2.26522 3 2C3 1.73478 2.89464 1.48043 2.70711 1.29289C2.51957 1.10536 2.26522 1 2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2ZM8 2C8 2.26522 8.10536 2.51957 8.29289 2.70711C8.48043 2.89464 8.73478 3 9 3C9.26522 3 9.51957 2.89464 9.70711 2.70711C9.89464 2.51957 10 2.26522 10 2C10 1.73478 9.89464 1.48043 9.70711 1.29289C9.51957 1.10536 9.26522 1 9 1C8.73478 1 8.48043 1.10536 8.29289 1.29289C8.10536 1.48043 8 1.73478 8 2ZM15 2C15 2.26522 15.1054 2.51957 15.2929 2.70711C15.4804 2.89464 15.7348 3 16 3C16.2652 3 16.5196 2.89464 16.7071 2.70711C16.8946 2.51957 17 2.26522 17 2C17 1.73478 16.8946 1.48043 16.7071 1.29289C16.5196 1.10536 16.2652 1 16 1C15.7348 1 15.4804 1.10536 15.2929 1.29289C15.1054 1.48043 15 1.73478 15 2Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div id={`hiddenmenu-${index}`} className="hiddenmenu">
                  <div className="editarmenu" onClick={() => handleEdit(index)}>
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4167 13.4167H11.5001C10.4834 13.4167 9.50839 13.8206 8.78951 14.5395C8.07062 15.2584 7.66675 16.2334 7.66675 17.2501V34.5001C7.66675 35.5167 8.07062 36.4918 8.78951 37.2107C9.50839 37.9295 10.4834 38.3334 11.5001 38.3334H28.7501C29.7667 38.3334 30.7418 37.9295 31.4607 37.2107C32.1795 36.4918 32.5834 35.5167 32.5834 34.5001V32.5834"
                        stroke="#363636"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M30.6667 9.58329L36.4167 15.3333M39.0712 12.6212C39.8261 11.8663 40.2502 10.8425 40.2502 9.77496C40.2502 8.70741 39.8261 7.68358 39.0712 6.92871C38.3164 6.17384 37.2925 5.74976 36.225 5.74976C35.1574 5.74976 34.1336 6.17384 33.3788 6.92871L17.25 23V28.75H23L39.0712 12.6212Z"
                        stroke="#363636"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="textocomment">Editar</p>
                  </div>
                  <div className="eliminarmenu" onClick={() => handleDelete(index)}>
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5973 38.3333C13.7386 38.3333 13.0077 38.0317 12.4046 37.4286C11.8015 36.8255 11.4999 36.0952 11.4999 35.2378V11.4999H9.58325V9.58326H17.2499V8.10742H28.7499V9.58326H36.4166V11.4999H34.4999V35.2378C34.4999 36.1195 34.2048 36.8561 33.6144 37.4478C33.0241 38.0394 32.2868 38.3345 31.4026 38.3333H14.5973ZM32.5833 11.4999H13.4166V35.2378C13.4166 35.5816 13.5271 35.8639 13.7482 36.085C13.9692 36.3061 14.2523 36.4166 14.5973 36.4166H31.4045C31.6984 36.4166 31.9686 36.2939 32.2153 36.0486C32.4619 35.8033 32.5845 35.5324 32.5833 35.2359V11.4999ZM18.7986 32.5833H20.7153V15.3333H18.7986V32.5833ZM25.2846 32.5833H27.2013V15.3333H25.2846V32.5833Z"
                        fill="#363636"
                      />
                    </svg>
                    <p className="textocomment">Eliminar</p>
                  </div>
                </div>
              </div>
              <div className="name_image">
                <div className="fondo_imagen">
                  <svg
                    width="27"
                    height="36"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.8615 25.4801C26.7703 25.6382 26.6392 25.7695 26.4813 25.8607C26.3234 25.952 26.1442 26 25.9619 26H1.03745C0.855246 25.9998 0.676294 25.9516 0.518568 25.8603C0.360841 25.7689 0.229892 25.6377 0.138869 25.4796C0.0478459 25.3216 -4.6744e-05 25.1423 3.42345e-08 24.9599C4.68125e-05 24.7774 0.0480313 24.5982 0.139135 24.4402C2.11621 21.0178 5.16297 18.5637 8.7186 17.4004C6.95982 16.352 5.59336 14.7546 4.82907 12.8533C4.06477 10.9521 3.9449 8.85221 4.48785 6.87617C5.03081 4.90012 6.20658 3.15716 7.83459 1.91496C9.4626 0.672758 11.4528 0 13.4997 0C15.5465 0 17.5367 0.672758 19.1648 1.91496C20.7928 3.15716 21.9685 4.90012 22.5115 6.87617C23.0545 8.85221 22.9346 10.9521 22.1703 12.8533C21.406 14.7546 20.0395 16.352 18.2808 17.4004C21.8364 18.5637 24.8831 21.0178 26.8602 24.4402C26.9516 24.5982 26.9998 24.7774 27 24.96C27.0002 25.1425 26.9525 25.3219 26.8615 25.4801Z"
                      fill="#393939"
                    />
                  </svg>
                </div>
                <h4>Username</h4>
              </div>
              <div className="comment_post">
                <p className="comentario">{comment}</p>
              </div>
              <div>
                <img
                  className="imagen"
                  src={Image}
                  alt=""
                  width={500}
                  height={200}
                />
              </div>
              <div className="like_replies">
                <div className="like">
                  <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 24L11.115 22.2736C4.42 16.1657 0 12.1243 0 7.19346C0 3.15204 3.146 0 7.15 0C9.412 0 11.583 1.0594 13 2.72044C14.417 1.0594 16.588 0 18.85 0C22.854 0 26 3.15204 26 7.19346C26 12.1243 21.58 16.1657 14.885 22.2736L13 24Z"
                      fill="#F8F8F8"
                    />
                  </svg>
                  <p className="poption">Me Gusta</p>
                </div>
                <div className="replies">
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2 6.76653e-09C19.1948 -6.18827e-05 20.152 0.424429 20.8757 1.18662C21.5995 1.94881 22.0351 2.99108 22.0935 4.10018L22.1 4.35572V7.25953C23.0948 7.25947 24.052 7.68396 24.7757 8.44615C25.4995 9.20834 25.9351 10.2506 25.9935 11.3597L26 11.6152V17.4229C26.0001 18.5339 25.62 19.6029 24.9375 20.4113C24.2551 21.2196 23.3219 21.7061 22.3288 21.7713L22.1 21.7786V23.1811C22.1 24.6621 20.6141 25.4955 19.5598 24.6809L19.435 24.5764L16.4294 21.7786H11.7C10.7417 21.7801 9.81662 21.3861 9.1026 20.6722L8.9206 20.4777L6.5 22.5045C5.4717 23.3655 4.0222 22.6134 3.9078 21.2283L3.9 21.0526V18.8748C2.90523 18.8748 1.94803 18.4503 1.22426 17.6882C0.500491 16.926 0.0648602 15.8837 0.00650015 14.7746L6.05858e-09 14.5191V4.35572C-5.54082e-05 3.2447 0.380023 2.17566 1.06247 1.36732C1.74491 0.558974 2.67814 0.0724392 3.6712 0.0072597L3.9 6.76653e-09H18.2ZM22.1 10.1633H11.7C11.3552 10.1633 11.0246 10.3163 10.7808 10.5886C10.537 10.8609 10.4 11.2302 10.4 11.6152V17.4229C10.4 17.8079 10.537 18.1772 10.7808 18.4495C11.0246 18.7218 11.3552 18.8748 11.7 18.8748H16.4294C17.0375 18.8751 17.6263 19.1135 18.0934 19.5485L19.5078 20.8639C19.5501 20.3211 19.773 19.8157 20.1325 19.4475C20.4921 19.0792 20.9622 18.8749 21.45 18.8748H22.1C22.4448 18.8748 22.7754 18.7218 23.0192 18.4495C23.263 18.1772 23.4 17.8079 23.4 17.4229V11.6152C23.4 11.2302 23.263 10.8609 23.0192 10.5886C22.7754 10.3163 22.4448 10.1633 22.1 10.1633ZM18.2 2.90381H3.9C3.55522 2.90381 3.22456 3.05678 2.98076 3.32906C2.73696 3.60135 2.6 3.97065 2.6 4.35572V14.5191C2.6 14.9041 2.73696 15.2734 2.98076 15.5457C3.22456 15.818 3.55522 15.971 3.9 15.971H4.55C5.06717 15.971 5.56316 16.2004 5.92886 16.6088C6.29455 17.0173 6.5 17.5712 6.5 18.1488V18.8748L7.813 17.7757C7.80445 17.6583 7.80012 17.5406 7.8 17.4229V11.6152C7.8 10.46 8.21089 9.35214 8.94228 8.53529C9.67367 7.71843 10.6657 7.25953 11.7 7.25953H19.5V4.35572C19.5 3.97065 19.363 3.60135 19.1192 3.32906C18.8754 3.05678 18.5448 2.90381 18.2 2.90381Z"
                      fill="#F8F8F8"
                    />
                  </svg>
                  <p className="poption">Comentar</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
