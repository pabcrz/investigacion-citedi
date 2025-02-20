import Link from "next/link";
import { areas } from "../../lib/data";
import Image from "next/image";

export default function Areas() {
  return (
    <>
      {areas.map((area, i) => (
        <Link
          key={i}
          href={`/lgac/${i}`}
          className="group hover:shadow-xl transition-shadow flex flex-col items-center w-[70%] md:max-w-[30%] rounded-3xl shadow overflow-hidden"
        >
          <div className="relative w-full overflow-hidden">
            <Image
              src={area.img}
              alt={area.title}
              width={320}
              height={100}
              className="w-full object-cover group-hover:scale-110 transition-transform duration-200"
            />
          </div>
          <div className="rounded-full size-16 bg-primary/90 flex items-center justify-center -mt-4 z-10">
            <Image
              src={area.icon}
              alt={area.alt}
              role="img"
              aria-hidden="true"
              width={32}
              height={32}
              className="size-8"
            />
          </div>
          <p className="p-4">{area.title}</p>
        </Link>
      ))}
    </>
  );
}
