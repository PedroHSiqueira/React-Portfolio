import Controle from "../assets/images/controle.png";
import CarSale from "../assets/images/CarSale.png";
import "../assets/css/Projects.css";

export function Projects() {
  return (
    <div className="projetos">
      <h2>Projetos</h2>
      <div>
        <article className="projetos-pessoais">
          <a href="https://pedrohsiqueira.github.io/Help-Desk/" target="_blank">
            <img src={Controle} alt="controle de chamados" id="projetos" />
          </a>
          <h4>Call Sync</h4>
          <p>
            CallSync é uma plataforma simples e eficiente para gerenciar
            chamadas de serviço, desenvolvida utilizando apenas HTML e CSS,
            conforme proposto por um desafio acadêmico e orientado pelo nosso
            professor para testar nossas habilidades de design e organização.
            Através deste projeto, acabei ganhando o prêmio na categoria de
            design.
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
            Este projeto é uma página web simples e elegante para exibir carros
            disponíveis para venda, construída utilizando React com Vite como
            empacotador (bundler). A interface do usuário é aprimorada com
            Tailwind CSS, proporcionando um design limpo e responsivo.
          </p>
        </article>
      </div>
    </div>
  );
}
