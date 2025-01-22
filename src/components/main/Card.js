import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { cards } from "../../lib/data";
import Image from "next/image";

const DOMPurify = dynamic(() => import("dompurify"), { ssr: false });

export default function Card() {
  const [hoveredContent, setHoveredContent] = useState(
    cards.map((card) => ({
      content: card.items[0]?.content || null,
      imageUrl: card.items[0]?.img || null,
      cardIndex: cards.indexOf(card),
      itemIndex: 0,
    }))
  );

  const handleMouseEnter = (content, imageUrl, cardIndex, itemIndex) => {
    setHoveredContent((prev) =>
      prev.map((item) =>
        item.cardIndex === cardIndex
          ? { content, imageUrl, cardIndex, itemIndex }
          : item
      )
    );
  };

  // Cargar DOMPurify dinámicamente
  const [sanitizer, setSanitizer] = useState(null);
  useEffect(() => {
    const loadSanitizer = async () => {
      const DOMPurifyModule = (await import("dompurify")).default;
      setSanitizer(() => DOMPurifyModule.sanitize);
    };
    loadSanitizer();
  }, []);

  return (
    <>
      {cards.map((card, cardIndex) => (
        <div
          key={cardIndex}
          className="p-4 w-80 h-96 flex flex-col gap-4 items-center justify-center bg-white shadow-sm rounded-xl"
        >
          <div className="flex justify-around w-full">
            {card.items.map((item, itemIndex) => {
              const isActive =
                hoveredContent.find(
                  (hovered) =>
                    hovered.cardIndex === cardIndex &&
                    hovered.itemIndex === itemIndex
                ) !== undefined;

              return (
                <div
                  key={itemIndex}
                  className="flex flex-col justify-center items-center"
                  onMouseEnter={() =>
                    handleMouseEnter(
                      item.content,
                      item.img,
                      cardIndex,
                      itemIndex
                    )
                  }
                >
                  <p
                    className={`rounded-full min-w-20 size-20 border-2 flex items-center justify-center text-4xl font-bold transition-transform duration-200 ${
                      isActive
                        ? "transform scale-110 text-primary border-primary"
                        : ""
                    }`}
                  >
                    {item.numbers}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contenido centrado debajo de los números */}
          <p
            className="w-full text-sm text-center min-h-16"
            dangerouslySetInnerHTML={{
              __html: sanitizer
                ? sanitizer(
                    hoveredContent.find((item) => item.cardIndex === cardIndex)
                      ?.content || ""
                  )
                : "",
            }}
          ></p>

          {/* Imagen debajo del contenido */}
          {hoveredContent.find((item) => item.cardIndex === cardIndex)
            ?.imageUrl && (
            <Image
              src={
                hoveredContent.find((item) => item.cardIndex === cardIndex)
                  .imageUrl
              }
              alt="Contenido relacionado"
              width={300}
              height={200}
              quality={100}
              className="w-auto h-1/2"
            />
          )}
        </div>
      ))}
    </>
  );
}
