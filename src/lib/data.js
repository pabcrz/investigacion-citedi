import { lazy } from "react";

export const cards = [
  {
    title: "Card 1",
    items: [
      {
        content:
          "<span>Investigadores</span> que conforman la planta académica.",
        numbers: 24,
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
        numbers: 11,
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
          "<span>Proyectos de investigación</span> realizados con financiamiento interno o externo (2016-2023).",
        numbers: 132,
      },
      {
        content:
          "<span>Artículos científicos</span> publicados en revistas <span>JCR.</span>",
        numbers: 191,
      },
      {
        content:
          "<span>Distinciones</span> otorgradas a investigadores (2016-2023).",
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
        numbers: 212,
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
          "Académicos del país y del extranjero en <span>Estancias de Investigación</span> (2016-2023).",
        numbers: 23,
      },
    ],
    color: "#833C0B",
  },
  {
    title: "Card 6",
    items: [
      {
        content:
          "<span>Acciones de internacionalización</span> por investigadores y alumnos (2016-2023).",
        numbers: 281,
      },
      {
        content:
          "<span>Países</span> con quienes se ha colaborado en difrenetes actividades científicas (2016-2023).",
        numbers: 30,
      },
    ],
    color: "#538135",
  },
];

export const areas = [
  {
    title: "Sistemas Dinámicos y Control en Tecnologías Emergentes",
    img: "/main/control3.jpg",
    icon: "/main/control.svg",
    content: [
      "El grupo investiga metodologías y diseños de controladores robustos basados en H-infinito no lineal y estructura variable, para casos en los que el modelo no es conocido o cuando es obligatorio considerar la dinámica de los actuadores. Las aplicaciones se encuentran en péndulos invertidos, vehículos aéreos y espaciales y en general en sistemas mecánicos.",
      "También se estudian las técnicas de control inteligente basadas en lógica difusa tipo 2 y similares, con aplicaciones a la planeación segura y eficiente de trayectorias de robots móviles, y al diseño de controladores de sistemas electromecánicos.",
      "Adicionalmente, se lleva a cabo investigación científica básica en el análisis modelos dinámicos de crecimiento tumoral, con la finalidad de determinar las condiciones que conducen a su eliminación.",
    ],
    lab: ["Control", "Control Robusto"],
    descripcion:
      "El 75% de los docentes adscritos a esta línea de investigación pertenece al SNII, quienes trabajan en las áreas de sistemas mecatrónicos complejos, navegación de vehículos y medicina matemática.",
    investigadores: [
      "Dr. Konstantin Starkov",
      "Dr. Eduardo Javier Moreno Valenzuela",
      "Dr. Luis Tupak Aguilar Bustos",
      "Dr. Luis Arturo González Hernández",
    ],
  },
  {
    title: "Cómputo Inteligente de Alto Rendimiento",
    img: "/main/computo3.jpg",
    icon: "/main/computo.svg",
    content: [
      "El trabajo de investigación de la LGAC se concentra principalmente en las áreas de control inteligente, sistemas inteligentes cuánticos y procesamiento cuántico de señales, planeación de trayectoria, automóviles autónomos, y sistemas farmacobiológicos. Se realiza investigación básica de frontera aplicada.",
      "Se desarrollan algoritmos híbridos que combinan diversas técnicas como lógica difusa, redes neuronales, algoritmos evolutivos y de comportamiento social. Los algoritmos desarrollados se prueban en sistemas basados en FPGAs, procesadores multinúcleo y GPUs.",
    ],
    lab: ["Cómputo Inteligente de Alto Rendimiento", "Ciencia de Datos"],
    descripcion:
      "El 25% de los docentes adscritos a esta línea de investigación pertenece al SNII, cuyas investigaciones se centran en las áreas de sistemas de inspiración cuántica, ciencia de datos e innovación social.",
    investigadores: [
      "Dr. Oscar Humberto Montiel Ross",
      "Dr. Juan José Tapia Armenta",
      "Dr. Moisés Sánchez Adame",
      "Dra. Isaura González Rubio Acosta",
      "M. en C. Teodoro Álvarez Sánchez",
      "M. en C. Adolfo Esquivel Martínez",
      "M. en C. David Jaime Saucedo Martínez",
      "Esp. Eduardo Barba Cervantes",
    ],
  },

  {
    title: "Tecnologías de Imagen y Telecomunicacioens Modernas",
    img: "/main/modernas2.jpg",
    icon: "/main/modernas.svg",
    content: [
      "Un grupo diverso de investigadores trabaja en las áreas de: sistemas avanzados de procesamiento de imágenes y reconocimiento de patrones, donde se desarrollan algoritmos y arquitecturas digitales de tipo FPGA y GPU para aplicaciones tales como mejoramiento de la visibilidad en tiempo real en la presencia de neblina, reconocimiento y seguimiento de objetos en el espacio 3D, reconocimiento de rostros y reconocimiento de emociones a través de la expresión facial.",
      "Además, se desarrollan investigaciones de diseño y modelado de circuitos y sistemas para telecomunicaciones; tecnología de percepción remota en el espectro visible y VNIR para nanosatélites; reconocimiento de iris bajo condiciones ambientales no controladas y distancia media; e indización de contenidos multimedios para la preservación de la herencia cultural.",
    ],
    lab: [
      "Telecomunicaciones",
      "Procesamiento de Imágenes",
      "Tecnología de Percepción Remota e Internet de las Cosas",
      "Análisis Multimedia y Aprendizaje Profundo",
    ],
    descripcion:
      "El 40% de los docentes adscritos a esta línea de investigación pertenece al SNII, cuyas investigaciones se centran en las áreas de procesamiento opto-digital de imágenes, inteligencia artificial aplicada a la salud humana, redes de telecomunicaciones de última generación e internet de las cosas.",
    investigadores: [
      "Dr. José Cruz Núñez Pérez",
      "Dr. Víctor Hugo Díaz Ramírez",
      "Dra. Mireya Saraí García Vázquez",
      "Dr. Ciro Andrés Martínez García Moreno",
      "Dr. Sergio Jesús González Ambriz",
      "Dr. Julio César Rolón Garrido",
      "Dr. Roberto Herrera Charles",
      "M. en C. Andrés Calvillo Téllez",
      "M. en C. Luis Miguel Zamudio Fuentes",
      "Dr. Rigoberto Juárez Salazar (Investigador Cátedra Conahcyt)",
    ],
  },
];

