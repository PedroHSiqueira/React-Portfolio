import "../assets/css/About.css";
import { useTranslation } from "react-i18next";

export function About() {

  const { t } = useTranslation();

  return (
    <div>
      <section className="about" id="about">
        <h2>Sobre mim</h2>
        <p className="text">
          {t("about_me")}
        </p>
      </section>
    </div>
  );
}
