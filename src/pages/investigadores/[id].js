import { useRouter } from "next/router";
import { investigadores } from "@/lib/investigadores";
import Link from "next/link";

export default function InvestigadorDetalle() {
  const router = useRouter();
  const { id } = router.query;

  const investigador = investigadores.find((inv) => inv.id === id);

  if (!investigador) {
    return <h1>Investigador no encontrado</h1>;
  }

  return (
    <div>
      <h1>{investigador.nombre}</h1>
      <p>Especialidad: {investigador.especialidad}</p>
      <Link href="/investigadores">Volver a la lista</Link>
    </div>
  );
}
