import Controle from "../assets/images/projects/controle.png";
import CarSale from "../assets/images/projects/CarSale.png";
import Pokemon from "../assets/images/projects/pokemon.png";
import "../assets/css/Projects.css";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();
  return (
    <div className="projetos">
      <h2>{t("projects")}</h2>
      <div>
        <article className="projetos-pessoais">
          <a href="https://pedrohsiqueira.github.io/Help-Desk/" target="_blank">
            <img src={Controle} alt="controle de chamados" id="projetos" />
          </a>
          <div>
            <h4>Call Sync 📊</h4>
            <p>{t("call_sync")}</p>
          </div>
        </article>
      </div>

      <div>
        <article className="projetos-pessoais">
        <div>
            <h4>MileStone Motors 🚗</h4>
            <p>{t("milestone_motors")}</p>
          </div>
          <a href="https://car-sale-react-js.vercel.app/" target="_blank">
            <img src={CarSale} id="projetos" />
          </a>
        </article>
      </div>

      <div>
        <article className="projetos-pessoais">
          <a
            href="https://github.com/PedroHSiqueira/Pokemon-Terminal"
            target="_blank"
          >
            <img src={Pokemon} id="projetos" />
          </a>
          <div>
            <h4>Pokemon Terminal 🏃‍♂️</h4>
            <p>{t("pokemon")}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
