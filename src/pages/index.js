import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/main/Hero";
import Card from "@/components/main/Card";
import Areas from "@/components/main/Areas";
import About from "@/components/main/About";
import Direction from "@/components/main/Direction";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Hero />
      <main className="w-full">
        <section className="w-full py-14 flex justify-center">
          <p className="text-fluid-md w-max-content px-8">
            La investigación científica que se desarrolla en CITEDI se agrupa en
            líneas de generación y aplicación del conocimiento (LGAC) que
            permite concentrar nuestros esfuerzos de investigación y de
            formación de capital humano de nivel posgrado para obtener
            resultados con mayor impacto científico, tecnológico y social.
          </p>
        </section>
        <section className="w-full py-14 flex justify-center px-8 bg-[#01876B]">
          <div className="w-max-content flex flex-wrap gap-4 justify-center">
            <Card />
          </div>
        </section>
        <section className="w-full bg-primary py-14 flex justify-center text-white px-8">
          <div className="text-fluid-md w-max-content px-8 flex flex-col gap-3">
            <h3 className="text-3xl font-semibold">
              Líneas de generación y aplicación del conocimiento (LGAC)
            </h3>
            <p>
              La investigación científica que se desarrolla en CITEDI se agrupa
              en torno a tres líneas de investigación principales, también
              conocidas como líneas de generación y aplicación del conocimiento
              (LGAC). Este agrupamiento nos permite concentrar nuestros
              esfuerzos de investigación y de formación de capital humano de
              nivel posgrado y obtener de esa manera resultados con mayor
              impacto científico, tecnológico y social.
            </p>
          </div>
        </section>
        <section className="w-full flex justify-center py-14">
          <div className="text-fluid-md w-max-content flex flex-wrap gap-2 text-center font-bold justify-center">
            <Areas />
          </div>
        </section>
        <section className="w-full flex justify-center py-14 bg-[#323232]">
          <About />
        </section>
        <section className="w-full px-8 py-14 bg-tertiary flex justify-center">
          <Direction />
        </section>
      </main>
    </>
  );
}
