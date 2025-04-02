import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { areas } from "@/lib/data";
import { investigadores } from "@/lib/investigadores";
import { laboratorios } from "@/lib/laboratorios";
import Image from "next/image";
import Link from "next/link";

export default function LGAC() {
  const router = useRouter();
  const [selectedAreaIndex, setSelectedAreaIndex] = useState(0);

  useEffect(() => {
    // Obtener el parámetro de la URL
    const areaIndex = parseInt(router.query.area, 10);
    if (!isNaN(areaIndex) && areaIndex >= 0 && areaIndex < areas.length) {
      setSelectedAreaIndex(areaIndex);
    }
  }, [router.query.area]);

  return (
    <>
      <section className="w-full bg-primary py-14 flex justify-center text-white md:px-8">
        <p className="text-fluid-md w-max-content px-8">
          <span className="text-3xl font-bold">
            Líneas de generación y aplicación del conocimiento (LGAC)
          </span>
          <br />
          La investigación científica que se desarrolla en CITEDI se agrupa en
          torno a tres líneas de investigación principales, también conocidas
          como líneas de generación y aplicación del conocimiento (LGAC). Este
          agrupamiento nos permite concentrar nuestros esfuerzos de
          investigación y de formación de capital humano de nivel posgrado y
          obtener de esa manera resultados con mayor impacto científico,
          tecnológico y social.
        </p>
      </section>

      <section className="w-full flex justify-center px-8">
        <div className="flex flex-col w-max-content py-14 justify-center md:px-8 text-fluid-md gap-8 md:gap-4 text-center font-bold">
          {areas.map((area, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 items-center md:px-8 rounded"
            >
              <h2
                onClick={() =>
                  setSelectedAreaIndex(i === selectedAreaIndex ? null : i)
                }
                className="cursor-pointer hover:text-primary"
              >
                {area.title} <br />
                {/* <span className="text-sm text-gray-600">
                  {selectedAreaIndex === i
                    ? ""
                    : "(Ver más información sobre esta LGAC)"}
                </span> */}
              </h2>

              {selectedAreaIndex === i && (
                <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 text-justify">
                  <div className="space-y-4">
                    {area.content.map((p, i) => (
                      <p className="text-lg font-normal" key={i}>
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-shrink-0 flex-col justify-center items-center">
                    <Image
                      src={area.img}
                      alt={area.title}
                      width={250}
                      height={200}
                      quality={100}
                      className="shadow-lg object-cover"
                    />
                    <div className="rounded-full size-16 bg-primary/90 flex items-center justify-center -mt-4">
                      <Image
                        src={area.icon}
                        alt={area.alt}
                        width={32}
                        height={32}
                        quality={100}
                        role="img"
                        aria-hidden="true"
                        className="size-8"
                      />
                    </div>
                  </div>
                </div>
              )}

              {selectedAreaIndex === i && (
                <div className="text-start space-y-2">
                  <p className="font-semibold text-lg">
                    Esta LGAC cuenta con {area.labs.length} laboratorios:
                  </p>
                  <ul className="list-decimal list-inside">
                    {area.labs.map((labId, i) => {
                      const laboratorio = laboratorios.find(
                        (lab) => lab.id === labId
                      );
                      return (
                        <li
                          key={i}
                          className="font-normal text-lg hover:text-primary"
                        >
                          <Link href={`/laboratorios/${labId}`}>
                            {laboratorio
                              ? laboratorio.name
                              : "Laboratorio no encontrado"}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="font-normal text-lg pt-2">{area.descripcion}</p>
                  <ul className="list-disc list-inside">
                    {area.investigadores.map((investigadorId, i) => {
                      const investigador = investigadores.find(
                        (inv) => inv.id === investigadorId
                      );
                      return (
                        <li
                          key={i}
                          className="font-normal text-lg hover:text-primary"
                        >
                          <Link href={`/investigadores/${investigadorId}`}>
                            {investigador
                              ? investigador.name
                              : "Investigador no encontrado"}
                            {investigador.investigador && (
                              <span className="text-sm font-light">
                                {" "}
                                {investigador.investigador}
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
