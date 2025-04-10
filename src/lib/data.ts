import { Card, Area, AboutItem } from './types';

export const cards: Card[] = [
  {
    title: "Card 1",
    items: [
      {
        content:
          "<span>Investigadores</span> que conforman la planta académica.",
        numbers: 22,
        img: "/main/grafica1.png",
      },
    ],
    color: "#3F3F3F",
  },
  {
    title: "Card 2",
    items: [
      {
        content:
          "Investigadores en el <span>Sistema Nacional de Investigadoras e Investigadores (SNII).</span>",
        numbers: 10,
        img: "/main/grafica2.png",
      },
    ],
    color: "#A37D00",
  },
  {
    title: "Card 3",
    items: [
      {
        content:
          "<span>Proyectos de investigación</span> realizados con financiamiento interno y externo (2019-2024).",
        numbers: 132,
      },
      {
        content:
          "<span>Artículos científicos</span> publicados en revistas <span>JCR.</span> (2019-2024).",
        numbers: 147,
      },
      {
        content:
          "<span>Distinciones</span> otorgradas a investigadores (2016-2024).",
        numbers: 8,
      },
    ],
    color: "#650032",
  },
  {
    title: "Card 4",
    items: [
      {
        content:
          "<span>Patentes</span> concedidas y se encuentran en proceso de registro 5 invenciones.",
        numbers: 5,
      },
      {
        content:
          "<span>Certificados</span> de Registro Público del <span>Derecho de Autor</span> otorgados por INDAUTOR.",
        numbers: 93,
      },
    ],
    color: "#1F3763",
  },
  {
    title: "Card 5",
    items: [
      {
        content:
          "Investigadores del programa de <span>Cátedras Conahcyt</span> quienes pertenecen al SNII.",
        numbers: 3,
      },
      {
        content: "<span>Estancias Posdoctorales por México 2024.</span>",
        numbers: 1,
      },
      {
        content:
          "Académicos del país y del extranjero en <span>Estancias de Investigación</span> (2019-2024).",
        numbers: 17,
      },
    ],
    color: "#833C0B",
  },
  {
    title: "Card 6",
    items: [
      {
        content:
          "<span>Acciones de internacionalización</span> por investigadores y alumnos (2016-2024).",
        numbers: 331,
      },
      {
        content:
          "<span>Países</span> con quienes se ha colaborado en difrenetes actividades científicas (2016-2024).",
        numbers: 31,
      },
    ],
    color: "#538135",
  },
];

export const areas: Area[] = [
  {
    title: "Sistemas Dinámicos y Control en Tecnologías Emergentes",
    img: "/main/control3.jpg",
    icon: "/main/control.svg",
    content: [
      "El grupo investiga metodologías y diseños de controladores robustos basados en H-infinito no lineal y estructura variable, para casos en los que el modelo no es conocido o cuando es obligatorio considerar la dinámica de los actuadores. Las aplicaciones se encuentran en péndulos invertidos, vehículos aéreos y espaciales y en general en sistemas mecánicos.",
      "También se estudian las técnicas de control inteligente basadas en lógica difusa tipo 2 y similares, con aplicaciones a la planeación segura y eficiente de trayectorias de robots móviles, y al diseño de controladores de sistemas electromecánicos.",
      "Adicionalmente, se lleva a cabo investigación científica básica en el análisis modelos dinámicos de crecimiento tumoral, con la finalidad de determinar las condiciones que conducen a su eliminación.",
    ],
    labs: [1, 2],
    descripcion:
      "El 75% de los docentes adscritos a esta línea de investigación pertenece al SNII, quienes trabajan en las áreas de sistemas mecatrónicos complejos, navegación de vehículos y medicina matemática.",
    investigadores: [1, 2, 3, 11],
  },
  {
    title: "Cómputo Inteligente de Alto Rendimiento",
    img: "/main/computo3.jpg",
    icon: "/main/computo.svg",
    content: [
      "El trabajo de investigación de la LGAC se concentra principalmente en las áreas de control inteligente, sistemas inteligentes cuánticos y procesamiento cuántico de señales, planeación de trayectoria, automóviles autónomos, y sistemas farmacobiológicos. Se realiza investigación básica de frontera aplicada.",
      "Se desarrollan algoritmos híbridos que combinan diversas técnicas como lógica difusa, redes neuronales, algoritmos evolutivos y de comportamiento social. Los algoritmos desarrollados se prueban en sistemas basados en FPGAs, procesadores multinúcleo y GPUs.",
    ],
    labs: [3, 7],
    descripcion:
      "El 25% de los docentes adscritos a esta línea de investigación pertenece al SNII, cuyas investigaciones se centran en las áreas de sistemas de inspiración cuántica, ciencia de datos e innovación social.",
    investigadores: [4, 9, 15, 16, 17, 18, 19, 22],
  },

  {
    title: "Tecnologías de Imagen y Telecomunicaciones Modernas",
    img: "/main/modernas2.jpg",
    icon: "/main/modernas.svg",
    content: [
      "Un grupo diverso de investigadores trabaja en las áreas de: sistemas avanzados de procesamiento de imágenes y reconocimiento de patrones, donde se desarrollan algoritmos y arquitecturas digitales de tipo FPGA y GPU para aplicaciones tales como mejoramiento de la visibilidad en tiempo real en la presencia de neblina, reconocimiento y seguimiento de objetos en el espacio 3D, reconocimiento de rostros y reconocimiento de emociones a través de la expresión facial.",
      "Además, se desarrollan investigaciones de diseño y modelado de circuitos y sistemas para telecomunicaciones; tecnología de percepción remota en el espectro visible y VNIR para nanosatélites; reconocimiento de iris bajo condiciones ambientales no controladas y distancia media; e indización de contenidos multimedios para la preservación de la herencia cultural.",
    ],
    labs: [4, 5, 8, 6],
    descripcion:
      "El 40% de los docentes adscritos a esta línea de investigación pertenece al SNII, cuyas investigaciones se centran en las áreas de procesamiento opto-digital de imágenes, inteligencia artificial aplicada a la salud humana, redes de telecomunicaciones de última generación e internet de las cosas.",
    investigadores: [5, 6, 8, 12, 10, 13, 14, 20, 21, 7],
  },
];

export const about: AboutItem[] = [
  {
    title: "Misión y Visión",
    icon: "/main/mision.svg",
    href: "/conocenos",
  },
  {
    title: "Investigadores",
    icon: "/main/investigacion.svg",
    href: "/investigadores",
  },
  {
    title: "Productos académicos",
    icon: "/main/productos.svg",
    href: "/#",
  },
  {
    title: "Proyectos de Investigación",
    icon: "/main/proyectos.svg",
    href: "/#",
  },
  {
    title: "Equipos y Laboratorios",
    icon: "/main/equipos.svg",
    href: "/laboratorios",
  },
  {
    title: "Propiedad intelectual",
    icon: "/main/propiedad.svg",
    href: "/#",
  },
  {
    title: "Estancias académicas",
    icon: "/main/estancias.svg",
    href: "/#",
  },
  {
    title: "Acciones de colaboración",
    icon: "/main/colaboracion.svg",
    href: "/#",
  },
];
