import Controle from "../assets/images/projects/controle.png";
import CarSale from "../assets/images/projects/CarSale.png";
import "../assets/css/Projects.css";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();
  return (
    <div className="projetos">
      <h2>{t('projects')}</h2>
      <div>
        <article className="projetos-pessoais">
          <a href="https://pedrohsiqueira.github.io/Help-Desk/" target="_blank">
            <img src={Controle} alt="controle de chamados" id="projetos" />
          </a>
          <h4>Call Sync</h4>
          <p>
            {t('call_sync')}
          </p>
        </article>
      </div>

      <div>
        <article className="projetos-pessoais">
          <a href="https://car-sale-react-js.vercel.app/" target="_blank">
            <img src={CarSale} id="projetos" />
          </a>
          <h4>MileStone Motors</h4>
          <p>
            {t('milestone_motors')}
          </p>
        </article>
      </div>
    </div>
  );
}
