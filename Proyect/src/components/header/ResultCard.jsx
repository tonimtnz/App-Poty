import { useNavigate } from "react-router-dom";

export function ResultCard({ result, handleClean }) {
  const navigate = useNavigate();
  const id = result.data.id;
  const name = result.data.displayName;
  const img = result.data.image.smallImageUrl || '.../assets/fav.png' ;

  function findUser() {
    navigate(`/users/${id}`);
    handleClean()
  }

  return (
    <li>
      <a onClick={findUser} className="userCard-button">
        <img src={img} />
        <h2> {name}</h2>
      </a>
    </li>
  );
}
