import "./assets/css/configuration/Reset.css";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Tecnologies } from "./components/Tecnologies";
import { Typing } from "./components/Typing";

export function App() {
  return (
    <div>
      <Navbar />
      <Typing />
      <About />
      <Tecnologies />
    </div>
  );
}
