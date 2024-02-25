import React from "react";
import Botones from "./Botones"

const studentName = "Nadia";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1>Bienvenidos a mi app.</h1>
      <div>
        <h3>{studentName}</h3>
      </div>
      <div>
        <ul>
          {techSkills.map((skills, index) => {
            return <li key={index}>{skills}</li>
          })}
        </ul>
      </div>
      <div>
        <Botones alerts={alerts}/>
      </div>
    </div>

  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
