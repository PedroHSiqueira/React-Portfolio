import Javascript from "../assets/images/tecnologies/javascript.svg"
import Typescript from "../assets/images/tecnologies/typescript.svg"
import React from "../assets/images/tecnologies/react.svg"
import Kotlin from "../assets/images/tecnologies/kotlin.svg"
import Python from "../assets/images/tecnologies/python.svg"
import Flutter from "../assets/images/tecnologies/flutter.svg"
import "../assets/css/Tecnologies.css"

export function Tecnologies() {
  return (
    <div className="tech">
      <h1 className="tecnology-title">Tech Stack |</h1>
      <div className="tecnologia" id="tecnologia">
        <div className="linguagens">
            <img src={Javascript} />
          </div>
          <div className="linguagens">
            <img src={Typescript} />
          </div>
          <div className="linguagens">
            <img src={React} />
          </div>
          <div className="linguagens">
            <img src={Flutter} />
          </div>
          <div className="linguagens">
            <img src={Kotlin} />
          </div>
          <div className="linguagens">
            <img src={Python} />
          </div>
      </div>
    </div>
  );
}
