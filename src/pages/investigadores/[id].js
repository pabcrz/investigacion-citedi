import { useRouter } from "next/router";
import { investigadores } from "@/lib/investigadores";
import Link from "next/link";

export default function InvestigadorDetalle() {
  const router = useRouter();
  const { id } = router.query;

  const investigador = investigadores.find((inv) => inv.id === Number(id));

  if (!investigador) {
    return <h1>Investigador no encontrado</h1>;
  }

  return (
    <div>
      <h1>Investigador: {investigador.name}</h1>
      {!investigador.level ? null : <p>Nivel SNII: {investigador.level}</p>}
      <p>Correo: {investigador.email}</p>
      <Link href="/investigadores">Volver a la lista</Link>
    </div>
  );
}
