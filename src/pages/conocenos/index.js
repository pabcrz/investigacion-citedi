import Image from "next/image";
import mision from "/public/main/mision.svg";
import Hero from "@/components/main/Hero";

export default function Conocenos() {
  return (
    <>
      <Hero />
      <main className="w-full flex flex-col gap-10 items-center">
        <section className="w-full bg-[#333333] flex justify-center text-white">
          <div className="max-w-max-content flex flex-col gap-4 px-4 md:px-8 py-8">
            <Image src={mision} alt="mision" className="size-16" />
            <h3 className="text-fluid-md">Nuestra Misión</h3>
            <p>
              Somos un Centro de investigación científica y desarrollo
              tecnológico del IPN que, a través de programas pertinentes,
              genera, difunde y divulga conocimiento en sistemas digitales;
              forma profesionales a nivel posgrado y científicos de excelencia;
              y contribuye al desarrollo científico, tecnológico y económico de
              la sociedad a nivel regional, nacional y global.
            </p>
            <h3 className="text-fluid-md">Nuestra visión </h3>
            <p>
              En el 2030, el Citedi será un centro líder, altamente competitivo
              en ciencia y tecnología con prestigio internacional y posgrados de
              calidad; actor determinante en el desarrollo científico,
              tecnológico y económico sustentable, con compromiso y
              responsabilidad sociales.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
