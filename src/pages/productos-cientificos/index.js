import Hero from "@/components/main/Hero";
import { useState } from "react";
import { publicaciones } from "@/lib/publicaciones";

export default function ProductosCientificos() {
  const [year, setYear] = useState("2024");

  const publicacionesPorAño = publicaciones[0];
  const years = Object.keys(publicacionesPorAño).reverse();

  const publicationsByYear = publicacionesPorAño[year] || [];

  return (
    <>
      <section className="w-full bg-primary py-14 flex justify-center text-white md:px-8">
        <h1 className="text-3xl font-bold w-max-content px-8">
          Publicaciones Científicas y de Investigación del CITEDI - IPN
        </h1>
      </section>
      <section className="w-full flex justify-center px-8 py-4 bg-tertiary">
        <ul className="flex gap-1 flex-wrap justify-center">
          {years.map((y) => (
            <li
              key={y}
              className={`cursor-pointer rounded px-3 py-1 font-bold text-xl ${
                y === year
                  ? "bg-white text-primary shadow-lg"
                  : "hover:bg-white hover:text-primary hover:shadow-lg transition-all duration-200"
              }`}
              onClick={() => setYear(y)}
            >
              {y}
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full flex flex-col items-center px-8 md:px-16 py-4">
        {publicationsByYear.length > 0 ? (
          <ul className="w-full max-w-4xl space-y-6">
            {publicationsByYear.map((pub, idx) => (
              <li key={idx} className="border-b pb-4">
                {pub.enlace && (
                  <a
                    href={pub.enlace}
                    target="_blank"
                    className="text-blue-700 text-sm"
                  >
                    <h3 className="text-xl font-semibold">{pub.titulo}</h3>
                  </a>
                )}

                <p className="text-gray-600">{pub.autores}</p>
                <p className="text-gray-600">Revista: {pub.revista}</p>
                <p className="text-gray-600">Cuartil: {pub.cuartil}</p>
                <p className="text-gray-600">
                  Factor de impacto: {pub.factorImpacto}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay publicaciones para el año seleccionado.</p>
        )}
      </section>
    </>
  );
}
