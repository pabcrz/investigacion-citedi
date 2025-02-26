export const laboratorios = [
  {
    id: 1,
    name: "Control",
    responsable: 2,
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
          id: 2,
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
  },

  {
    id: 3,
    name: "Cómputo Inteligente de Alto Rendimiento",
    responsable: 4,
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
    name: "Procesamiento de Imágenes",
    responsable: 6,
  },
  {
    id: 6,
    name: "Análisis Multimedia y Aprendizaje Profundo",
    responsable: 6,
  },
  {
    id: 7,
    name: "Ciencia de Datos",
    responsable: 9,
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
            "Rosales-Alvarado, S.S., Montiel, O., Orozco-Rosas, U., Tapia, J.J.",
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
    name: "Tecnología de Percepción Remota e Internet de las Cosas",
    responsable: 12,
  },
];
