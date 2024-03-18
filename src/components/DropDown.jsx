import "../assets/css/DropDown.css";
import Brasil from "../assets/images/country/brazil.png";
import Usa from "../assets/images/country/usa.png";
import Japan from "../assets/images/country/japan.png";
import Spain from "../assets/images/country/spain.png";
import Indonesia from "../assets/images/country/indonesia.png";
import Korea from "../assets/images/country/korea.png";
import { useTranslation } from "react-i18next";

const languages = [
  { flag: <img src={Brasil} />, name: "Português", code: "br" },
  { flag: <img src={Usa} />, name: "English", code: "en" },
  { flag: <img src={Spain} />, name: "Español", code: "es" },
  { flag: <img src={Indonesia} />, name: "Bahasa Indonesia", code: "id" },
  { flag: <img src={Korea} />, name: "한국어", code: "kr" },
  { flag: <img src={Japan} />, name: "日本語", code: "jp" },
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
