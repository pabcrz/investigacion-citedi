import dynamic from "next/dynamic";
import { useState, useEffect, JSX } from "react";
import { cards } from "@/lib/data";
import Image from "next/image";
import { CardItem } from "../../types/types";

const DOMPurify = dynamic(() => void import("dompurify"), { ssr: false });

// Definición de tipos para el estado de hoveredContent
interface HoveredContent {
  content: string | null;
  imageUrl: string | null;
  cardIndex: number;
  itemIndex: number;
}

export default function Card(): JSX.Element {
  const [hoveredContent, setHoveredContent] = useState<HoveredContent[]>(
    cards.map((card) => ({
      content: card.items[0]?.content || null,
      imageUrl: card.items[0]?.img || null,
      cardIndex: cards.indexOf(card),
      itemIndex: 0,
    }))
  );

  const handleMouseEnter = (
    content: string,
    imageUrl: string | undefined,
    cardIndex: number,
    itemIndex: number
  ): void => {
    setHoveredContent((prev) =>
      prev.map((item) =>
        item.cardIndex === cardIndex
          ? { content, imageUrl: imageUrl || null, cardIndex, itemIndex }
          : item
      )
    );
  };

  // Cargar DOMPurify dinámicamente
  const [sanitizer, setSanitizer] = useState<((html: string) => string) | null>(
    null
  );
  useEffect(() => {
    const loadSanitizer = async (): Promise<void> => {
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
          className="p-4 w-80 h-96 flex flex-col gap-4 items-center justify-center bg-white rounded-3xl hover:shadow-xl"
        >
          <div className="flex justify-around w-full">
            {card.items.map((item: CardItem, itemIndex: number) => {
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
                  ?.imageUrl || ""
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
