import { useRouter } from "next/router";
import { laboratorios } from "@/lib/laboratorios";
import { investigadores } from "@/lib/investigadores";
import Link from "next/link";
import Image from "next/image";

export default function LaboratorioDetalle() {
  const router = useRouter();

  if (!router.isReady) {
    return <h1>Cargando...</h1>;
  }

  const { id } = router.query;

  const laboratorio = laboratorios.find((lab) => lab.id === Number(id));
  console.log(laboratorio);
  const investigador = investigadores.find(
    (i) => laboratorio.responsable === i.id
  );
  console.log(investigador);
  const academicos = laboratorio.personal.academico.map((a) =>
    investigadores.find((i) => i.id === a.id)
  );
  console.log(academicos);

  if (!laboratorio) {
    return <h1>laboratorio no encontrado</h1>;
  }

  return (
    <main className="w-full space-y-4 py-4 flex flex-col items-center">
      <h1 className="text-primary font-bold text-2xl">
        Laboratorio de {laboratorio.name}
      </h1>
      <section className="w-[90%] xl:max-w-max-content justify-center">
        {laboratorio.img ? (
          <Image
            width={150}
            height={250}
            src={`/investigadores/${investigador.img}`}
            alt="imagen del investigador"
          />
        ) : (
          <Image
            width={150}
            height={250}
            className="bg-primary rounded-xl"
            src="/main/equipos.svg"
            alt="imagen por defecto del investigador"
          />
        )}
      </section>
      <section className="w-full px-4 md:px-8 xl:max-w-max-content justify-center">
        <div className="space-y-4">
          {laboratorio.descripcion.map((item, index) => {
            return (
              <p key={index} className="">
                {item}
              </p>
            );
          })}
        </div>
        {laboratorio.equipo && (
          <>
            <p className="pt-2">Entre el equipo más notable se tiene:</p>
            <ul className="pl-8">
              {laboratorio.equipo.map((item, index) => {
                return (
                  <li key={index} className="list-disc">
                    {item}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </section>

      <section className="w-full px-4 md:px-8 xl:max-w-max-content">
        <h2 className="text-primary font-bold text-xl">
          Personal acádemico y estudiantes
        </h2>
        <p className="text-black font-normal text-base py-2">
          {laboratorio.personal.descripcion}
        </p>
        <ul className="pl-8">
          {laboratorio.personal.academico.map((academico, index) => {
            const infoAcademico = investigadores.find(
              (i) => i.id === academico.id
            );
            return (
              <li key={index} className="list-disc">
                <Link
                  href={`/investigadores/${infoAcademico.id}`}
                  className="group"
                >
                  <p className="font-bold underline group-hover:text-blue-700">
                    {infoAcademico?.name}
                  </p>
                  <p>{academico.cargo}</p>
                  <p>{academico.estudio}</p>
                  <p>{academico.sumary}</p>
                </Link>

                {infoAcademico?.emailIPN && (
                  <p className="text-blue-700">{infoAcademico.emailIPN}</p>
                )}
              </li>
            );
          })}
        </ul>
        {!!laboratorio.personal.doctorado && (
          <>
            <h3 className="pt-2">Estudiantes de doctorado:</h3>
            <ul className="pl-8">
              {laboratorio.personal.doctorado.map((item, index) => {
                return (
                  <li key={index} className="list-disc">
                    {item}
                  </li>
                );
              })}
            </ul>
          </>
        )}
        {!!laboratorio.personal.maestria && (
          <>
            <h3 className="pt-2">Estudiantes de maestria:</h3>
            <ul className="pl-8">
              {laboratorio.personal.maestria.map((item, index) => {
                return (
                  <li key={index} className="list-disc">
                    {item}
                  </li>
                );
              })}
            </ul>
          </>
        )}
        {!!laboratorio.personal.investigadoresExternos && (
          <>
            <h3 className="pt-2 font-semibold">
              Personas investigadoras colaboradoras externas:
            </h3>
            <ul className="pl-8 space-y-1">
              {laboratorio.personal.investigadoresExternos.map(
                (item, index) => {
                  return (
                    <li key={index} className="list-disc">
                      <p>{item.nombre}</p>
                      <p className="text-sm">{item.institucion}</p>
                    </li>
                  );
                }
              )}
            </ul>
          </>
        )}
        {!!laboratorio.personal.estudiantesColaboradores && (
          <>
            <h3 className="pt-3 font-semibold">
              Personas estudiantes colaboradoras:
            </h3>
            <section className="space-y-1">
              <p className="text-base">Estudiante de Maestría en CITEDI-IPN</p>
              <ul className="pl-8 space-y-1">
                {laboratorio.personal.estudiantesColaboradores
                  .filter(
                    (estudiante) =>
                      estudiante.estudios === "Maestría en CITEDI-IPN"
                  )
                  .map((item, index) => {
                    return (
                      <li key={index} className="list-disc text-sm">
                        <p>{item.nombre}</p>
                      </li>
                    );
                  })}
              </ul>
              <p className="text-base">
                Estudiantes de Licenciatura en UPIITA-IPN
              </p>
              <ul className="pl-8 space-y-1">
                {laboratorio.personal.estudiantesColaboradores
                  .filter(
                    (estudiante) =>
                      estudiante.estudios === "Licenciatura en UPIITA-IPN"
                  )
                  .map((item, index) => {
                    return (
                      <li key={index} className="list-disc text-sm">
                        <p>{item.nombre}</p>
                      </li>
                    );
                  })}
              </ul>
              <p className="text-base">
                Estudiante de Licenciatura en TecNM-ITSUR
              </p>
              <ul className="pl-8 space-y-1">
                {laboratorio.personal.estudiantesColaboradores
                  .filter(
                    (estudiante) =>
                      estudiante.estudios === "Licenciatura en TecNM-ITSUR"
                  )
                  .map((item, index) => {
                    return (
                      <li key={index} className="list-disc text-sm">
                        <p>{item.nombre}</p>
                      </li>
                    );
                  })}
              </ul>
              <p className="text-base">
                Estudiante de Licenciatura en UPIIZ-IPN
              </p>
              <ul className="pl-8 space-y-1">
                {laboratorio.personal.estudiantesColaboradores
                  .filter(
                    (estudiante) =>
                      estudiante.estudios === "Licenciatura en UPIIZ-IPN"
                  )
                  .map((item, index) => {
                    return (
                      <li key={index} className="list-disc text-sm">
                        <p>{item.nombre}</p>
                      </li>
                    );
                  })}
              </ul>
              <p className="text-base">
                Estudiante de Licenciatura en Universidad Autónoma de Occidente
              </p>
              <ul className="pl-8 space-y-1">
                {laboratorio.personal.estudiantesColaboradores
                  .filter(
                    (estudiante) =>
                      estudiante.estudios ===
                      "Licenciatura en Universidad Autónoma de Occidente"
                  )
                  .map((item, index) => {
                    return (
                      <li key={index} className="list-disc text-sm">
                        <p>{item.nombre}</p>
                      </li>
                    );
                  })}
              </ul>
              <p className="text-base">
                Estudiantes de Licenciatura en TecNM-ITT
              </p>
              <ul className="pl-8 space-y-1">
                {laboratorio.personal.estudiantesColaboradores
                  .filter(
                    (estudiante) =>
                      estudiante.estudios === "Licenciatura en TecNM-ITT"
                  )
                  .map((item, index) => {
                    return (
                      <li key={index} className="list-disc text-sm">
                        <p>{item.nombre}</p>
                      </li>
                    );
                  })}
              </ul>
              <p className="text-base">
                Estudiante de Licenciatura en ESIME-IPN
              </p>
              <ul className="pl-8 space-y-1">
                {laboratorio.personal.estudiantesColaboradores
                  .filter(
                    (estudiante) =>
                      estudiante.estudios === "Licenciatura en ESIME-IPN"
                  )
                  .map((item, index) => {
                    return (
                      <li key={index} className="list-disc text-sm">
                        <p>{item.nombre}</p>
                      </li>
                    );
                  })}
              </ul>
            </section>
          </>
        )}
      </section>
      {!!laboratorio.proyectos.lista && (
        <section className="w-full px-4 md:px-8 xl:max-w-max-content">
          <h2 className="text-primary font-bold text-xl">
            Proyectos de investigación
          </h2>
          <p className="py-2">{laboratorio.proyectos.descripcion}</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border min-w-52">Nombre del proyecto</th>
                  <th className="border px-1">Periodo</th>
                  <th className="border px-1">Fuente</th>
                </tr>
              </thead>
              <tbody>
                {laboratorio.proyectos.lista.map((proyecto, i) => {
                  return (
                    <tr key={i} className={i % 2 === 1 ? "bg-gray-100" : ""}>
                      <td className="px-1">{proyecto.nombre}</td>
                      <td className="px-1 text-center">{proyecto.periodo}</td>
                      <td className="px-2 text-center">{proyecto.fuente}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {!!laboratorio.publicaciones && (
        <section className="w-full px-4 md:px-8 xl:max-w-max-content">
          <h2 className="text-primary font-bold text-xl">
            Publicaciones científicas
          </h2>
          <ul className="pl-8">
            {laboratorio.publicaciones.lista.map((publicacion, i) => {
              return (
                <li key={i} className="list-disc">
                  <Link
                    href={publicacion.link}
                    target="_blank"
                    className="group"
                  >
                    <h3 className="font-bold underline group-hover:text-blue-700">
                      {publicacion.titulo}
                    </h3>
                    <p className="">
                      {publicacion.autores} {publicacion.fecha}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
      <Link
        href="/laboratorios"
        className="p2 px-4 rounded-md text-primary hover:bg-primary hover:text-white "
      >
        Lista de Laboratorios
      </Link>
    </main>
  );
}
