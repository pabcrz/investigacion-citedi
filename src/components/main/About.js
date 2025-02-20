import Link from "next/link";
import { about } from "../../lib/data";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="w-max-content grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 text-white">
        {about.map((card, i) => (
          <Link
            key={i}
            className="flex items-center flex-col text-center"
            href={card.href}
          >
            <div className="border-4 rounded-full p-4 size-20 bg-[#01876B] flex flex-wrap">
              <Image
                src={card.icon}
                aria-hidden="true"
                alt="1"
                height={50}
                width={50}
              />
            </div>
            <p>{card.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
