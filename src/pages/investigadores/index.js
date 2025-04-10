import investigacion from "/public/main/investigacion.svg";
import grafica1 from "/public/main/grafica1.png";
import grafica2 from "/public/main/grafica2.png";
import { investigadores } from "@/lib/investigadores";
import Image from "next/image";
import Link from "next/link";

export default function Investigadores() {
  return (
    // Mision y Vision del Citedi

    <main className="w-full flex flex-col gap-10 items-center">
      <section className="w-full bg-[#333333] flex justify-center  text-white">
        <div className="w-max-content flex flex-col gap-8 px-4 md:px-8 py-8">
          <Image src={investigacion} alt="mision" className="size-16" />
          <h3 className="text-fluid-md">Investigadores</h3>

          <div className="flex flex-col gap-4 md:flex-row">
            <p className="flex items-center">
              La planta académica está conformada por un total de 22
              investigadores, de los cuales 21 docentes están adscritos al
              CITEDI-IPN y un Investigador por México está comisionado a Citedi
              desde 2015. El 73% cuenta con el grado de doctor, el 23% con
              maestría en ciencias y una persona es especialista en sistemas
              digitales.
            </p>
            <Image
              src={grafica1}
              alt="grafica que muestra la cantidad de investigadores"
              className="w-full md:max-w-sm p-4 bg-white"
            ></Image>
          </div>
          <div className="flex flex-col gap-4 md:flex-row-reverse">
            <p className="flex items-center">
              De los 22 investigadores, el 45% pertenece al Sistema Nacional de
              Investigadoras e Investigadores (SNII), distribuidos en los
              siguientes niveles.
            </p>
            <Image
              src={grafica2}
              alt="grafica que muestra la cantidad de investigadores"
              className="w-full md:max-w-sm p-4 bg-white"
            ></Image>
          </div>
          <p className="py-2">
            Como resultados de las actividades científicas y tecnológicas
            desarrolladas por la planta académica se publican artículos de
            investigación en revistas especializadas JCR, se han generado
            patentes, registro de derechos de autor, artículos de divulgación,
            se participa en eventos académicos de prestigio nacional e
            internacional y se llevan a cabo proyectos de investigación
            orientados a generar conocimiento básico y aplicado. <br /> <br />
            La trayectoria académica de los investigadores ha sido objeto de
            premios y reconocimientos otorgados por el IPN y por instancias
            nacionales e internacionales.
          </p>
        </div>
      </section>
      <section
        className="max-w-max-content flex flex-col items-center py-4"
        id="tabla"
      >
        <div className="px-2 sm:px-8 flex flex-col gap-4 pb-4">
          <table>
            <thead>
              <tr className="bg-primary text-white">
                <th className="border">ID</th>
                <th className="border">Nombre</th>
                <th className="border">Correo Electrónico</th>
                <th className="md:px-4 border">Nivel SNII </th>
              </tr>
            </thead>
            <tbody>
              {investigadores.map((investigador, i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-gray-100" : ""}>
                  <td className="px-1">{investigador.id}.</td>
                  <td className="px-1">
                    <Link
                      href={`/investigadores/${investigador.id}`}
                      className="hover:text-black text-blue-700"
                    >
                      {investigador.name} <br />
                    </Link>
                    {investigador.investigador && (
                      <p className="text-sm text-gray-500">
                        {investigador.investigador}
                      </p>
                    )}
                  </td>
                  <td className="px-1">
                    <Link
                      href={`mailto:${investigador.emailIPN}`}
                      className="text-sm text-blue-700"
                    >
                      {investigador.emailIPN}
                    </Link>
                  </td>
                  <td className="text-center">{investigador.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link
          href="/"
          className="p2 px-4 rounded-md text-primary hover:bg-primary hover:text-white "
        >
          Inicio
        </Link>
      </section>
    </main>
  );
}
