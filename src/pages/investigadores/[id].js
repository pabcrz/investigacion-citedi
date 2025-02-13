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
    <main className="w-full">
      <section className="max-w-max-content py-14 flex justify-center">
        {!!investigador.img && (
          <Image src="/main/investigacion.svg" alt="imagen del investigador" />
        )}
        <div>
          <h1>{investigador.name}</h1>
          <h2>Investigador de tiempo {investigador.tiempo}</h2>
          {!!laboratio && <h3>Encargado del laboratio de {laboratio.name}</h3>}
          <Link href="/investigadores">Volver lista</Link>
        </div>
      </section>
      <section>
        <h2>Información académica</h2>
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
              <Link
                href={investigador.info.orcid.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {investigador.info.orcid.link}
              </Link>
            </p>
          )}
          {!!investigador.info.researchGate && (
            <p>
              ResearchGate: {investigador.info.researchGate.id + " "}
              <Link
                href={investigador.info.researchGate.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {investigador.info.researchGate.link}
              </Link>
            </p>
          )}
          {!!investigador.info.researcherID && (
            <p>
              ResearcherID: {investigador.info.researcherID.id + " "}
              <Link
                href={investigador.info.researcherID.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {investigador.info.researcherID.link}
              </Link>
            </p>
          )}
          {!!investigador.info.scopusAuthor && (
            <p>
              Scopus Author ID: {investigador.info.scopusAuthor.id + " "}
              <Link
                href={investigador.info.scopusAuthor.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {investigador.info.scopusAuthor.link}
              </Link>
            </p>
          )}
          {!!investigador.info.scholarGoogle && (
            <p>
              Google Scholar:
              <Link
                href={investigador.info.scholarGoogle}
                target="_blank"
                rel="noopener noreferrer"
              >
                {investigador.info.scholarGoogle}
              </Link>
            </p>
          )}
        </div>
      </section>
      <section>
        <h2>
          Proyectos
          {/* Aqui va una tabla con los poyectos */}
        </h2>
      </section>
      <section>
        <h2>Publicaciones</h2>
        <ul>
          {investigador.publicaciones.lista.map((publicacion, i) => {
            return (
              <li key={i}>
                <h3>{publicacion.titulo}</h3>
                <p>
                  {publicacion.autores} {publicacion.fecha}
                </p>
                <Link href={publicacion.link} target="_blank">
                  {publicacion.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2>Propiedad Intelectual</h2>
        <p>{investigador.propiedadIntelectual}</p>
        {!!investigador.patentes && (
          <ul>
            {investigador.patentes.map((patente, i) => {
              return (
                <li key={i}>
                  <h3>{patente.nombre}</h3>
                  <p>{patente.titulo}</p>
                  <p>{patente.numero}</p>
                  <Link href={patente.link} target="_blank">
                    {patente.link}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
      <section>
        <h2>Trabajos de Tesis</h2>
        <p>{investigador.trabajosTesis.content}</p>
        {!!investigador.trabajosTesis.programa && (
          <ul>
            {investigador.trabajosTesis.programa.map((program, i) => {
              return (
                <li key={i}>
                  <p>{program.nombre}</p>
                  <ul>
                    {program.trabajos.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
