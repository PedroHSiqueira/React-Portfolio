import "../assets/css/Typing.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useLottie } from "lottie-react";
import AnimationData from "../assets/animation/phoneAnimation.json";
import { useTranslation } from "react-i18next";


export function Typing() {

  const { t } = useTranslation();

  const [text] = useTypewriter({
    words: [t('front_end'), t('mobile')],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 80,
  });

  const options = {
    animationData: AnimationData,
    loop: true,
    
  }

  const { View } = useLottie(options);
  return (
    <div className="home">
      <section className="div_name" id="home">
        <h1 className="name">
          {t('name')} <span className="cor">Siqueira</span>
        </h1>
        <p className="typing">
          {t('i_am')}<span className="cor">{text}</span>
          <span>
            <Cursor cursorStyle="|" />
          </span>
        </p>
      </section>
      <section className="animation">
        {View}
      </section>
    </div>
  );
}
