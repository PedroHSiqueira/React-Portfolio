import Linkedin from "../assets/images/linkedin.svg";
import Github from "../assets/images/github.svg";
import "../assets/css/Navbar.css";

export function Navbar() {
  return (
    <div className="sticky-header">
      <header className="header">
        <a href="#">
          <span className="cor">P.</span>Siqueira
        </a>
        <nav>
          <a href="#about">Sobre mim</a>
          <a href="#tecnologia">tecnologias</a>
          <a href="#projetos">Projetos</a>
          <div className="social-medias">
            <a href="https://github.com/PedroHSiqueira" target="_blank">
              <img src={Linkedin} />
            </a>
            <a href="https://www.linkedin.com/in/phasiqueira/" target="_blank">
              <img src={Github} />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
