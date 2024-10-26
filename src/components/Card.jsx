import React from "react";
import { cards } from "../lib/data";

export default function Card() {
  return (
    <div className="w-max-content flex flex-wrap gap-8 justify-center">
      {cards.map((card, i) => (
        <div
          className={`border-4 rounded-3xl p-4 w-80 h-80`}
          key={i}
          style={{
            borderColor: card.color, // Asignar el color al borde
          }}
        >
          <div className="flex flex-col justify-evenly h-full">
            {card.items.map((item, i) => (
              <div className="flex justify-between gap-4 items-center" key={i}>
                <p
                  className={`rounded-full min-w-20 size-20 border flex items-center justify-center text-white text-wrap`}
                  style={{
                    backgroundColor: card.color, // Asignar el color como fondo
                    fontSize: 2.5 + "rem", // Asignar el tamaño de la fuente
                    lineHeight: 0 + "px", // Asignar el alto de la línea
                  }}
                >
                  {item.numbers}
                </p>
                <p
                  className="w-auto text-sm"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
