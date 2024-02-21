import "../assets/css/Navbar.css";

export function Navbar() {
  return (
    <div>
      <header className="header">
        <a href="#"><span className="cor">P.</span>Siqueira</a>
        <nav>
          <a href="#about">About Me</a>
          <a href="#tecnologia">technologies</a>
          <a href="#projetos">Projects</a>
          <a href="#contato">Contact</a>
        </nav>
      </header>
    </div>
  );
}
