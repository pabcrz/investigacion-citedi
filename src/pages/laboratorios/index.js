import equipos from "/public/main/equipos.svg";
import { laboratorios } from "@/lib/laboratorios";
import Image from "next/image";
import Link from "next/link";
import { investigadores } from "@/lib/investigadores";

export default function Laboratorios() {
  return (
    <main className="w-full flex flex-col gap-10 items-center">
      <section className="w-full bg-[#333333] flex justify-center text-white">
        <div className="max-w-max-content flex flex-col gap-4 px-4 md:px-8 py-8">
          <Image src={equipos} alt="mision" className="size-16" />
          <h2 className="font-semibold text-xl">Laboratorios</h2>
          <p>
            Actualmente, la investigación en CITEDI se desarrolla en ocho
            laboratorios que cuentan con infraestructura y equipamiento
            especializado en las áreas del conocimiento que son competencia de
            este Centro.
          </p>
        </div>
      </section>
      <div className="max-w-max-content">
        <div className="sm:px-8 flex flex-col gap-4">
          <table>
            <thead>
              <tr className="bg-primary text-white">
                <th className="border sm:px-2">No.</th>
                <th className="border">Nombre del Laboratorio</th>
                <th className="border">Responsable</th>
                <th className="border sm:px-2">Correo Electrónico</th>
              </tr>
            </thead>
            <tbody>
              {laboratorios.map((lab, i) => {
                // Buscar el responsable en la lista de investigadores
                const responsable = investigadores.find(
                  (inv) => inv.id === lab.responsable
                );

                return (
                  <tr key={i} className={i % 2 === 1 ? "bg-gray-100" : ""}>
                    <td className="px-1 text-center">{lab.id}</td>
                    <td className="px-1">
                      <Link
                        href={`/laboratorios/${lab.id}`}
                        className="hover:text-blue-700"
                      >
                        {lab.name}
                      </Link>
                    </td>
                    <td className="px-1">
                      <Link
                        href={`/investigadores/${responsable.id}`}
                        className="hover:text-blue-700"
                      >
                        {responsable.name}
                      </Link>
                    </td>
                    <td className="px-1">{responsable.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
