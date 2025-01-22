import GeneralInfo from "@/components/lgac/GeneralInfo";
import { areas } from "../../lib/data";
import Image from "next/image";

export default function LGAC() {
  return (
    <>
      <section className="w-full bg-primary py-14 flex justify-center text-white md:px-8">
        <p className="text-fluid-md w-max-content px-8">
          <span className="text-3xl">
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

      <section className="w-full py-14 flex justify-center px-8">
        <div className="flex flex-col w-max-content md:py-14 justify-center md:px-8 text-fluid-md gap-8 md:gap-4 text-center font-bold ">
          {areas.map((area, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 items-center md:px-8 rounded"
            >
              <h2 className="">{area.title}</h2>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-justify">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={area.img}
                    alt={area.title}
                    width={200}
                    height={200}
                    className="shadow-lg"
                  />
                  <div className="rounded-full size-16 bg-primary/90 flex items-center justify-center -mt-4">
                    <Image
                      src={area.icon}
                      alt={area.alt}
                      width={32}
                      height={32}
                      role="img"
                      aria-hidden="true"
                      className="size-8"
                    />
                  </div>
                </div>
                <p className="text-lg font-normal md:max-w-[70%]">
                  {area.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-green py-14 flex flex-col gap-10 items-center text-white md:px-8">
        <GeneralInfo />
      </section>
    </>
  );
}
