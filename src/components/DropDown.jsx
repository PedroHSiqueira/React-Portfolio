import "../assets/css/DropDown.css";
import Brasil from "../assets/images/country/brazil.png";
import Usa from "../assets/images/country/usa.png";
import Spain from "../assets/images/country/spain.png";
import { useTranslation } from "react-i18next";

const languages = [
  { flag: <img src={Brasil} />, name: "Português", code: "br" },
  { flag: <img src={Usa} />, name: "English", code: "en" },
  { flag: <img src={Spain} />, name: "Español", code: "es" }
];

export function DropDownProfile() {
  const { i18n } = useTranslation();

  function onChangeLanguage(code) {
    i18n.changeLanguage(code);
  }

  return (
    <div className="dropdown">
      <ul className="dropdown-ul">
        {languages.map(({ flag, name, code }) => (
          <li key={code}>
            <button onClick={() => onChangeLanguage(code)}>
              <span>{flag}</span>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
