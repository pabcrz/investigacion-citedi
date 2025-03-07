export const laboratorios = [
  {
    id: 1,
    name: "Control",
    responsable: 2,
    img: "",
    descripcion: [
      "Se estudia el modelado, diseño e implementación de sistemas de control en diversas aplicaciones. Se trabaja con controladores PID, óptimos y robustos, sistemas en tiempo real, microcontroladores, y control de sistemas mecatrónicos. Además, se exploran técnicas avanzadas para sistemas con restricciones, vehículos autónomos, y control inteligente en robótica y electrónica de potencia.",
      "Como parte de los proyectos de ciencia básica desarrollados, las investigaciones se enfocan a pruebas de concepto de control de sistema mecatrónicos, entre otros. ",
    ],
    equipo: [
      "Vehículo aéreo de 4 propelas Q-ball 2 con sistema de control asistido por visión.",
      "Asc Tec Hummingbird",
      "Pioneer 3-DX ",
      "QBot ",
    ],
    personal: {
      descripcion:
        "Los temas de interés del grupo de investigadores son los sistemas no lineales, sistemas complejos, mecatrónica y sistemas inteligentes; sistema de carga inalámbrica para vehículo aéreo no tripulado, automatización de información capturada en el prototipo de innovación de control de movimientos. Asimismo, se llevan a cabo estudios sobre modelado y diseño de controladores para generadores eólicos como generadores asíncronos de doble alimentación y generador de imán permanente; análisis y diseño de micro redes integradas por generación renovable y convencional.",
      academico: [
        {
          id: 2,
          cargo: "Responsable del laboratorio e investigador",
          estudio:
            "Doctor en Ciencias en Doctor en Ciencias en Control Automático",
          sumary:
            "Sistema Nacional de Investigadoras e Investigadores, nivel III",
        },
        {
          id: 11,
          cargo: "Investigador",
          estudio: "Doctor en Ciencias en Control Automático",
        },
      ],
      doctorado: ["M. Moran", "M. Martinez", "D. Hirales "],
      maestria: ["G. Madrid", "B. Afolabi", "G. de la Cruz"],
    },
    proyectos: {
      descripcion:
        "El quehacer científico está centrado en la generación de conocimiento básico y aplicado que se logra a través de la realización de proyectos de investigación, en temas de relevancia en el ámbito científico con aplicación en diferentes contextos. ",
      lista: [
        {
          nombre:
            "Diseño y pruebas de controladores robustos para un generador asíncrono de doble alimentación utilizado en un generador eólico.",
          periodo: "2023 - 2025",
          fuente: "CONAHCYT",
        },
        {
          nombre:
            "Nuevas metodologías de control para sistemas mecatrónicos sujetos a saturación.",
          periodo: "2019 - 2023",
          fuente: "CONAHCYT",
        },
        {
          nombre:
            "Innovaciones en el control robusto de sistemas no lineales con aplicaciones a sistemas mecatrónicos.",
          periodo: "2024",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Control proporcional, integral, y derivativo con compensación inteligente para sistemas mecatrónicos y electrónicos.",
          periodo: "2023",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Control proporcional, integral y derivativo de sistemas mecatrónicos.",
          periodo: "2022",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Estructuración, modelado, simulación y control de una microred para la casa sustentable del IPN.",
          periodo: "2022",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Control basado en pasividad con aplicaciones a sistemas mecánicos y electrónicos.",
          periodo: "2021",
          fuente: "SIP-IPN",
        },
        {
          nombre: "Control adaptable de sistemas mecatrónicos.",
          periodo: "2020",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Control de sistemas no lineales con limitaciones de entrada.",
          periodo: "2019",
          fuente: "SIP-IPN",
        },
      ],
    },
    publicaciones: {
      descripcion:
        "A continuación, se presenta un listado de la productividad científica más reciente lograda por el grupo de trabajo.  ",
      lista: [
        {
          titulo:
            "LSTM network in bilateral teleoperation of a skid-steering robot.",
          autores:
            "Emanuel Slawiñski, Francisco Rossomando, Fernando A. Chicaiza, Javier Moreno-Valenzuela, Vicente Mut",
          fecha: "2024",
          link: "https://doi.org/10.1016/j.neucom.2024.128248",
        },
        {
          titulo:
            "Static Anti-Windup for Global Regulation of Constrained Euler-Lagrange Systems.",
          autores:
            "Javier Moreno-Valenzuela, Mizraim Martinez Lopes, Jesús Sandoval",
          fecha: "2024",
          link: "https://doi.org/10.1109/TCSII.2024.3373455",
        },
        {
          titulo:
            "Global regulation of flexible joint robots with input saturation by nonlinear I-PID-type control.",
          autores: "J. Moyrón, J. Moreno-Valenzuela, J. Sandoval",
          fecha: "2024",
          link: "https://doi.org/10.1109/TCST.2024.3391129",
        },
        {
          titulo:
            "Limited Integrator Anti-Windup-Based Control of input constrained Manipulators.",
          autores:
            "Javier Moreno-Valenzuela, Jeronimo Moyron, Jorge Montoya-Chairez",
          fecha: "2024",
          link: "https://doi.org/10.1109/TIE.2023.3262858",
        },
        {
          titulo: "PID control of quadrotor UAVs: A survey.",
          autores: "Ivan Lopez Sanchez, Javier Moreno-Valenzuela",
          fecha: "2023",
          link: "https://doi.org/10.1016/j.arcontrol.2023.100900",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Control Robusto",
    responsable: 3,
    img: "",
    descripcion: [
      "El Laboratorio de Control Robusto cuenta con equipamiento moderno de adquisición de datos y plantas que pueden emular el comportamiento de cualquier sistema físico real. Los beneficios del laboratorio son la validación de nuevas teorías en sistemas de control y hacer pruebas en campo con equipo robusto como vehículos o grúas.",
    ],
    equipo: [
      "Carro péndulo de la compañía INTECO.",
      "Grúa de tres dimensiones de libertad de la compañía INTECO.",
      "Helicóptero tetra-rotor 'Asc-Tec Pelican'.",
      "Robot manipulador de cinco grados de libertad.",
      "Tarjetas de control Dspace.",
    ],
    personal: {
      descripcion:
        "El grupo de trabajo desarrolla metodologías y diseños de controladores robustos basados en H-infinito no lineal y estructura variable, para casos en los que el modelo no es conocido o cuando es obligatorio considerar la dinámica de los actuadores. Las aplicaciones del trabajo científico se pueden encontrar en péndulos invertidos, vehículos aéreos y espaciales y en general, en sistemas mecánicos.",
      academico: [
        {
          id: 3,
          cargo: "Responsable del laboratorio e investigador",
          estudio: "Doctor en Ciencias en Electrónica y Telecomunicaciones",
          sumary:
            "Sistema Nacional de Investigadoras e Investigadores, nivel II",
        },
      ],
      doctorado: ["J. Rodríguez"],
      maestria: ["R. Monroy"],
    },
    proyectos: {
      descripcion:
        "El quehacer científico está centrado en la generación de conocimiento básico y aplicado que se logra a través de la realización de proyectos de investigación, en temas de relevancia en el ámbito científico para la validación de nuevas teorías en sistemas de control y la aplicación en diferentes contextos.",
      lista: [
        {
          nombre:
            "Nueva generación de algoritmos de control en lazo cerrado para la regulación de glucosa en pacientes diabéticos usando modelos bio-inspirados.",
          periodo: "2018 - 2024",
          fuente: "CONAHCYT",
        },
        {
          nombre:
            "Caracterización, control y ciclos límites en electromovilidad con un enfoque de sistemas de dimensiones infinitas.",
          periodo: "2024",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Control, análisis de estabilidad y aplicaciones de auto-oscilaciones en sistemas dinámicos no suaves y complejos.",
          periodo: "2018-2022",
          fuente: "CONAHCYT",
        },
        {
          nombre:
            "Control y observación en problemas de sistemas con parámetros distribuidos y su aplicación en sistemas electromecánicos complejos (año 2).",
          periodo: "2023",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Control y observación en problemas de sistemas con parámetros distribuidos y su aplicación en sistemas electromecánicos complejos (año 1).",
          periodo: "2022",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Control de sistemas subactuados complejos: desde mecanismos con grado de subactuación mayor que uno hasta sistemas con parámetros distribuidos (año 2).",
          periodo: "2021",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Control de sistemas subactuados complejos: desde mecanismos con grado de subactuación mayor que uno hasta sistemas con parámetros distribuidos (año 1).",
          periodo: "2020",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Síntesis y análisis de controladores de mecanismos para las nuevas tecnologías de impresoras de tres dimensiones.",
          periodo: "2019",
          fuente: "SIP-IPN",
        },
      ],
    },
    publicaciones: {
      descripcion:
        "A continuación, se presenta un breve listado de la productividad científica más reciente lograda por el grupo de trabajo.",
      lista: [
        {
          titulo:
            "Scaling technique for prescribed-time output feedback stabilization: Autonomous and non-autonomous paradigms and their comparative study.",
          autores: "Yury Orlov, Ramón I. Verdés Kairuz, Luis T. Aguilar-Bustos",
          fecha: "2024",
          link: "https://doi.org/10.1016/j.jfranklin.2024.01.043",
        },
        {
          titulo:
            "Prescribed-time trajectory tracking control of wheeled mobile robots using neural networks and robust control techniques.",
          autores:
            "Jesús A. Rodríguez-Arellano, Víctor D. Cruz, Luis T. Aguilar, Roger Miranda Colorado",
          fecha: "2024",
          link: "https://doi.org/10.13053/CyS-28-2-5025",
        },
        {
          titulo:
            "Output–feedback stabilization control for a class of underactuated systems via high–order sliding modes identification and compensation.",
          autores:
            "Luis T. Aguilar, Alejandra Ferreira de Loza, Samy Kharuf Gutierrez",
          fecha: "2024",
          link: "https://doi.org/10.1016/j.jfranklin.2024.107186",
        },
        {
          titulo:
            "Robust output-feedback orbital stabilization for underactuated mechanical systems via high-order sliding modes.",
          autores:
            "Alejandra Ferreira de Loza, J.A. Ortega-Pérez, Luis T. Aguilar, R. Galván-Guerra",
          fecha: "2023",
          link: "https://doi.org/10.1016/j.nahs.2023.101351",
        },
        {
          titulo:
            "Trajectory tracking nonlinear H∞ controller for wheeled mobile robots with disturbances observer.",
          autores:
            "Jesús A. Rodríguez-Arellano, Roger Miranda-Colorado, Luis T. Aguilar-Bustos, M.A. Negrete-Villanueva",
          fecha: "2023",
          link: "https://doi.org/10.1016/j.isatra.2023.07.037",
        },
      ],
    },
  },

  {
    id: 3,
    name: "Cómputo Inteligente de Alto Rendimiento",
    responsable: 4,
    img: "",
    descripcion: [
      "Las investigaciones llevadas a cabo en el Laboratorio de Cómputo Inteligente de Alto Rendimiento están meticulosamente orientadas al avance de la ciencia y la tecnología. Estos esfuerzos se centran en la resolución de problemas complejos mediante la aplicación de cómputo inteligente, cómputo cuántico y técnicas de programación de alto rendimiento, incluyendo el multiprocesamiento y la programación en GPUs.",
      "El enfoque primordial de nuestro trabajo reside en la formulación de soluciones innovadoras para desafíos de salud significativos, tales como el cáncer de mama y de piel. Paralelamente, desarrollamos métodos avanzados para la optimización de rutas, y la detección y clasificación de señales de tránsito. Además, estamos a la vanguardia en la exploración de aplicaciones en criptografía cuántica, aprovechando las capacidades del aprendizaje profundo y del cómputo cuántico.",
      "Nuestros estudiantes de posgrado disfrutan de un apoyo integral, facilitado por acceso a tecnología de punta y la asesoría especializada y personalizada de nuestro equipo de trabajo. Este respaldo está diseñado para asegurar que los estudiantes cumplan con sus objetivos académicos y de investigación de manera eficiente y dentro de los plazos establecidos.",
    ],
    equipo: [
      "Computadoras equipadas con tarjetas GPUs.",
      "Sistema de desarrollo Jetson TK1.",
    ],
    personal: {
      descripcion:
        "El grupo de académicos realiza investigación en sistemas inteligentes cuánticos, procesamiento cuántico de señales, planeación de trayectoria, automóviles autónomos y sistemas farmacobiológicos.",
      academico: [
        {
          id: 4,
          cargo: "Responsable del laboratorio e investigador",
          estudio: "Doctor en Ciencias de la Computación",
          sumary:
            "Sistema Nacional de Investigadoras e Investigadores, nivel II",
        },
        {
          id: 15,
          cargo: "Investigador",
          estudio: "Doctor en Redes y Sistemas de Comunicación",
        },
        {
          id: 18,
          cargo: "Investigador",
          estudio: "Maestro en Ciencias en Sistemas Digitales",
        },
        {
          id: 22,
          cargo: "Investigador",
          estudio: "Especialista en Sistemas Digitales",
        },
      ],
      doctorado: ["S. Rosales", "D. López"],
      maestria: ["F. Morquecho", "S. Ogunji"],
    },
    proyectos: {
      descripcion:
        "El quehacer científico se centra en la generación de conocimiento mediante proyectos de investigación llevados a cabo por especialistas en la materia. ",
      lista: [
        {
          nombre: "Programa para la integración nacional en cómputo cuántico.",
          periodo: "2022-2024",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Detección de fracturas y daño óseo mediante cómputo inteligente cuántico.",
          periodo: "2023-2025",
          fuente: "Conahcyt",
        },
        {
          nombre: "Sistemas inteligentes cuánticos.",
          periodo: "2019-2021",
          fuente: "SIP-IPN",
        },
      ],
    },
    publicaciones: {
      descripcion:
        "A continuación, se presenta un listado de la productividad científica más reciente lograda por el grupo de trabajo.",
      lista: [
        {
          titulo:
            "Hybrid quantum genetic algorithm with fuzzy adaptive rotation angle for efficient placement of unmanned aerial vehicles in natural disaster areas.",
          autores:
            "Enrique Ballinas, Oscar H. Montiel-Ross, Anabel Martínez-Vargas, Gabriela Rodríguez-Cortés, Oscar H. Montiel Ross",
          fecha: "2024",
          link: "https://doi.org/10.3390/axioms13010048",
        },
        {
          titulo:
            "EEG-based motor imagery classification with quantum algorithms.",
          autores: "Cynthia Olvera, Oscar Montiel Ross, Yoshio Rubio",
          fecha: "2024",
          link: "https://doi.org/10.1016/j.eswa.2024.123354",
        },
        {
          titulo:
            "Quantum-inspired evolutionary algorithms on continuous space multiobjective problems.",
          autores: "Olvera, C., Montiel, O. & Rubio, Y.",
          fecha: "2023",
          link: "https://doi.org/10.1007/s00500-022-06916-0",
        },
        {
          titulo:
            "Various deep learning algorithms in computational intelligence.",
          autores: "Montiel-Ross, Oscar H.",
          fecha: "2023",
          link: "https://doi.org/10.3390/axioms12050495",
        },
        {
          titulo:
            "A review of quantum-inspired metaheuristics: going from classical computers to real quantum computers.",
          autores: "O. H. Montiel Ross",
          fecha: "2019",
          link: "https://doi.org/10.1109/ACCESS.2019.2962155",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Telecomunicaciones",
    responsable: 5,
    img: "",
    descripcion: [
      "El grupo de trabajo desarrolla investigación básica y aplicada en el diseño y modelado de circuitos y sistemas para telecomunicaciones. También se estudian sistemas embebidos y cómputo reconfigurable con tarjetas de desarrollo de sistemas digitales, DSP-FPGA.",
    ],
    equipo: [
      "Computadoras equipadas.",
      "Tarjetas electrónicas de desarrollo de circuitos y sistemas digitales.",
      "Equipo de generación de señales de baja y alta frecuencia.",
      "Equipo de medición de RF.",
      "Fuentes de alimentación.",
    ],
    personal: {
      descripcion:
        "Las temáticas de interés incluyen modelado y diseño de circuitos y sistemas digitales y analógicos, radiofrecuencias (RF) y microondas, sistemas caóticos, seguridad en FPGA y DSP, entre otras.",
      academico: [
        {
          id: 5,
          cargo: "Responsable del laboratorio e investigador",
          estudio: "Doctor en Ciencias de Telecomunicaciones",
          sumary:
            "Sistema Nacional de Investigadoras e Investigadores, nivel II",
        },
        {
          id: 14,
          cargo: "Investigador",
          estudio: "Doctor en Ciencias de la Computación",
        },
        {
          id: 20,
          cargo: "Investigador",
          estudio: "Maestro en Ciencias en Sistemas Digitales",
        },
      ],
      doctorado: ["M. Estudillo", "O. Afolabi"],
      maestria: [
        "R. Almada",
        "F. López",
        "A. Cabrera",
        "C. Ornelas",
        "J. Castro",
      ],
    },
    proyectos: {
      descripcion:
        "El quehacer científico se centra en la generación de conocimiento mediante proyectos de investigación llevados a cabo por especialistas.",
      lista: [
        {
          nombre:
            "Encriptación de imágenes usando osciladores caóticos de orden fraccional y basados en dispositivos con memoria.",
          periodo: "2024",
          fuente: "SIP-IPN",
        },
        {
          nombre: "Aplicación del ecosistema WoT a la agroecología.",
          periodo: "2024",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Prototipo de satélite CanSat: Un Enfoque Interdisciplinario en Educación STEM",
          periodo: "2024",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Implementación de FPGA de sistemas caóticos basados en dispositivos con memoria, memristor, memcapacitor y meminductor.",
          periodo: "2023",
          fuente: "SIP-IPN",
        },
        {
          nombre: "Aplicación de la plataforma experimental WoT.",
          periodo: "2023",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Sistema digital para medición del estado de salud de celdas para la recuperación de las baterías de autos eléctricos.",
          periodo: "2023",
          fuente: "SIP-IPN",
        },
      ],
    },
    publicaciones: {
      descripcion:
        "Listado de la productividad científica más reciente del grupo de trabajo.",
      lista: [
        {
          titulo:
            "FPGA realization of a fractional-order model of universal memory elements.",
          autores:
            "Opeyemi-Micheal Afolabi, Vincent-Ademola Adeyemi, Esteban Tlelo-Cuautle, José Cruz Núñez-Pérez",
          fecha: "2024",
          link: "https://doi.org/10.3390/fractalfract8100605",
        },
        {
          titulo:
            "FPGA realization of an image encryption system using a 16-cpsk modulation technique.",
          autores:
            "José Cruz Núñez-Pérez, Vincent Ademola Adeyemi, Yuma Sandoval-Ibarra, F. Javier Pérez-Pinal, Esteban Tlelo-Cuautle",
          fecha: "2024",
          link: "https://doi.org/10.1155/2021/5532106",
        },
        {
          titulo:
            "FPGA realization of an image encryption system using the DCSK-CDMA technique.",
          autores:
            "Miguel-Angel Estudillo-Valdez, Vincent-Ademola Adeyemi, Jose-Cruz Nuñez-Perez",
          fecha: "2024",
          link: "https://doi.org/10.1016/j.vlsi.2024.102157",
        },
        {
          titulo:
            "FPGA implementation of parameter-switching scheme to stabilize chaos in fractional spherical systems and usage in secure image.",
          autores:
            "Adeyemi, V.-A.; Tlelo-Cuautle, E.; Sandoval-Ibarra, Y.; Nuñez-Perez, J.-C.",
          fecha: "2023",
          link: "https://doi.org/10.3390/fractalfract7060440",
        },
        {
          titulo: "Fractional PID controller for voltage-lift converters.",
          autores:
            "Martinez-Patiño, L.M.; Perez-Pinal, F.J.; Soriano-Sánchez, A.G.; Rico-Secades, M.; Zarate-Orduño, C.; Nuñez-Perez, J.-C.",
          fecha: "2023",
          link: "https://doi.org/10.3390/fractalfract7070542",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Laboratorio de Procesamiento de Imágenes",
    responsable: 6,
    img: "",
    descripcion: [
      "En el Laboratorio de Procesamiento de Imágenes se desarrolla investigación científica en temas de relevancia como restauración de imágenes, visión por computadora, reconocimiento de patrones, reconstrucción tridimensional, entre otras. Se genera conocimiento de frontera para establecer con precisión la relación entre puntos de los objetos en el mundo real y los capturados en una imagen. Se desarrollan algoritmos avanzados para solucionar problemas de procesamiento de imágenes, optimizando criterios de desempeño objetivos. Además, se exploran paradigmas computacionales avanzados, como cómputo paralelo, para lograr implementaciones eficientes.",
      "Los temas de investigación desarrollados en el laboratorio incluyen: mejora de la visibilidad en imágenes degradadas por neblina, reconocimiento y seguimiento de objetos en el espacio 3D, reconocimiento de rostros y emociones a través de la expresión facial, digitalización tridimensional de objetos utilizando visión multiocular y proyección de luz estructurada, desarrollo de modelos de inteligencia artificial en apoyo al diagnóstico médico, entre otros.",
      "Nuestros estudiantes de posgrado cuentan con instalaciones, equipo de laboratorio, asesoría especializada y personalizada por parte de investigadores, así como oportunidades para realizar estancias de investigación nacionales e internacionales. Estas facilidades fomentan el trabajo colaborativo y les permiten alcanzar sus objetivos en tiempo y forma.",
    ],
    equipo: [
      "Cámaras y proyectores digitales de alta resolución.",
      "Tarjetas electrónicas de desarrollo de alta gama con tecnología GPU o FPGA.",
      "Mesa óptica de precisión.",
      "Plataformas de prueba para experimentos de procesamiento de imágenes.",
      "Equipos de cómputo con tarjetas gráficas GPU para cómputo científico.",
      "Robot móvil terrestre.",
      "Impresora 3D.",
    ],
    personal: {
      descripcion:
        "El grupo de investigadores posee una sólida formación académica y una amplia trayectoria en investigación. Su experiencia abarca la dirección de proyectos de investigación financiados, la formación de recursos humanos de alto nivel, la publicación de artículos en revistas científicas de alto impacto, el desarrollo de patentes, y una extensa red de colaboradores nacionales e internacionales.",
      academico: [
        {
          id: 6,
          cargo: "Responsable del laboratorio e investigador",
          estudio: "Doctor en Ciencias de la Computación",
          sumary:
            "Sistema Nacional de Investigadoras e Investigadores, nivel II",
        },
        {
          id: 7,
          cargo: "Investigador por México-CONAHCYT",
          estudio: "Doctor en Ciencias en Física Aplicada",
          sumary:
            "Sistema Nacional de Investigadoras e Investigadores, nivel II",
        },
      ],
      doctorado: ["S. Esquivel", "J. Godoy"],
    },
    proyectos: {
      descripcion:
        "La labor científica se enfoca en la generación de conocimiento de frontera y su aplicación para la solución de problemas, a través de proyectos de investigación desarrollados por un equipo de investigadores especialistas en la materia.",
      lista: [
        {
          nombre:
            "El uso de visión multiocular para restaurar la visibilidad en imágenes degradadas por dispersión óptica",
          periodo: "2022-2024",
          fuente: "CONAHCYT",
        },
        {
          nombre:
            "Métodos multidimensionales de procesamiento de datos en sistemas de proyección de luz estructurada",
          periodo: "2019-2023",
          fuente: "CONAHCYT",
        },
        {
          nombre:
            "El uso de visión multiocular para procesamiento de imágenes y reconocimiento de patrones",
          periodo: "2024",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Procesamiento de imágenes y reconstrucción tridimensional utilizando visión multiocular",
          periodo: "2023",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Métodos optodigitales para procesamiento de imágenes y reconstrucción tridimensional",
          periodo: "2022",
          fuente: "SIP-IPN",
        },
      ],
    },
    publicaciones: {
      descripcion:
        "A continuación, se presenta un listado de la productividad científica más reciente lograda por el grupo de trabajo.",
      lista: [
        {
          titulo:
            "Reliable Disparity Estimation Using Multiocular Vision with Adjustable Baseline",
          autores:
            "Victor H. Diaz-Ramirez, Martin Gonzalez-Ruiz, Rigoberto Juarez-Salazar, Miguel Cazorla",
          fecha: "2025",
          link: "https://doi.org/10.3390/s25010021",
        },
        {
          titulo:
            "Restoration of Binocular Images Degraded by Optical Scattering through Estimation of Atmospheric Coefficients",
          autores:
            "Victor H. Diaz-Ramirez, Rigoberto Juarez-Salazar, Martín González-Ruiz, Vincent Ademola Adeyemi",
          fecha: "2023",
          link: "https://doi.org/10.3390/s23218918",
        },
        {
          titulo:
            "Are camera, projector, and camera–projector calibrations different?",
          autores:
            "Rigoberto Juarez-Salazar, Sofia Esquivel-Hernandez, and Victor H. Diaz-Ramirez",
          fecha: "2023",
          link: "https://doi.org/10.1364/AO.497149",
        },
        {
          titulo:
            "Three‐dimensional spatial point computation in fringe projection profilometry",
          autores:
            "Rigoberto Juarez-Salazar, Gustavo A. Rodriguez-Reveles, Sofia Esquivel-Hernandez, Victor H. Diaz-Ramirez",
          fecha: "2023",
          link: "https://doi.org/10.1016/j.optlaseng.2023.107482",
        },
        {
          titulo:
            "Stereo Image Matching Using Adaptive Morphological Correlation",
          autores:
            "Victor H. Diaz-Ramirez, Martin Gonzalez-Ruiz, Vitaly Kober, Rigoberto Juárez-Salazar",
          fecha: "2022",
          link: "https://doi.org/10.3390/s22239050",
        },
        {
          titulo:
            "Homography estimation from a single-point correspondence using template matching and particle swarm optimization",
          autores:
            "Victor H. Diaz-Ramirez, Rigoberto Juarez-Salazar, Juan Zheng, Jose Enrique Hernandez-Beltran, Andrés Márquez",
          fecha: "2022",
          link: "https://doi.org/10.1364/AO.444847",
        },
      ],
    },
  },
  {
    id: 6,
    name: "Laboratorio de Análisis Multimedia y Aprendizaje Profundo",
    responsable: 8,
    img: "",
    descripcion: [
      "Las investigaciones que se llevan a cabo en el Laboratorio de Análisis Multimedia y Aprendizaje Profundo están dirigidas al desarrollo de métodos basados en inteligencia artificial, redes neuronales convolucionales (Deep Learning), así como el análisis multimedia con enfoque multidisciplinario para la realización de proyectos en el área de tecnologías de la información y las comunicaciones con impacto social.",
      "Las personas que se integren al laboratorio en modalidad de estudiantes, postdoctorantes o profesoras o profesores visitantes cuentan con el apoyo, los equipos y, sobre todo, la asesoría especializada y personalizada del equipo de trabajo que tiene más de 20 años de experiencia en el área y con colaboraciones a nivel internacional, que les permita concluir con sus objetivos en tiempo y forma.",
      "El laboratorio cuenta con posiciones de trabajo y equipo que les permite desarrollar investigaciones relacionadas a los proyectos del laboratorio, así como las facilidades de acceder a otros equipos y materiales de personas colaboradoras del proyecto como la Universidad de California San Diego en Estados Unidos, Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán en México y colaboradores institucionales.",
    ],
    personal: {
      descripcion:
        "El grupo de personas colaboradoras con perfil multidisciplinario está enfocado a realizar investigación básica y aplicada de frontera aplicada en temas con impacto en los ODS (objetivos de desarrollo sostenible) como de salud, preservación de tortugas marinas y ciencias de materiales, entre otros temas.",
      academico: [
        {
          id: 7,
          cargo: "Responsable del laboratorio e investigadora",
          estudio: "Doctora en Procesamiento de Señales y Telecomunicaciones",
          sumary:
            "Sistema Nacional de Investigadoras e Investigadores, nivel I",
        },
      ],
      investigadoresExternos: [
        {
          nombre: "Dra. Olivia A. Graeve",
          institucion: "Universidad de California San Diego",
        },
        {
          nombre: "Dr. José Avila Funes",
          institucion:
            "Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán",
        },
        {
          nombre: "Dr. Alejandro A. Ramírez Acosta",
          institucion: "Consultor en IA e investigador independiente",
        },
        {
          nombre: "Dra. Sara Aguilar Navarro",
          institucion:
            "Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán",
        },
        {
          nombre: "Dr. Alberto Mimenza Alvardo",
          institucion:
            "Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán",
        },
        {
          nombre: "Dr. Miguel A Reyes López",
          institucion: "Centro de Biotecnología Genómica del IPN",
        },
        {
          nombre: "Dra. Eyitomilayo Babatope",
          institucion: "Egresada CITEDI-IPN",
        },
      ],
      estudiantesColaboradores: [
        {
          nombre: "María del Carmen González Apatiga",
          estudios: "Maestría en CITEDI-IPN",
        },
        {
          nombre: "Jesús Fernando Franco López",
          estudios: "Maestría en CITEDI-IPN",
        },
        {
          nombre: "Edgar Solano Castrejón",
          estudios: "Licenciatura en UPIITA-IPN",
        },
        {
          nombre: "Eduardo Jiménez Miranda",
          estudios: "Licenciatura en UPIITA-IPN",
        },
        {
          nombre: "Gerardo Mercado Hurtado",
          estudios: "Licenciatura en TecNM-ITSUR",
        },
        {
          nombre: "Arturo Del Bosque Díaz de León",
          estudios: "Licenciatura en UPIIZ-IPN",
        },
        {
          nombre: "Juana Gabriela López Trejo",
          estudios: "Licenciatura en Universidad Autónoma de Occidente",
        },
        {
          nombre: "Liliana Becerril Tapia",
          estudios: "Licenciatura en UPIITA-IPN",
        },
        {
          nombre: "Jorge García Benitez",
          estudios: "Licenciatura en TecNM-ITT",
        },
        {
          nombre: "Erick Steven Cole Jimenez",
          estudios: "Licenciatura en TecNM-ITT",
        },
        {
          nombre: "Karen Ortiz Ruíz",
          estudios: "Licenciatura en UPIITA-IPN",
        },
        {
          nombre: "Arturo Ríos Ramos",
          estudios: "Licenciatura en ESIME-IPN",
        },
      ],
    },

    proyectos: {
      descripcion:
        "La generación de conocimiento básico y aplicado se logra a través de la realización de proyectos de investigación, llevado a cabo por investigadores, en los cuales colaboran expertos de otras instituciones nacionales y del extranjero.",
      lista: [
        {
          nombre:
            "Topologically Designed and Resilient Ultrahigh Temperature Ceramics. Colaboración con Universidad de California San Diego, Universidad de Alabama y Universidad del Estado de Colorado.",
          periodo: "2023-2027",
          fuente: "NSF, Estados Unidos",
        },
        {
          nombre:
            "Contribución específica de variables multimedia espacio-temporales caracterizadas por métodos de aprendizaje profundo para la evaluación de la fragilidad y el deterioro cognitivo de personas adultas mayores.",
          periodo: "2024-2026",
          fuente: "SECIHTI",
        },
        {
          nombre:
            "Modelos de inteligencia artificial en desemejantes contextos ecológicos",
          periodo: "2024-2025",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Caracterización de descriptores en inteligencia artificial para aplicaciones en diferentes contextos ecológicos.",
          periodo: "2022-2023",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Caracterización de actividades instrumentales de la vida diaria con aprendizaje profundo",
          periodo: "2021",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Modelo de regiones y patrones adaptables para indexación de contenido multimedia en condiciones no controladas.",
          periodo: "2019",
          fuente: "SIP-IPN",
        },
      ],
    },
    publicaciones: {
      descripcion:
        "A continuación, se presenta un listado de la productividad científica más reciente lograda por el grupo de trabajo.",
      lista: [
        {
          titulo:
            "The potential of automated assessment of cognitive function using non-neuroimaging data: A systematic review.",
          autores:
            "Eyitomilayo Yemisi Babatope, Alejandro Álvaro Ramírez-Acosta, José Alberto Avila-Funes and Mireya García-Vázquez",
          fecha: "2024",
          link: "https://doi.org/10.3390/jcm13237068",
        },
        {
          titulo:
            "Latest advances in manufacturing and machine learning of bulk metallic glasses.",
          autores:
            "Graeve, O.A., García-Vázquez, M.S., Ramírez-Acosta, A.A. and Cadieux, Z.",
          fecha: "2023",
          link: "https://doi.org/10.1002/adem.202201493",
        },
        {
          titulo:
            "Applying a deep learning approach focusing on spatiotemporal features in early diagnosis of Alzheimer's disease.",
          autores:
            "Eyitomilayo Yemisi Babatope, Jesus Alejandro Acosta-Franco, Mireya Saraí García-Vázquez, Alejandro Álvaro Ramírez-Acosta",
          fecha: "2021",
          link: "https://doi.org/10.1002/alz.058635",
        },
        {
          titulo:
            "Visual vs internal attention mechanisms in deep neural networks for image classification and object detection.",
          autores:
            "Abraham Montoya Obeso, Jenny Benois-Pineau, Mireya Saraí García Vázquez, Alejandro Álvaro Ramírez Acosta",
          fecha: "2021",
          link: "https://doi.org/10.1016/j.patcog.2021.108411",
        },
        {
          titulo:
            "Computational techniques for eye movements analysis towards supporting early diagnosis of Alzheimer’s disease: A review.",
          autores:
            "Jessica Beltrán, Mireya S. García-Vázquez, Jenny Benois-Pineau, Luis Miguel Gutierrez-Robledo, Jean-François Dartigues",
          fecha: "2018",
          link: "https://doi.org/10.1155/2018/2676409",
        },
      ],
    },
  },
  {
    id: 7,
    name: "Ciencia de Datos",
    responsable: 9,
    img: "",
    descripcion: [
      "En el Laboratorio de Ciencia de Datos se lleva a cabo investigación básica y aplicada en las áreas de ciencia de datos e inteligencia artificial. Se desarrollan algoritmos que combinan diferentes modelos de aprendizaje automático, así como cómputo evolutivo y lógica difusa. Los algoritmos desarrollados se aplican en clasificación de objetos astronómicos, en ciberseguridad, en analítica empresarial, entre otras muchas aplicaciones.",
      "El laboratorio cuenta con dos servidores para cómputo de alto rendimiento con tarjetas GPU Titán RTX y un aula con posiciones de trabajo para el acceso a los servidores. Además, tiene la finalidad de enriquecer la formación académica de estudiantes de Posgrado y de las carreras de Licenciatura afines, de tal manera que su perfil de egreso les permita enfrentar con éxito los grandes desafíos que se presentan en la actualidad en las organizaciones basadas en el conocimiento y la industria 4.0.",
    ],
    equipo: [
      "Servidores de cómputo de alto rendimiento con tarjetas GPU Titán RTX",
      "Aula con estaciones de trabajo para acceso a los servidores",
    ],
    personal: {
      descripcion:
        "El grupo de académicos está enfocado a realizar investigación básica de frontera con el uso de técnicas de aprendizaje automático y aprendizaje reforzado aplicado en diferentes temáticas de corte científico, así como con un enfoque empresarial.",
      academico: [
        {
          id: 9,
          cargo: "Responsable del laboratorio e investigador",
          estudio: "Doctor en Ciencias de la Computación",
          sumary:
            "Sistema Nacional de Investigadoras e Investigadores, nivel I",
        },
        {
          id: 15,
          cargo: "Investigador",
          estudio: "Doctor en Redes y Sistemas de Comunicación",
        },
      ],
      doctorado: ["L. Sánchez", "A. Ojeda", "R. Arguelles", "R. Cornejo"],
      maestria: ["J. Serna"],
    },
    proyectos: {
      descripcion:
        "El quehacer científico está centrado en la generación de conocimiento básico y aplicado que se logra a través de la realización de proyectos de investigación, llevado a cabo por un grupo de investigadores especialistas en la materia.",
      lista: [
        {
          nombre:
            "Modelado matemático y ciencia de datos con algoritmos de cómputo de alto rendimiento.",
          periodo: "2024",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Desarrollo de algoritmos de cómputo de alto rendimiento, ciencia de datos y aprendizaje automático",
          periodo: "2023-2024",
          fuente: "RedCIBaja-AWS",
        },
        {
          nombre:
            "Aceleración en GPU de algoritmos de modelado matemático, ciencia de datos y aprendizaje automático.",
          periodo: "2023",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Algoritmos de inteligencia artificial y ciencia de datos en múltiples nodos con múltiples GPUs",
          periodo: "2022",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Aplicaciones de ciencia de datos y aprendizaje automático con cómputo de alto rendimiento",
          periodo: "2021",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Optimización del comportamiento caótico de sistemas de orden fraccional usando algoritmos evolutivos",
          periodo: "2020",
          fuente: "SIP-IPN",
        },
        {
          nombre:
            "Cómputo de alto rendimiento en modelado matemático, metaheurísticas y ciencia de datos.",
          periodo: "2019",
          fuente: "SIP-IPN",
        },
      ],
    },
    publicaciones: {
      descripcion:
        "A continuación, se presenta un listado de la productividad científica más reciente lograda por el grupo de trabajo.",
      lista: [
        {
          titulo:
            "Developing a quantum genetic algorithm in MATLAB using a quantum device on AWS.",
          autores:
            "Rosales-Alvarado, S.S., Montiel, O., Orozco-Rosas, U., Tapia, J.J. In: Melin, P., Castillo, O. (eds) New Directions on Hybrid Intelligent Systems Based on Neural Networks, Fuzzy Logic, and Optimization Algorithms. Studies in Computational Intelligence.",
          fecha: "2024",
          link: "https://doi.org/10.1007/978-3-031-53713-4_1",
        },
        {
          titulo:
            "GSGP-CUDA — A CUDA framework for geometric semantic genetic programming.",
          autores:
            "Leonardo Trujillo, José Manuel Muñoz-Contreras, Daniel E. Hernández, Mauro Castelli, Juan José Tapia-Armenta.",
          fecha: "2022",
          link: "https://doi.org/10.1016/j.softx.2022.101085",
        },
        {
          titulo:
            "On the analysis of hyper-parameter space for a genetic programming system with iterated F-Race.",
          autores:
            "Leonardo Trujillo, Ernesto Álvarez González, Edgar Galván, Juan José Tapia Armenta, Antonio Ponsich.",
          fecha: "2020",
          link: "https://doi.org/10.1007/s00500-020-04829-4",
        },
        {
          titulo:
            "Construction of conditional probability tables of Bayesian networks using ontologies and Wikipedia.",
          autores:
            "Alan Ramírez Noriega, Reyes Juárez Ramírez, Juan J Tapia, Victor H Castillo, Samantha Jiménez.",
          fecha: "2019",
          link: "https://doi.org/10.13053/cys-23-4-2705",
        },
        {
          titulo:
            "Relations between touch target size and drag distance in mobile applications for users with autism spectrum disorders.",
          autores:
            "Angeles Quezada, Reyes Juárez Ramírez, Samantha Jiménez, Juan José Tapia Armenta, Rodolfo Villarroel, Roberto Munoz.",
          fecha: "2018",
          link: "https://doi.org/10.1007/s10916-018-1044-0",
        },
      ],
    },
  },
  {
    id: 8,
    name: "Laboratorio de Percepción Remota e Internet de las Cosas",
    responsable: 12,
    img: "",
    descripcion: [
      "En el Laboratorio de Percepción Remota e Internet de las Cosas se realizan proyectos de investigación relacionados con aplicaciones de IoT a servicios escalables a ciudades inteligentes para ofrecer soluciones a problemas en materia de movilidad, seguridad, medio ambiente, uso eficiente de sus recursos, salud, entre otros.",
      "El trabajo está enfocado a la integración de tecnologías habilitadoras de ciudades inteligentes: redes de comunicaciones inalámbricas de baja potencia y amplia cobertura (LPWAN) para el IoT masivo, diferentes plataformas en la nube para el acopio, almacenamiento, procesamiento y visualización, así como el uso de técnicas y herramientas de inteligencia artificial para el análisis de los datos.",
    ],
    equipo: [
      "Infraestructura y acceso a redes de comunicación inalámbricas LPWAN (LoRaWAN, Sigfox).",
      "Acceso al centro de ciencia de datos del CITEDI.",
      "Cuenta institucional en la plataforma en la nube de Amazon AWS.",
    ],
    personal: {
      descripcion:
        "Las temáticas de interés del grupo de investigadores están relacionadas con el internet de las cosas, ciudades inteligentes, la percepción remota satelital, nanosatélites, entre otras.",
      academico: [
        {
          id: 8,
          cargo: "Responsable del laboratorio e investigador",
          estudio: "Doctor en Ciencias Físicas",
        },
        {
          id: 9,
          cargo: "Investigador",
          estudio: "Doctor en Teoría de la Señal y Comunicaciones",
        },
        {
          id: 10,
          cargo: "Investigador",
          estudio: "Doctor en Ciencias de la Computación",
        },
      ],
      maestria: ["Itzel Haydee Zarate Quintana", "Uriel Díaz Ruiz"],
    },
    proyectos: {
      descripcion:
        "El quehacer científico está centrado en la aplicación del conocimiento que se logra a través de la realización de proyectos.",
      lista: [
        {
          nombre:
            "Desarrollo de prototipos de servicios de ciudades inteligentes para aplicaciones a problemas municipales.",
          periodo: "2023-2025",
          fuente: "IPN-SIP",
        },
        {
          nombre:
            "Seguridad física de personas y sus bienes mediante técnicas de Campus inteligente.",
          periodo: "2020-2022",
          fuente: "IPN-SIP",
        },
      ],
    },
    publicaciones: {
      descripcion:
        "A continuación, se presenta un listado de la productividad científica más reciente lograda por el grupo de trabajo.",
      lista: [
        {
          titulo:
            "Performance analysis of wireless sensor networks using damped oscillation functions for the packet transmission probability.",
          autores:
            "Izlian Y. Orea-Flores; Mario E. Rivero-Angeles; Sergio-Jesus Gonzalez-Ambriz; Eleazar Aguirre Anaya; Sumera Saleem",
          fecha: "2024",
          link: "https://doi.org/10.3390/computers13110285",
        },
        {
          titulo: "IoT-based system for campus community security.",
          autores:
            "Berenice Flores-Salgado, Sergio-Jesus Gonzalez-Ambriz, Ciro-Andrés Martínez-García-Moreno, Jessica Beltrán",
          fecha: "2024",
          link: "https://doi.org/10.1016/j.iot.2024.101179",
        },
        {
          titulo:
            "A Spectral Gap-Based Topology Control Algorithm for Wireless Backhaul Networks.",
          autores:
            "Sergio-Jesus Gonzalez-Ambriz, Rolando Menchaca-Méndez, Sergio Alejandro Pinacho-Castellanos, Mario Eduardo Rivero-Ángeles",
          fecha: "2024",
          link: "https://doi.org/10.3390/fi16020043",
        },
        {
          titulo:
            "Evaluation of two-dimensional DBH estimation algorithms using TLS.",
          autores:
            "Compeán-Aguirre, J.L.; López-Serrano, P.M.; Silván-Cárdenas, J.L.; Martínez-García-Moreno, C.A.; Vega-Nieva, D.J.; Corral-Rivas, J.J.; Pompa-García, M.",
          fecha: "2024",
          link: "https://doi.org/10.3390/f15111964",
        },
        {
          titulo:
            "Non-invasive AI model for human functional patterns recognition in IADLs.",
          autores:
            "Jesús Alejandro Acosta-Franco, Ciro Andrés Martínez-García Moreno, Mireya S. García-Vázquez, Alejandro Álvaro Ramírez-Acosta",
          fecha: "2021",
          link: "https://doi.org/10.1002/alz.054233",
        },
      ],
    },
  },
];
