import Linkedin from "../assets/images/tecnologies/linkedin.svg";
import Github from "../assets/images/tecnologies/github.svg";
import Globe from "../assets/images/tecnologies/globe.svg";
import "../assets/css/Navbar.css";
import { DropDownProfile } from "./DropDown";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();

  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className="sticky-header">
      <header className="header">
        <a href="#">
          Pedro Siqueira<span className="cor">.</span>
        </a>
        <nav>
          <a href="#about">{t('about')}</a>
          <a href="#tecnologia">{t('tecnologies')}</a>
          <a href="#projetos">{t('projects')}</a>
          <div className="social-medias">
            <a href="https://github.com/PedroHSiqueira" target="_blank">
              <img src={Github} />
            </a>
            <a href="https://www.linkedin.com/in/phasiqueira/" target="_blank">
              <img src={Linkedin} />
            </a>
            <button className="globe">
              <img
                src={Globe}
                onClick={() => {
                  setOpenProfile(!openProfile);
                }}
              />
            </button>
          </div>
        </nav>
      </header>
      {openProfile && <DropDownProfile />}
    </div>
  );
}
