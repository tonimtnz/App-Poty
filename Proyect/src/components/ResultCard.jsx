import { useNavigate } from "react-router-dom";

export function ResultCard({ result }) {
  const navigate = useNavigate();
  const id = result.data.id;
  const name = result.data.displayName;
  const img = result.data.image.smallImageUrl;

  function findUser() {
    navigate(`/users/${id}`);
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