export const about = [
  {
    title: "Misión y Visión",
    icon: "/main/mision.svg",
  },
  {
    title: "Investigadores",
    icon: "/main/investigacion.svg",
  },
  {
    title: "Productos académicos",
    icon: "/main/productos.svg",
  },
  {
    title: "Proyectos de Investigación",
    icon: "/main/proyectos.svg",
  },
  {
    title: "Equipos y Laboratorios",
    icon: "/main/equipos.svg",
  },
  {
    title: "Propiedad intelectual",
    icon: "/main/propiedad.svg",
  },
  {
    title: "Estancias académicas",
    icon: "/main/estancias.svg",
  },
  {
    title: "Acciones de colaboración",
    icon: "/main/colaboracion.svg",
  },
];

export const investigadores = [
  {
    name: "Dr. Konstantin Starkov",
    email: "konst@citedi.mx",
    level: "III",
  },
  {
    name: "Dr. Eduardo Javier Moreno Valenzuela",
    email: "moreno@citedi.mx",
    level: "III",
  },
  {
    name: "Dr. Luis Tupak Aguilar Bustos",
    email: "laguilar@citedi.mx",
    level: "II",
  },
  {
    name: "Dr. Oscar Humberto Montiel Ross",
    email: "oross@citedi.mx",
    level: "II",
  },
  {
    name: "Dr. José Cruz Núñez Pérez",
    email: "nunez@citedi.mx",
    level: "II",
  },
  {
    name: "Dr. Víctor Hugo Díaz Ramírez",
    email: "vhdiaz@citedi.mx",
    level: "II",
  },
  {
    name: "Dr. Rigoberto Juárez Salazar",
    email: "rjuarez@citedi.mx",
    level: "II",
  },
  {
    name: "Dra. Mireya Saraí García Vázquez",
    email: "mgarciav@citedi.mx",
    level: "I",
  },
  {
    name: "Dr. Juan José Tapia Armenta",
    email: "jjtapia@citedi.mx",
    level: "I",
  },
  {
    name: "Dr. Sergio Jesús González Ambriz",
    email: "sgonzalez@citedi.mx",
    level: "C",
  },
  {
    name: "Dr. Luis Arturo González Hernández",
    email: "lgonzal@citedi.mx",
    level: "",
  },
  {
    name: "Dr. Ciro Andrés Martínez García Moreno",
    email: "ciro@citedi.mx",
    level: "",
  },
  {
    name: "Dr. Julio César Rolón Garrido",
    email: "jcrolon@citedi.mx",
    level: "",
  },
  {
    name: "Dr. Roberto Herrera Charles",
    email: "robccharles@citedi.mx",
    level: "",
  },
  { name: "Dr. Moisés Sánchez Adame", email: "msanchez@citedi.mx", level: "" },
  {
    name: "Dra. Isaura González Rubio Acosta",
    email: "isaura@citedi.mx",
    level: "",
  },
  {
    name: "M. en C. Teodoro Álvarez Sánchez",
    email: "talvarez@citedi.mx",
    level: "",
  },
  {
    name: "M. en C. Adolfo Esquivel Martínez",
    email: "esquivel@citedi.mx",
    level: "",
  },
  {
    name: "M. en C. David Jaime Saucedo Martínez",
    email: "dsaucedo@citedi.mx",
    level: "",
  },
  {
    name: "M. en C. Andrés Calvillo Téllez",
    email: "calvillo@citedi.mx",
    level: "",
  },
  {
    name: "M. en C. Luis Miguel Zamudio Fuentes",
    email: "lmzamudio@citedi.mx",
    level: "",
  },
  {
    name: "Esp. Eduardo Barba Cervantes",
    email: "ebarba@citedi.mx",
    level: "",
  },
];
