import Javascript from "../assets/images/tecnologies/javascript.svg"
import Typescript from "../assets/images/tecnologies/typescript.svg"
import React from "../assets/images/tecnologies/react.svg"
import Node from "../assets/images/tecnologies/nodejs.svg"
import Kotlin from "../assets/images/tecnologies/kotlin.svg"
import Android from "../assets/images/tecnologies/androidstudio.svg"
import Sql from "../assets/images/tecnologies/mysql.svg"
import Git from "../assets/images/tecnologies/git.svg"
import Tailwind from "../assets/images/tecnologies/tailwindcss.svg"
import Python from "../assets/images/tecnologies/python.svg"
import "../assets/css/Tecnologies.css"

export function Tecnologies() {
  return (
    <div className="tecnologia" id="tecnologia">
      <div className="linguagens">
          <img src={Javascript} />
          <h2 className="tecnology-name">Javascript</h2>
        </div>

        <div className="linguagens">
          <img src={Typescript} />
          <h2 className="tecnology-name">Typescript</h2>
        </div>

        <div className="linguagens">
          <img src={Kotlin} />
          <h2 className="tecnology-name">Koltin</h2>
        </div>

        <div className="linguagens">
          <img src={Python} />
          <h2 className="tecnology-name">Python</h2>
        </div>

        <div className="linguagens">
          <img src={React} />
          <h2 className="tecnology-name">React.Js</h2>
        </div>

        <div className="linguagens">
          <img src={Node} />
          <h2 className="tecnology-name">Node.Js</h2>
        </div>

        <div className="linguagens">
          <img src={Tailwind} />
          <h2 className="tecnology-name">Tailwind CSS</h2>
        </div>

        <div className="linguagens">
          <img src={Android} />
          <h2 className="tecnology-name">Android</h2>
        </div>

        <div className="linguagens">
          <img src={Sql} />
          <h2 className="tecnology-name">MySQL</h2>
        </div>

        <div className="linguagens">
          <img src={Git} />
          <h2 className="tecnology-name">Git</h2>
        </div>
    </div>
  );
}
