import Image from "next/image";
import mision from "/public/main/mision.svg";

export default function Conocenos() {
  return (
    <div className="max-w-max-content">
      <div className=" md:px-8 flex flex-col gap-4">
        <Image src={mision} alt="mision" className="size-16" />
        <h3 className="text-fluid-md">Nuestra Misión</h3>
        <p>
          Somos un Centro de investigación científica y desarrollo tecnológico
          del IPN que, a través de programas pertinentes, genera, difunde y
          divulga conocimiento en sistemas digitales; forma profesionales a
          nivel posgrado y científicos de excelencia; y contribuye al desarrollo
          científico, tecnológico y económico de la sociedad a nivel regional,
          nacional y global.
        </p>
        <h3 className="text-fluid-md">Nuestra visión </h3>
        <p>
          En el 2030, el Citedi será un centro líder, altamente competitivo en
          ciencia y tecnología con prestigio internacional y posgrados de
          calidad; actor determinante en el desarrollo científico, tecnológico y
          económico sustentable, con compromiso y responsabilidad sociales.
        </p>
      </div>
    </div>
  );
}
