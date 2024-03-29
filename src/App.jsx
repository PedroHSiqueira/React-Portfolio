import "./assets/css/configuration/Reset.css";
import "./assets/css/configuration/App.css";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Tecnologies } from "./components/Tecnologies";
import { Typing } from "./components/Typing";

export function App() {
  return (
    <div className="homepage">
      <Navbar />
      <Typing />
      <About />
      <Tecnologies />
      <Projects />
      <Footer />
    </div>
  );
}
