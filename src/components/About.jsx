import "../assets/css/About.css";
import Macbook from "../assets/images/macbook.jpg";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="about" id="about">
        <img src={Macbook} />
        <div className="about_text">
          <h2>{t("about")}</h2>
          <p className="text">{t("about_me_1")}</p><br />
          <p className="text">{t("about_me_2")}</p><br />
          <p className="text">{t("about_me_3")}</p>
        </div>
      </section>
    </div>
  );
}
