import { useRouter } from "next/router";
import { laboratorios } from "@/lib/laboratorios";
import { investigadores } from "@/lib/investigadores";
import Link from "next/link";

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

  if (!laboratorio) {
    return <h1>laboratorio no encontrado</h1>;
  }

  return (
    <div>
      <h1>Laboratorio de {laboratorio.name}</h1>
      <p>responsable: {investigador.name}</p>
      <Link href="/laboratorios">Volver a la lista</Link>
    </div>
  );
}
