import { useRouter } from "next/router";
import { laboratorios } from "@/lib/laboratorios";
import Link from "next/link";

export default function LaboratorioDetalle() {
  const router = useRouter();
  const { id } = router.query;

  const laboratorio = laboratorios.find((lab) => lab.id === id);

  if (!laboratorio) {
    return <h1>laboratorio no encontrado</h1>;
  }

  return (
    <div>
      <h1>{laboratorio.lab}</h1>
      <p>responsable: {laboratorio.responsable}</p>
      <Link href="/laboratorios">Volver a la lista</Link>
    </div>
  );
}
