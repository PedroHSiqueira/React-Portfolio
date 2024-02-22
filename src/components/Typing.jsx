import "../assets/css/Typing.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function Typing() {
  const [text] = useTypewriter({
    words: ["Desenvolvedor Front-end", "Desenvolvedor Android"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 80,
  });
  return (
    <div>
      <section className="home" id="home">
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
    </div>
  );
}
