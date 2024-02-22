import "../assets/css/Typing.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useLottie } from "lottie-react";
import AnimationData from "../assets/animation/Animation_people.json";

export function Typing() {
  const [text] = useTypewriter({
    words: ["Desenvolvedor Front-end", "Desenvolvedor Android"],
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
          Olá, Meu nome é Pedro <span className="cor">Siqueira</span>
        </h1>
        <p className="typing">
          eu sou <span className="cor">{text}</span>
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
