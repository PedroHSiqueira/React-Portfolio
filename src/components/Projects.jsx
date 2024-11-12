import Weather from "../assets/images/projects/weather_app.png";
import CarSale from "../assets/images/projects/CarSale.png";
import Pokemon from "../assets/images/projects/pokemon.png";
import Verbalize from "../assets/images/projects/Verbalize.png";
import "../assets/css/Projects.css";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();
  return (
    <div className="projetos">
      <h2>{t("projects")}</h2>

      <div>
        <article className="projetos-pessoais">
          <img src={Verbalize} id="projetos" />
          <div>
            <h4>Verbalize 💬</h4>
            <p>{t("verbalize")}</p>
            <div className="midia_buttons">
              <a href="https://github.com/PedroHSiqueira/Next_Verbalise_Frontend" target="_blank" className="button">
                Github
              </a>
              <a href="https://verbalize-senac.vercel.app/" target="_blank" className="button">
                Deploy
              </a>
            </div>
          </div>
        </article>
      </div>

      <div>
        <article className="projetos-pessoais">
          <img src={CarSale} id="projetos" />
          <div>
            <h4>MileStone Motors 🚗</h4>
            <p>{t("milestone_motors")}</p>
            <div className="midia_buttons">
              <a href="https://github.com/PedroHSiqueira/Car-Sale-React.js" target="_blank" className="button">
                Github
              </a>
              <a href="https://car-sale-react-js.vercel.app/" target="_blank" className="button">
                Deploy
              </a>
            </div>
          </div>
        </article>
      </div>

      <div>
        <article className="projetos-pessoais">
          <img src={Weather} alt="controle de chamados" id="projetos" />
          <div>
            <h4>Aplicativo de Clima 🌧️</h4>
            <p>{t("weather")}</p>
            <div className="midia_buttons">
              <a href="https://github.com/PedroHSiqueira/Flutter_Weather_App" target="_blank" className="button">
                Github
              </a>
              <a href="https://github.com/PedroHSiqueira/Flutter_Weather_App" target="_blank" className="button">
                Deploy
              </a>
            </div>
          </div>
        </article>
      </div>

      <div>
        <article className="projetos-pessoais">
          <img src={Pokemon} id="projetos" />
          <div>
            <h4>Pokemon Terminal 🏃‍♂️</h4>
            <p>{t("pokemon")}</p>
            <div className="midia_buttons">
              <a href="https://github.com/PedroHSiqueira/Pokemon-Terminal" target="_blank" className="button">
                Github
              </a>
              <a href="https://github.com/PedroHSiqueira/Pokemon-Terminal" target="_blank" className="button">
                Deploy
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
