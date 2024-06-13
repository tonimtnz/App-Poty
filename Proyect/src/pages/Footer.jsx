import "../styles/footer.css";
import { LogoHeader } from "../components/header/LogoHeader";

export function Footer() {
  return (
    <footer>
      <div className="footer-mc">
        <LogoHeader />
        <p>
          La información y el uso de la API de Spotify en esta aplicación están
          destinados únicamente para propósitos académicos y de aprendizaje.
        </p>
        <h4>Desarrollado por:</h4>
        <ul className="members-list">
          <li>
            <a href="https://www.linkedin.com/in/richards24/" target="_blank" style={{ fontSize: "1rem" }}>
              Richard Suárez
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pedro-manuel-grandini-b1a171302/" target="_blank" style={{ fontSize: "1rem" }}>
              Pedro Grandini
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/luis-grandini-a1681b293/" target="_blank" style={{ fontSize: "1rem" }}>
              Luis Grandini
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/antonio-martinez-developer/" target="_blank" style={{ fontSize: "1rem" }}>
              Antonio Martínez
            </a>
          </li>
          <li>
            <a href="#" target="_blank" style={{ fontSize: "1rem" }}>
              Jairo Romero
            </a>
          </li>
        </ul>
        <hr></hr>
        <h3 style={{ fontSize: "1rem" }}>A Develhope Proyect that rules 🥵</h3>
      </div>
    </footer>
  );
}
