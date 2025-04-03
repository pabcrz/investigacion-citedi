import { useRouter } from "next/router";
import { investigadores } from "@/lib/investigadores";
import { laboratorios } from "@/lib/laboratorios";
import Image from "next/image";
import Link from "next/link";

export default function InvestigadorDetalle() {
  const router = useRouter();
  const { id } = router.query;
  if (!router.isReady) {
    return <h1>Cargando...</h1>;
  }

  const investigador = investigadores.find((inv) => inv.id === Number(id));
  const laboratorio = laboratorios.find((lab) => lab.id === investigador.lab);

  if (!investigador) {
    return <h1>Investigador no encontrado</h1>;
  }

  return (
    <main className="w-full space-y-4 py-4 flex flex-col items-center">
      <section className="w-[90%] xl:max-w-max-content flex gap-8 justify-center">
        {investigador.img ? (
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
            src="/main/investigacion.svg"
            alt="imagen por defecto del investigador"
          />
        )}

        <div className="flex justify-center flex-col">
          <h1 className="text-primary font-bold text-2xl">
            {investigador.name}
          </h1>
          <h2>Investigador de tiempo {investigador.tiempo}</h2>
          {!!laboratorio && (
            <>
              <Link href={`/laboratorios/${laboratorio.id}`} className="group">
                Responsable de Laboratorio{" "}
                <span className="text-base font-normal underline group-hover:text-blue-700">
                  {laboratorio.name}
                </span>
              </Link>
            </>
          )}
          <p className="text-sm text-blue-700">{investigador.emailIPN}</p>
        </div>
      </section>
      <section className="w-full px-4 md:px-8 xl:max-w-max-content justify-center">
        <h2 className="text-primary font-bold text-xl">
          Información académica
        </h2>
        <div className="space-y-4">
          {investigador.info.content.map((item, index) => {
            return (
              <p key={index} className="">
                {item.map((parrafo, i) => {
                  return <p key={i}>{parrafo}</p>;
                })}
              </p>
            );
          })}
        </div>
        <div className="py-4 flex flex-col">
          {!!investigador.info.orcid && (
            <a
              href={investigador.info.orcid.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >
              ORCID: {investigador.info.orcid.id}
            </a>
          )}
          {!!investigador.info.researchGate && (
            <a
              href={investigador.info.researchGate}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >
              ResearchGate
            </a>
          )}
          {!!investigador.info.researcherID && (
            <a
              href={investigador.info.researcherID.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >
              ResearcherID: {investigador.info.researcherID.id}
            </a>
          )}
          {!!investigador.info.scopusAuthor && (
            <a
              href={investigador.info.scopusAuthor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >
              Scopus Author ID: {investigador.info.scopusAuthor.id}
            </a>
          )}
          {!!investigador.info.scholarGoogle && (
            <a
              href={investigador.info.scholarGoogle}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >
              Google Schoolar
            </a>
          )}
        </div>
      </section>
      {!!investigador.proyectos && (
        <section className="w-full px-4 md:px-8 xl:max-w-max-content">
          <h2 className="text-primary font-bold text-xl">
            Proyectos
            {/* Aqui va una tabla con los poyectos */}
            <p className="text-black font-normal text-base py-2">
              {investigador.proyectos.content}
            </p>
          </h2>
          {!!investigador.proyectos.lista && (
            <div className="overflow-auto">
              <table>
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border min-w-52">Nombre del proyecto</th>
                    <th className="border px-1">Periodo</th>
                    <th className="border px-1">Fuente</th>
                    <th className="md:px-4 border min-w-72">Descripcion </th>
                  </tr>
                </thead>
                <tbody>
                  {investigador.proyectos.lista.map((proyecto, i) => {
                    return (
                      <tr key={i} className={i % 2 === 1 ? "bg-gray-100" : ""}>
                        <td className="px-1">{proyecto.nombre}</td>
                        <td className="px-1">{proyecto.periodo}</td>
                        <td className="px-1">{proyecto.fuente}</td>
                        <td className="px-1">{proyecto.descripcion}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}
      {!!investigador.publicaciones && (
        <section className="w-full px-4 md:px-8 xl:max-w-max-content">
          <h2 className="text-primary font-bold text-xl">
            Publicaciones científicas
          </h2>
          <ul className="pl-8">
            {investigador.publicaciones.lista.map((publicacion, i) => {
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
      {!!investigador.propiedadIntelectual && (
        <section className="w-full px-4 md:px-8 xl:max-w-max-content">
          <h2 className="text-primary font-bold text-xl">
            Propiedad Intelectual
          </h2>
          <p>{investigador.propiedadIntelectual}</p>
          {!!investigador.propiedadLink && (
            <a
              href={investigador.propiedadLink}
              className="underline hover:text-blue-700"
            >
              {investigador.propiedadLink}
            </a>
          )}
          {!!investigador.patentes && (
            <ul className="pl-8">
              {investigador.patentes.map((patente, i) => {
                return (
                  <li key={i} className="list-disc">
                    <a href={patente.link} target="_blank" className="group">
                      <h3 className="font-bold underline group-hover:text-blue-700">
                        {patente.nombre}
                      </h3>
                      <p>{patente.titulo}</p>
                      <p>{patente.numero}</p>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      )}
      {!!investigador.trabajosTesis && (
        <section className="w-full px-4 md:px-8 xl:max-w-max-content">
          <h2 className="text-primary font-bold text-xl">
            Trabajos de tesis de posgrado institucional en proceso
          </h2>
          <p>{investigador.trabajosTesis.content}</p>
          {!!investigador.trabajosTesis.programa && (
            <>
              <ul>
                {investigador.trabajosTesis.programa.map((program, i) => {
                  return (
                    <li key={i}>
                      <p className="font-bold">{program.nombre}</p>
                      {!!program.trabajos && (
                        <ul className="pl-8">
                          {program.trabajos.map((item, i) => (
                            <li key={i} className="list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </section>
      )}
      {!!investigador.participacionInvestigacion && (
        <section className="w-full px-4 md:px-8 xl:max-w-max-content">
          <h3 className="text-primary font-bold text-xl">
            Participación en actividades de investigación{" "}
          </h3>
          {investigador.participacionInvestigacion.map((participacion, i) => {
            return <p key={i}>{participacion}</p>;
          })}
        </section>
      )}
      <Link
        href="/investigadores#tabla"
        className="p2 px-4 rounded-md text-primary hover:bg-primary hover:text-white "
      >
        Lista de Investigadores
      </Link>
    </main>
  );
}
