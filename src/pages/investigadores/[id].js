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
  const laboratio = laboratorios.find((lab) => lab.id === investigador.lab);

  if (!investigador) {
    return <h1>Investigador no encontrado</h1>;
  }

  return (
    <main className="w-full space-y-4 py-4 flex flex-col items-center">
      <section className="w-[90%] xl:max-w-max-content flex justify-center">
        {!!investigador.img && (
          <Image src="/main/investigacion.svg" alt="imagen del investigador" />
        )}
        <div>
          <h1 className="text-primary font-bold text-2xl">
            {investigador.name}
          </h1>
          <h2>Investigador de tiempo {investigador.tiempo}</h2>
          {!!laboratio && <h3>Encargado del laboratio de {laboratio.name}</h3>}
          <p className="text-sm text-blue-400">{investigador.emailIPN}</p>
          <p className="text-sm text-blue-400">{investigador.email}</p>
          <Link href="/investigadores">Volver lista</Link>
        </div>
      </section>
      <section className="w-full px-8 xl:max-w-max-content justify-center">
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
        <div>
          {!!investigador.info.orcid && (
            <p>
              ORCID: {investigador.info.orcid.id + " "}
              <a
                href={investigador.info.orcid.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {investigador.info.orcid.link}
              </a>
            </p>
          )}
          {!!investigador.info.researchGate && (
            <p>
              ResearchGate: {investigador.info.researchGate.id + " "}
              <a
                href={investigador.info.researchGate.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {investigador.info.researchGate.link}
              </a>
            </p>
          )}
          {!!investigador.info.researcherID && (
            <p>
              ResearcherID: {investigador.info.researcherID.id + " "}
              <a
                href={investigador.info.researcherID.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {investigador.info.researcherID.link}
              </a>
            </p>
          )}
          {!!investigador.info.scopusAuthor && (
            <p>
              Scopus Author ID: {investigador.info.scopusAuthor.id + " "}
              <a
                href={investigador.info.scopusAuthor.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {investigador.info.scopusAuthor.link}
              </a>
            </p>
          )}
          {!!investigador.info.scholarGoogle && (
            <p>
              Google Scholar:
              <a
                href={investigador.info.scholarGoogle}
                target="_blank"
                rel="noopener noreferrer"
              >
                {investigador.info.scholarGoogle}
              </a>
            </p>
          )}
        </div>
      </section>
      <section className="w-full px-8 xl:max-w-max-content">
        <h2 className="text-primary font-bold text-xl">
          Proyectos
          {/* Aqui va una tabla con los poyectos */}
        </h2>
      </section>
      <section className="w-full px-8 xl:max-w-max-content">
        <h2 className="text-primary font-bold text-xl">Publicaciones</h2>
        <ul className="pl-8">
          {investigador.publicaciones.lista.map((publicacion, i) => {
            return (
              <li key={i} className="list-disc">
                <h3 className="font-bold">{publicacion.titulo}</h3>
                <p>
                  {publicacion.autores} {publicacion.fecha}
                </p>
                <a
                  href={publicacion.link}
                  target="_blank"
                  className="text-blue-700"
                >
                  {publicacion.link}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="w-full px-8 xl:max-w-max-content">
        <h2 className="text-primary font-bold text-xl">
          Propiedad Intelectual
        </h2>
        <p>{investigador.propiedadIntelectual}</p>
        {!!investigador.patentes && (
          <ul>
            {investigador.patentes.map((patente, i) => {
              return (
                <li key={i}>
                  <h3>{patente.nombre}</h3>
                  <p>{patente.titulo}</p>
                  <p>{patente.numero}</p>
                  <a href={patente.link} target="_blank">
                    {patente.link}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </section>
      <section className="w-full px-8 xl:max-w-max-content">
        <h2 className="text-primary font-bold text-xl">Trabajos de Tesis</h2>
        <p>{investigador.trabajosTesis.content}</p>
        {!!investigador.trabajosTesis.programa && (
          <ul>
            {investigador.trabajosTesis.programa.map((program, i) => {
              return (
                <li key={i}>
                  <p>{program.nombre}</p>
                  {!!program.trabajos && (
                    <ul>
                      {program.trabajos.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
