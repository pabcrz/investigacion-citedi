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
          <Image
            src="/public/main/investigacion.svg"
            alt="imagen del investigador"
          />
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
              ORCID: {investigador.info.orcid.id}{" "}
              <span>
                <Link href={investigador.info.orcid.link}>
                  {investigador.info.orcid.link}
                </Link>
              </span>
            </p>
          )}
          {!!investigador.info.researchGate && (
            <p>
              ResearchGate: {investigador.info.researchGate.id}{" "}
              <span>
                <Link href={investigador.info.researchGate.link}>
                  {investigador.info.researchGate.link}
                </Link>
              </span>
            </p>
          )}
          {!!investigador.info.researcherID && (
            <p>
              ResearcherID: {investigador.info.researcherID.id}{" "}
              <span>
                <Link href={investigador.info.researcherID.link}>
                  {investigador.info.researcherID.link}
                </Link>
              </span>
            </p>
          )}
          {!!investigador.info.scopusAuthor && (
            <p>
              Scopus Author ID: {investigador.info.scopusAuthor.id}{" "}
              <span>
                <Link href={investigador.info.scopusAuthor.link}>
                  {investigador.info.scopusAuthor.link}
                </Link>
              </span>
            </p>
          )}
          {!!investigador.info.scholarGoogle && (
            <p>
              Scholar Google:{" "}
              <Link
                rel="stylesheet"
                href={investigador.info.scholarGoogle.link}
              >
                {investigador.info.scholarGoogle.id}
              </Link>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
