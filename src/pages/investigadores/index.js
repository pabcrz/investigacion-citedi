import investigacion from "/public/main/investigacion.svg";
import { investigadores } from "../../lib/data";
import Image from "next/image";

export default function Investigadores() {
  return (
    // Mision y Vision del Citedi

    <main className="w-full flex flex-col gap-10 items-center">
      <section className="w-full bg-[#333333] flex justify-center  text-white">
        <div className="w-max-content flex flex-col gap-4 px-4 md:px-8 py-8">
          <Image src={investigacion} alt="mision" className="size-16" />
          <h3 className="text-fluid-md">Investigadores</h3>
          <p>
            La planta académica está conformada por 21 docentes y, además, un
            Investigador por México está comisionado a Citedi desde 2015. El 73%
            cuenta con el grado de doctor, el 23% con maestría en ciencias y una
            persona es especialista en sistemas digitales. <br /> <br />
            El 45% de la planta académica pertenece al Sistema Nacional de
            Investigadoras e Investigadores (SNII), de los cuales, 2 son nivel
            III, 5 están en el nivel II, 2 docentes son nivel I y 1 es
            candidato.
          </p>
        </div>
      </section>
      <div className="max-w-max-content">
        <div className="sm:px-8 flex flex-col gap-4">
          <table>
            <thead>
              <tr className="bg-primary text-white">
                <th className="border">Nombre</th>
                <th className="border">Correo Electrónico</th>
                <th className="md:px-4 border">Nivel SNII </th>
              </tr>
            </thead>
            <tbody>
              {investigadores.map((investigador, i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-gray-100" : ""}>
                  <td className="px-1">{investigador.name}</td>
                  <td className="px-1">{investigador.email}</td>
                  <td className="text-center">{investigador.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
