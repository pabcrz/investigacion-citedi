import { laboratorios } from "@/lib/laboratorios";

export default function Laboratorios() {
  return (
    <main className="w-full">
      <section className="flex flex-col justify-center max-w-[1280px] mx-auto">
        <h2 className="font-semibold text-xl">Laboratorios</h2>
        <p>
          Actualmente, la investigación en CITEDI se desarrolla en ocho
          laboratorios que cuentan con infraestructura y equipamiento
          especializado en las áreas del conocimiento que son competencia de
          este Centro.
        </p>
        <table className="border-collapse border border-black">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nombre del Laboratorio</th>
              <th>Responsable</th>
              <th>Correo Electrónico</th>
            </tr>
          </thead>
          <tbody>
            {laboratorios.map((lab, i) => (
              <tr key={i}>
                <td>{lab.num}</td>
                <td>{lab.lab}</td>
                <td>{lab.responsable}</td>
                <td>{lab.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
