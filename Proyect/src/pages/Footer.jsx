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
            <a href="#" target="_blank">
              Richard Suárez
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Pedro Grandini
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Luis Grandini
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Antonio Martínez
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Jairo Romero
            </a>
          </li>
        </ul>
        <hr></hr>
        <h3>A Develhope Proyect that rules 🥵</h3>
      </div>
    </footer>
  );
}
