interface Publicion {
  titulo: string;
  autores: string;
  revista: string;
  cuartil: string;
  factorImpacto: string;
  enlace: string;
}
interface Publicaciones {
  [key: number]: Publicion[];
}
export const publicaciones: Publicaciones[] = [
  {
    2007: [
      {
        titulo:
          "Bounds for a domain containing all compact invariant sets of the system describing the laser–plasma interaction",
        autores: "Konstantin E. Starkov",
        revista: "Chaos, Solitons & Fractals",
        cuartil: "Q1",
        factorImpacto: "3.025",
        enlace: "https://doi.org/10.1016/j.chaos.2007.06.078",
      },
      {
        titulo:
          "A Class of OFT Controllers for Torque-Saturated Robot Manipulators: Lyapunov Stability and Experimental Evaluation",
        autores: "Javier Moreno Valenzuela, Víctor Santibáñez, Ricardo Campa",
        revista: "Journal of Intelligent & Robotic Systems",
        cuartil: "Q4",
        factorImpacto: "0.459",
        enlace: "https://doi.org/10.1007/s10846-007-9181-6",
      },
      {
        titulo:
          "Velocity field control of robot manipulators by using only position measurements",
        autores: "Javier Moreno Valenzuela",
        revista:
          "Journal of the Franklin Institute-Engineering and Applied Mathematics",
        cuartil: "Q3",
        factorImpacto: "0.441",
        enlace: "https://doi.org/10.1016/j.jfranklin.2007.05.006",
      },
      {
        titulo:
          "Mediative fuzzy logic: a new approach for contradictory knowledge management",
        autores:
          "Oscar H. Montiel Ross, Oscar Castillo, Patricia Melin, Roberto Sepulveda",
        revista: "Soft Computing",
        cuartil: "Q3",
        factorImpacto: "0.607",
        enlace: "https://doi.org/10.1007/s00500-007-0206-7",
      },
      {
        titulo: "Systematic design of a stable type-2 fuzzy logic controller",
        autores:
          "Oscar Castillo, Luis T. Aguilar, Nohé Cázarez, Selene Cárdenas",
        revista: "Applied Soft Computing",
        cuartil: "Q2",
        factorImpacto: "1.537",
        enlace: "https://doi.org/10.1016/j.asoc.2007.02.021",
      },
    ],
    2008: [
      {
        titulo: "Adaptive pseudospectral solution of a diffuse interface model",
        autores: "Juan José Tapia Armenta, P. Gilberto López",
        revista: "Journal of Computational and Applied Mathematics",
        cuartil: "Q1",
        factorImpacto: "6.371",
        enlace: "https://doi.org/10.1016/j.cam.2008.04.037",
      },
      {
        titulo:
          "Universal localizing bounds for compact invariant sets of natural polynomial Hamiltonian systems",
        autores: "Konstantin E. Starkov",
        revista: "Physics Letters A",
        cuartil: "Q1",
        factorImpacto: "2.174",
        enlace: "https://doi.org/10.1016/j.physleta.2008.07.073",
      },
      {
        titulo:
          "Bounds for the Set Containing All Compact Invariant Sets of the Linearly Coupled Laser System",
        autores: "Konstantin E. Starkov, Konstantin K. Starkov",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "Q3",
        factorImpacto: "0.87",
        enlace: "https://doi.org/10.1142/S0218127408020938",
      },
      {
        titulo:
          "Asymptotic harmonic generator and its application to finite time orbital stabilization of a friction pendulum with experimental verification",
        autores: "Y. Orlov, Luis T. Aguilar, L. Acho",
        revista: "International Journal of Control",
        cuartil: "Q3",
        factorImpacto: "1.13",
        enlace: "https://doi.org/10.1080/00207170701516371",
      },
      {
        titulo:
          "On Output Feedback Tracking Control of Robot Manipulators with Bounded Torque Input",
        autores: "Javier Moreno Valenzuela, Víctor Santibáñez, Ricardo Campa",
        revista: "International Journal of Control, Automation, and Systems",
        cuartil: "Q4",
        factorImpacto: "0.59",
        enlace: null,
      },
      {
        titulo:
          "Localization of compact invariant sets of nonlinear time-varying systems",
        autores: "Alexander P. Krishchenko, Konstantin E. Starkov",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "Q3",
        factorImpacto: "0.87",
        enlace: "https://doi.org/10.1142/S021812740802121X",
      },
      {
        titulo:
          "Stability analysis of the operational space control for industrial robots using their own joint velocity PI controllers",
        autores:
          "Karla Camarillo, Ricardo Campa, Víctor Santibáñez, Javier Moreno Valenzuela",
        revista: "Robotica",
        cuartil: "Q3",
        factorImpacto: "0.781",
        enlace: "https://doi.org/10.1017/S0263574708004335",
      },
    ],
    2009: [
      {
        titulo:
          "Bounding a Domain that contains All Compact Invariant Sets of the Bloch System",
        autores: "Konstantin E. Starkov",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "Q3",
        factorImpacto: "0.918",
        enlace: "https://doi.org/10.1142/S0218127409023457",
      },
      {
        titulo:
          "Bounds for the Domain Containing All Compact Invariant Sets of the System Modeling Dynamics of Acoustic Gravity Waves",
        autores: "Konstantin E. Starkov",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "Q3",
        factorImpacto: "0.918",
        enlace: "https://doi.org/10.1142/S0218127409024864",
      },
      {
        titulo:
          "Path planning for autonomous mobile robot navigation with ant colony optimization and fuzzy cost function evaluation",
        autores:
          "M. A. Porta Garcia, Oscar H. Montiel Ross, Oscar Castillo, Roberto Sepúlveda, Patricia Melin",
        revista: "Applied Soft Computing",
        cuartil: "Q1",
        factorImpacto: "2.415",
        enlace: "https://doi.org/10.1016/j.asoc.2009.02.014",
      },
      {
        titulo:
          "Stability of an electric differential for traction applications",
        autores: "Francisco J. Perez Pinal, Ilse Cervantes, Ali Emadi",
        revista: "IEEE Transactions on Vehicular Technology",
        cuartil: "Q2",
        factorImpacto: "1.488",
        enlace: "https://doi.org/10.1109/TVT.2009.2013473",
      },
      {
        titulo:
          "Two Classes of Velocity Regulators for Input-Saturated Motor Drives",
        autores: "Javier Moreno Valenzuela, Ricardo Campa",
        revista: "IEEE Transactions on Industrial Electronics",
        cuartil: "Q1",
        factorImpacto: "4.678",
        enlace: "https://doi.org/10.1109/TIE.2009.2016515",
      },
      {
        titulo:
          "Optimization of interval type-2 fuzzy logic controllers for a perturbed autonomous wheeled mobile robot using genetic algorithms",
        autores: "Ricardo Martínez, Oscar Castillo, Luis T. Aguilar",
        revista: "Information Sciences",
        cuartil: "Q1",
        factorImpacto: "3.291",
        enlace: "https://doi.org/10.1016/j.ins.2008.12.028",
      },
      {
        titulo: "Adaptive Regulation of Vector-Controlled Induction Motors",
        autores:
          "Fabrice Jadot, Francois Malrait, Javier Moreno Valenzuela, Rodolphe Sepulchre",
        revista: "IEEE Transactions on Control Systems Technology",
        cuartil: "Q2",
        factorImpacto: "1.858",
        enlace: "https://doi.org/10.1109/TCST.2008.2003434",
      },
      {
        titulo:
          "A cognitive map and fuzzy inference engine model for online design and self fine‐tuning of fuzzy logic controllers",
        autores: "Jose L. Gonzalez, Luis T. Aguilar, Oscar Castillo",
        revista: "International Journal of Intelligence Systems",
        cuartil: "Q3",
        factorImpacto: "1.194",
        enlace: "https://doi.org/10.1002/int.20379",
      },
      {
        titulo: "Target recognition under nonuniform illumination conditions",
        autores: "Víctor Hugo Díaz Ramírez, Vitaly Kober",
        revista: "Applied Optics",
        cuartil: "Q2",
        factorImpacto: "1.41",
        enlace: "https://doi.org/10.1364/AO.48.001408",
      },
      {
        titulo:
          "Fuzzy logic control with genetic membership function parameters optimization for the output regulation of a servomechanism with nonlinear backlash",
        autores: "Nohe R.Cazarez Castro, Luis T. Aguilar, Oscar Castillo",
        revista: "Expert Systems with Applications",
        cuartil: "Q1",
        factorImpacto: "2.908",
        enlace: "https://doi.org/10.1016/j.eswa.2009.11.091",
      },
      {
        titulo:
          "Generating self-excited oscillations for underactuated mechanical systems via two-relay controller",
        autores: "Luis T. Aguilar, Igor Boiko, Leonid Fridman",
        revista: "International Journal of Control",
        cuartil: "Q2",
        factorImpacto: "1.124",
        enlace: "https://doi.org/10.1080/00207170802657363",
      },
      {
        titulo: "Generating Self-Excited Oscillations via Two-Relay Controller",
        autores: "Luis T. Aguilar, Igor Boiko, Leonid Fridman, Rafael Iriarte",
        revista: "IEEE Transactions on Automatic Control",
        cuartil: "Q1",
        factorImpacto: "2.556",
        enlace: "https://doi.org/10.1109/TAC.2008.2009615",
      },
    ],
    2010: [
      {
        titulo:
          "Compact invariant sets of the static spherically symmetric Einstein–Yang–Mills equations",
        autores: "Konstantin E. Starkov",
        revista: "Physics Letters A",
        cuartil: "Q2",
        factorImpacto: "1.963",
        enlace: "https://doi.org/10.1016/j.physleta.2010.02.035",
      },
      {
        titulo:
          "Localizing Bounds for Compact Invariant Sets of Nonlinear Systems Possessing First integrals with Applications to Hamiltonian Systems",
        autores: "Konstantin E. Starkov",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "Q3",
        factorImpacto: "0.814",
        enlace: "https://doi.org/10.1142/S0218127410026629",
      },
      {
        titulo:
          "A Practical PID Regulator with Bounded Torques for Robot Manipulators",
        autores:
          "Victor Santibañez, Karla Camarillo, Javier Moreno Valenzuela, Ricardo Campa",
        revista: "International Journal of Control, Automation, and Systems",
        cuartil: "Q3",
        factorImpacto: "0.862",
        enlace: "https://doi.org/10.1007/s12555-010-0307-4",
      },
      {
        titulo:
          "Design of 20 GHz high performance LC-VCOs in a 52 GHz fT SiGe:C BiCMOS technology",
        autores: "José Cruz Nunez Perez, Jacques Verdier, Christian Gontrand",
        revista: "Microelectronics Journal",
        cuartil: "Q3",
        factorImpacto: "0.789",
        enlace: "https://doi.org/10.1016/j.mejo.2009.11.006",
      },
      {
        titulo:
          "Theory and experiments of global adaptive output feedback tracking control of manipulators",
        autores:
          "Javier Moreno Valenzuela, V. Santibáñez, E. Orozco Manrı́quez, Luis González Hernández",
        revista: "IET Control Theory and Applications",
        cuartil: "Q2",
        factorImpacto: "1.283",
        enlace: "https://doi.org/10.1049/iet-cta.2009.0249",
      },
      {
        titulo:
          "A new bounded kinematic controller for operational space motion of manipulators",
        autores: "Javier Moreno Valenzuela, Carlos Torres Torres",
        revista: "Mechanics Research Communications",
        cuartil: "Q2",
        factorImpacto: "1.307",
        enlace: "https://doi.org/10.1016/j.mechrescom.2010.08.001",
      },
      {
        titulo:
          "Operational space trajectory tracking control of robot manipulators endowed with a primary controller of synthetic joint velocity",
        autores: "Javier Moreno Valenzuela, Luis González Hernández",
        revista: "ISA Transactions",
        cuartil: "Q2",
        factorImpacto: "0.916",
        enlace: "https://doi.org/10.1016/j.isatra.2010.08.002",
      },
      {
        titulo:
          "A new approach to motion control of torque-constrained manipulators by using time-scaling of reference trajectories",
        autores: "Javier Moreno Valenzuela, Ernesto Orozco Manríquez",
        revista: "Journal of Mechanical Science and Technology",
        cuartil: "Q3",
        factorImpacto: "0.412",
        enlace: "https://doi.org/10.1007/s12206-009-1006-z",
      },
      {
        titulo:
          "Ant colony test center for planning autonomous mobile robot navigation",
        autores:
          "Oscar H. Montiel Ross, Roberto Sepúlveda, Oscar Castillo, Patricia Melin",
        revista: "Computer Applications in Engineering Education",
        cuartil: "Q4",
        factorImpacto: "0.321",
        enlace: "https://doi.org/10.1002/cae.20463",
      },
      {
        titulo:
          "Periodic motion planning and nonlinear ℋ∞ tracking control of a 3-DOF underactuated helicopter",
        autores:
          "Iliana M. Meza Sánchez, Luis T. Aguilar, Anton Shiriaev, Leonid Freidovich, Yury Orlov",
        revista: "International Journal of Systems Science",
        cuartil: "Q2",
        factorImpacto: "0.948",
        enlace: "https://doi.org/10.1080/00207721.2010.517874",
      },
      {
        titulo:
          "Localization of the attractor of the differential equations for the solar wind-magnetosphere-ionosphere model",
        autores:
          "G. A. Leonov, N. V. Kuznetsov, S. M. Seledzhi, Konstantin E. Starkov",
        revista: "Doklady Physics",
        cuartil: "Q4",
        factorImpacto: "0.347",
        enlace: "https://doi.org/10.1134/S1028335810090120",
      },
      {
        titulo:
          "Localization analysis of compact invariant sets of multi-dimensional nonlinear systems and symmetrical prolongations",
        autores: "Alexander P. Krishchenko, Konstantin E. Starkov",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "Q1",
        factorImpacto: "2.698",
        enlace: "https://doi.org/10.1016/j.cnsns.2009.05.068",
      },
      {
        titulo:
          "Constrained composite filter for intraclass distortion invariant object recognition",
        autores: "Víctor Hugo Díaz Ramírez",
        revista: "Optics and Lasers in Engineering",
        cuartil: "Q2",
        factorImpacto: "1.576",
        enlace: "https://doi.org/10.1016/j.optlaseng.2010.08.002",
      },
      {
        titulo:
          "Optimization of interval type-2 fuzzy logic controllers using evolutionary algorithms",
        autores:
          "O. Castillo, P. Melin, A. Alanis, Oscar H. Montiel Ross, Roberto Sepúlveda",
        revista: "Soft Computing",
        cuartil: "Q2",
        factorImpacto: "1.512",
        enlace: "https://doi.org/10.1007/s00500-010-0588-9",
      },
    ],
    2011: [
      {
        titulo: "Integrated circuit generating 3- and 5-scroll attractors",
        autores:
          "R. Trejo Guerra, E. Tlelo Cuautle, J. M. Jiménez Fuentes, C. Sánchez López, J. M. Muñoz Pacheco, G. Espinosa Flores Verdad, J. M. Rocha Pérez",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "Q1",
        factorImpacto: "2.806",
        enlace: "https://doi.org/10.1016/j.cnsns.2012.01.029",
      },
      {
        titulo: "Multiscroll floating gate–based integrated chaotic oscillator",
        autores:
          "R. Trejo Guerra, E. Tlelo Cuautle, M. Jiménez Fuentes, J. M. Muñoz Pacheco, C. Sánchez López",
        revista: "International Journal of Circuit Theory and Applications",
        cuartil: "Q2",
        factorImpacto: "1.625",
        enlace: "https://doi.org/10.1002/cta.821",
      },
      {
        titulo:
          "On synchronization of chaotic systems based on the Thau observer design",
        autores: "Konstantin E. Starkov, Luis N. Coria, Luis T. Aguilar",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "Q1",
        factorImpacto: "2.806",
        enlace: "https://doi.org/10.1016/j.cnsns.2011.04.020",
      },
      {
        titulo:
          "Compact invariant sets of the Bianchi VIII and Bianchi IX Hamiltonian systems",
        autores: "Konstantin E. Starkov",
        revista: "Physics Letters A",
        cuartil: "Q2",
        factorImpacto: "1.632",
        enlace: "https://doi.org/10.1016/j.physleta.2011.06.064",
      },
      {
        titulo:
          "On a polytope containing all compact invariant sets for a class of natural polynomial Hamiltonian systems",
        autores: "Konstantin E. Starkov",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "Q3",
        factorImpacto: "0.755",
        enlace: "https://doi.org/10.1142/S0218127411029550",
      },
      {
        titulo:
          "Global Asymptotic Stability of the Classical PID Controller by Considering Saturation Effects in Industrial Robots",
        autores: "Antonio Yarza, Victor Santibañez, Javier Moreno Valenzuela",
        revista: "International Journal of Advanced Robotic Systems",
        cuartil: "Q4",
        factorImpacto: "0.375",
        enlace: "https://doi.org/10.5772/45688",
      },
      {
        titulo:
          "Biomimetic Control of Mechanical Systems Equipped with Musculotendon Actuators",
        autores: "Javier Moreno Valenzuela, Adriana Salinas Avila",
        revista: "Journal of Bionic Engineering",
        cuartil: "Q3",
        factorImpacto: "2.325",
        enlace: "https://doi.org/10.1016/S1672-6529(11)60011-5",
      },
      {
        titulo:
          "On real-time velocity control of DC motors by using computer-aided control system design",
        autores: "Marlen Meza Sánchez, Javier Moreno Valenzuela",
        revista:
          "Revista Técnica de la Facultad de Ingeniería Universidad del Zulia",
        cuartil: "Q4",
        factorImpacto: "0.05",
        enlace: "NF",
      },
      {
        titulo: "The dimension formula for the Lorenz attractor",
        autores: "G. A. Leonov, A. Yu. Pogromsky, Konstantin E. Starkov",
        revista: "Physics Letters A",
        cuartil: "Q2",
        factorImpacto: "1.632",
        enlace: "https://doi.org/10.1016/j.physleta.2011.01.034",
      },
      {
        titulo:
          "Two relay controller for real time trajectory generation and its application to inverted orbital stabilization of inertia wheel pendulum via quasi‐continuous HOSM",
        autores:
          "Antonio Estrada, Luis T. Aguilar, Rafael Iriarte, Leonid Fridman",
        revista: "Asian Journal of Control",
        cuartil: "Q2",
        factorImpacto: "1.034",
        enlace: "https://doi.org/10.1002/asjc.339",
      },
      {
        titulo:
          "Generation of walking periodic motions for a biped robot via genetic algorithms",
        autores: "Selene L. Cardenas, Maciela, Oscar Castillo, Luis T. Aguilar",
        revista: "Applied Soft Computing",
        cuartil: "Q1",
        factorImpacto: "2.612",
        enlace: "https://doi.org/10.1016/j.asoc.2011.05.030",
      },
      {
        titulo:
          "Generating oscillations in inertia wheel pendulum via two‐relay controller",
        autores:
          "Luis T. Aguilar, Igor M. Boiko, Leonid M. Fridman, Leonid B. Freidovich",
        revista: "International Journal of Robust and Nonlinear Control",
        cuartil: "Q2",
        factorImpacto: "1.554",
        enlace: "https://doi.org/10.1002/rnc.1696",
      },
    ],
    2012: [
      {
        titulo:
          "Global dynamics of the Kirschner–Panetta model for the tumor immunotherapy",
        autores: "Konstantin E. Starkov, Luis N. Coria",
        revista:
          "Journal of Nonlinear Analysis Series B: Real World Applications",
        cuartil: "Q1",
        factorImpacto: "2.201",
        enlace: "https://doi.org/10.1016/j.nonrwa.2012.10.006",
      },
      {
        titulo:
          "Embedding a high speed interval type-2 fuzzy controller for a real plant into an FPGA",
        autores:
          "Roberto Sepúlveda, Oscar H. Montiel Ross, Oscar Castillo, Patricia Melin",
        revista: "Applied Soft Computing",
        cuartil: "Q1",
        factorImpacto: "2.14",
        enlace: "https://doi.org/10.1016/j.asoc.2011.11.031",
      },
      {
        titulo:
          "Regulation and force control using sliding modes to reduce rebounds in a mechanical system subject to a unilateral constraint",
        autores: "R. Rascón, J. Alvarez, Luis T. Aguilar",
        revista: "IET Control Theory and Applications",
        cuartil: "Q2",
        factorImpacto: "1.717",
        enlace: "https://doi.org/10.1049/iet-cta.2011.0314",
      },
      {
        titulo:
          "Adaptive anti control of chaos for robot manipulators with experimental evaluations",
        autores: "Javier Moreno Valenzuela",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "Q1",
        factorImpacto: "2.773",
        enlace: "https://doi.org/10.1016/j.cnsns.2012.06.003",
      },
      {
        titulo:
          "Robust Saturated PI Joint Velocity Control for Robot Manipulators",
        autores: "Javier Moreno Valenzuela, V. Santibáñez",
        revista: "Asian Journal of Control",
        cuartil: "Q2",
        factorImpacto: "1.411",
        enlace: "https://doi.org/10.1002/asjc.586",
      },
      {
        titulo:
          "Velocity field control of a class of electrically-driven manipulators",
        autores: "G. A. Leonov, A. Yu. Pogromsky, Konstantin E. Starkov",
        revista: "International Journal of Systems Science",
        cuartil: "Q2",
        factorImpacto: "1.305",
        enlace: "https://doi.org/10.1080/00207721.2012.720294",
      },
      {
        titulo:
          "Efficient Stereoscopic Video Matching and Map Reconstruction for a Wheeled Mobile Robot",
        autores: "Oscar H. Montiel Ross, Roberto Sepúlveda, Oscar Castillo",
        revista: "International Journal of Advanced Robotic Systems",
        cuartil: "Q3",
        factorImpacto: "0.821",
        enlace: "https://doi.org/10.5772/50526",
      },
      {
        titulo:
          "Methodology to Optimize Manufacturing Time for a CNC Using a High Performance Implementation of ACO",
        autores:
          "Oscar H. Montiel Ross, Nataly Medina Rodríguez, Roberto Sepúlveda",
        revista: "International Journal of Advanced Robotic Systems",
        cuartil: "Q3",
        factorImpacto: "0.821",
        enlace: "https://doi.org/10.5772/50527",
      },
      {
        titulo:
          "Combinatorial complexity problem reduction by the use of artificial vaccines",
        autores:
          "Oscar H. Montiel Ross, Francisco Javier Diaz Delgadillo, Roberto Sepúlveda",
        revista: "Expert Systems with Applications",
        cuartil: "Q2",
        factorImpacto: "1.854",
        enlace: "https://doi.org/10.1016/j.eswa.2012.10.011",
      },
      {
        titulo:
          "Erratum: The dimension formula for the Lorenz attractor (Physics Letters, Section A: General, Atomic and Solid State Physics A (2011) 375:8 (1179))",
        autores: "G. A. Leonov, A. Yu. Pogromsky, Konstantin E. Starkov",
        revista: "Physics Letters A",
        cuartil: "Q2",
        factorImpacto: "1.766",
        enlace: "https://doi.org/10.1016/j.physleta.2012.09.002",
      },
      {
        titulo:
          "Second order sliding mode tracking controller for inertia wheel pendulum",
        autores: "Rafael Iriarte, Luis T. Aguilar, Leonid Fridman",
        revista:
          "Journal of the Franklin Institute-Engineering and Applied Mathematics",
        cuartil: "Q1",
        factorImpacto: "2.418",
        enlace: "https://doi.org/10.1016/j.jfranklin.2012.10.013",
      },
      {
        titulo:
          "Multiclass pattern recognition using adaptive correlation filters with complex constraints",
        autores:
          "Victor H. Díaz Ramírez, Oliver G. Campos Trujillo, Vitaly I. Kober, Pablo M. Aguilar Gonzalez",
        revista: "Optical Engineering",
        cuartil: "Q3",
        factorImpacto: "0.88",
        enlace: "https://doi.org/10.1117/1.OE.51.3.037203",
      },
      {
        titulo:
          "Designing Type-1 and Type-2 Fuzzy Logic Controllers via Fuzzy Lyapunov Synthesis for nonsmooth mechanical systems",
        autores: "Nohe R. Cazarez Castro, Luis T. Aguilar, Oscar Castillo",
        revista: "Engineering Applications of Artificial Intelligence",
        cuartil: "Q2",
        factorImpacto: "1.625",
        enlace: "https://doi.org/10.1016/j.engappai.2012.03.003",
      },
    ],
    2013: [
      {
        titulo:
          "Identification of inhomogenous optical absorptive response by chaotic photonic signals in Au nanoparticles",
        autores:
          "J. C. Muñoz César, C. Torres Torres, Javier Moreno Valenzuela, D. Torres Torres, G. Urriolagoitia Sosa, M. Trejo Valdez",
        revista: "Measurement Science and Technology",
        cuartil: "Q2",
        factorImpacto: "1.352",
        enlace: "https://doi.org/10.1088/0957-0233/24/3/035603",
      },
      {
        titulo:
          "Medical image segmentation with deformable models on graphics processing units",
        autores:
          "Rigoberto Alvarado, Juan José Tapia Armenta, Julio César Rolón Garrido",
        revista: "Journal of Supercomputing",
        cuartil: "Q3",
        factorImpacto: "0.841",
        enlace: "https://doi.org/10.1007/s11227-013-1042-4",
      },
      {
        titulo:
          "Localization of compact invariant sets and global stability in analysis of one tumor growth model",
        autores: "Konstantin E. Starkov, Diana Gamboa",
        revista: "Mathematical Methods in the Applied Sciences",
        cuartil: "Q2",
        factorImpacto: "0.877",
        enlace: "https://doi.org/10.1002/mma.3023",
      },
      {
        titulo: "On the global dynamics of one cancer tumour growth model",
        autores: "Konstantin E. Starkov, Alexander P. Krishchenko",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "Q1",
        factorImpacto: "2.569",
        enlace: "https://doi.org/10.1016/j.cnsns.2013.09.023",
      },
      {
        titulo:
          "On the global dynamics of the Owen-Sherratt model describing the tumor-macrophage interactions",
        autores: "Konstantin E. Starkov, Alexander Yu. Pogromsky",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "Q3",
        factorImpacto: "1.017",
        enlace: "https://doi.org/10.1142/S021812741350020X",
      },
      {
        titulo:
          "Stability Analysis of a Voltage-Based Controller for Robot Manipulators",
        autores:
          "Jorge Orrante Sakanassi, Victor Santibañez, Javier Moreno Valenzuela",
        revista: "International Journal of Advanced Robotic Systems",
        cuartil: "Q4",
        factorImpacto: "0.497",
        enlace: "https://doi.org/10.5772/53894",
      },
      {
        titulo:
          "An adaptive output feedback motion tracking controller for robot manipulators: Uniform global asymptotic stability and experimentation",
        autores: "Antonio Yarza, Victor Santibanez, Javier Moreno Valenzuela",
        revista:
          "International Journal of Applied Mathematics and Computer Science",
        cuartil: "Q2",
        factorImpacto: "1.39",
        enlace: "https://doi.org/10.2478/amcs-2013-0045",
      },
      {
        titulo:
          "Model-based control of a class of voltage-driven robot manipulators with non-passive dynamics",
        autores: "Javier Moreno Valenzuela, Ricardo Campa, Víctor Santibáñez",
        revista: "Computers & Electrical Engineering",
        cuartil: "Q3",
        factorImpacto: "0.992",
        enlace: "https://doi.org/10.1016/j.compeleceng.2013.06.006",
      },
      {
        titulo: "Saturated control of boost DC-to-DC power converter",
        autores: "J. Guzmán Guemez, Javier Moreno Valenzuela",
        revista: "Electronics Letters",
        cuartil: "Q3",
        factorImpacto: "1.068",
        enlace: "https://doi.org/10.1049/el.2013.0605",
      },
      {
        titulo:
          "Time-scale separation of a class of robust PD-type tracking controllers for robot manipulators",
        autores: "Salvador González Vázquez, Javier Moreno Valenzuela",
        revista: "ISA Transactions",
        cuartil: "Q1",
        factorImpacto: "2.256",
        enlace: "https://doi.org/10.1016/j.isatra.2012.11.007",
      },
      {
        titulo:
          "Motion Control of a Quadrotor Aircraft via Singular Perturbations",
        autores: "Salvador González Vázquez, Javier Moreno Valenzuela",
        revista: "International Journal of Advanced Robotic Systems",
        cuartil: "Q4",
        factorImpacto: "0.497",
        enlace: "https://doi.org/10.5772/56785",
      },
      {
        titulo:
          "Adaptive composite filters for pattern recognition in nonoverlapping scenes using noisy training images",
        autores:
          "Pablo Mario Aguilar González, Vitaly Kober, Víctor Hugo Díaz Ramírez",
        revista: "Pattern Recognition Letters",
        cuartil: "Q3",
        factorImpacto: "1.062",
        enlace: "https://doi.org/10.1016/j.patrec.2013.09.016",
      },
      {
        titulo:
          "Robust speech processing using local adaptive non-linear filtering",
        autores: "Víctor Hugo Díaz Ramírez, Vitaly Kober",
        revista: "IET Signal Processing",
        cuartil: "Q3",
        factorImpacto: "0.691",
        enlace: "https://doi.org/10.1049/iet-spr.2011.0206",
      },
      {
        titulo:
          "Real-time tracking of multiple objects using adaptive correlation filters with complex constraints",
        autores:
          "Víctor Hugo Díaz Ramírez, Viridiana Contreras, Vitaly Kober, Kenia Picos",
        revista: "Optics Communications",
        cuartil: "Q2",
        factorImpacto: "1.542",
        enlace: "https://doi.org/10.1016/j.optcom.2013.07.044",
      },
      {
        titulo:
          "Transcoding resilient video watermarking scheme based on spatio-temporal HVS and DCT",
        autores:
          "Antonio Cedillo Hernandez, Manuel Cedillo Hernandez, Mireya S. García Vázquez, Mariko Nakano Miyatake, Hector Perez Meana, Alejandro Ramirez Acosta",
        revista: "Signal Processing",
        cuartil: "Q1",
        factorImpacto: "2.238",
        enlace: "https://doi.org/10.1016/j.sigpro.2013.08.019",
      },
      {
        titulo:
          "Chemisorptive detection by electrical and nonlinear optical absorption properties of a nanostructured ruthenium-doped zinc oxide film",
        autores: "L. Castañeda, Javier Moreno Valenzuela, C. Torres Torres",
        revista: "Optik",
        cuartil: "Q3",
        factorImpacto: "0.769",
        enlace: "https://doi.org/10.1016/j.ijleo.2013.03.093",
      },
    ],
    2014: [
      {
        titulo:
          "Application of a Chaotic Oscillator in an Autonomous Mobile Robot",
        autores:
          "Esteban Tlelo Cuautle, Hugo C. Ramos López, Mauro Sánchez Sánchez, Ana D. Pano Azucena, Luis A. Sánchez-Gaspariano, José Cruz Núñez Pérez, Jorge L. Camas Anzueto",
        revista: "Journal of Electrical Engineering-Elektrotechnicky Casopis",
        cuartil: "Q4",
        factorImpacto: "0.378",
        enlace: "https://doi.org/10.2478/jee-2014-0024",
      },
      {
        titulo:
          "On the global dynamics of the cancer AIDS-related mathematical model",
        autores: "Konstantin E. Starkov, Corina Plata-Ante",
        revista: "Kybernetika",
        cuartil: "Q4",
        factorImpacto: "0.541",
        enlace: "https://doi.org/10.14736/kyb-2014-4-0563",
      },
      {
        titulo:
          "Unbounded dynamics and compact invariant sets of one Hamiltonian system defined by the minimally coupled field",
        autores: "Konstantin E. Starkov",
        revista: "Physics Letters A",
        cuartil: "Q2",
        factorImpacto: "1.683",
        enlace: "https://doi.org/10.1016/j.physleta.2014.12.037",
      },
      {
        titulo:
          "On the ultimate dynamics of the four-dimensional Rössler system",
        autores: "Konstantin E. Starkov",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "Q3",
        factorImpacto: "1.078",
        enlace: "https://doi.org/10.1142/S0218127414501491",
      },
      {
        titulo:
          "On some dynamical properties of a seven-dimensional cancer model with immunotherapy",
        autores: "Konstantin E. Starkov, Antonio Villegas",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "Q3",
        factorImpacto: "1.078",
        enlace: "https://doi.org/10.1142/S0218127414500205",
      },
      {
        titulo:
          "Robust position control for a mechanical system with friction and an elastic backlash",
        autores: "Raúl Rascón, Joaquín Álvarez, Luis T. Aguilar",
        revista:
          "Revista Iberoamericana de Automática e Informática Industrial RIAI",
        cuartil: "Q4",
        factorImpacto: "0.318",
        enlace: "https://doi.org/10.1016/j.riai.2014.05.005",
      },
      {
        titulo:
          "Flexible test bed for the behavioural modelling of power amplifiers",
        autores:
          "José Cruz Nuñez Perez, José Ricardo Cardenas Valdez, Christian Gontrand, J. Apolinar Reynoso Hernandez, Francisco Iwao Hirata Flores, Rigoberto Jauregui Duran, Francisco J. Perez Pinal",
        revista:
          "COMPEL - The International Journal for Computation and Mathematics in Electrical and Electronic Engineering",
        cuartil: "Q4",
        factorImpacto: "0.371",
        enlace: "https://doi.org/10.1108/COMPEL-11-2012-0326",
      },
      {
        titulo:
          "Optimal Path Planning Generation for Mobile Robots using Parallel Evolutionary Artificial Potential Field",
        autores:
          "Oscar H. Montiel Ross, Roberto Sepúlveda, Ulises Orozco Rosas",
        revista: "Journal of Intelligent & Robotic Systems",
        cuartil: "Q3",
        factorImpacto: "1.178",
        enlace: "https://doi.org/10.1007/s10846-014-0124-8",
      },
      {
        titulo:
          "A novel image matching algorithm based on sliding histograms of oriented gradients",
        autores:
          "D. Miramontes Jaramillo, V. I. Kober, Víctor Hugo Díaz Ramírez, V. N. Karnaukhov",
        revista: "Journal of Communications Technology and Electronics",
        cuartil: "Q4",
        factorImpacto: "0.388",
        enlace: "https://doi.org/10.1134/S1064226914120146",
      },
      {
        titulo:
          "Analysis and synthesis of sliding mode control for large scale variable speed wind turbine for power optimization",
        autores: "Jován Mérida, Luis T. Aguilar, Jorge Dávila",
        revista: "Renewable Energy",
        cuartil: "Q1",
        factorImpacto: "3.476",
        enlace: "https://doi.org/10.1016/j.renene.2014.06.030",
      },
      {
        titulo:
          "Type-1 and Type-2 fuzzy logic controller design using a Hybrid PSO–GA optimization method",
        autores: "Ricardo Martínez Soto, Oscar Castillo, Luis T. Aguilar",
        revista: "Information Sciences",
        cuartil: "Q1",
        factorImpacto: "4.038",
        enlace: "https://doi.org/10.1016/j.ins.2014.07.012",
      },
      {
        titulo:
          "Dynamical analysis of Raychaudhuri equations based on the localization method of compact invariant sets",
        autores: "Alexander P. Krishchenko, Konstantin E. Starkov",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "Q3",
        factorImpacto: "1.078",
        enlace: "https://doi.org/10.1142/S0218127414501363",
      },
      {
        titulo:
          "3D substrate modeling; from a first order electrical analysis, towards some possible signal fluctuations consideration, for radio frequency circuits",
        autores:
          "Christian Gontrand, Fengyuan Sun, José Ricardo Cardenas Valdez, Yue Ma, Carole Plossu, Francis Calmona, José Cruz Núñez Pérez, Jacques Verdier",
        revista: "Microelectronics Journal",
        cuartil: "Q3",
        factorImpacto: "0.836",
        enlace: "https://doi.org/10.1016/j.mejo.2014.04.037",
      },
      {
        titulo:
          "Target tracking in nonuniform illumination conditions using locally adaptive correlation filters",
        autores: "Victor H. Diaz Ramirez, Kenia Picos, Vitaly Kober",
        revista: "Optics Communications",
        cuartil: "Q3",
        factorImpacto: "1.449",
        enlace: "https://doi.org/10.1016/j.optcom.2014.02.063",
      },
      {
        titulo:
          "Modeling Memory Effects in RF Power Amplifiers Applied to a Digital Pre-Distortion Algorithm and Emulated on a DSP-FPGA Board",
        autores:
          "José Ricardo Cárdenas Valdez, José Cruz Núñez Pérez, José Alejandro Galaviz Aguilar, Andrés Calvillo Téllez, Christian Gontrand, J. Apolinar Reynoso Hernández, Esteban Tlelo Cuautle",
        revista: "Integration, the VLSI Journal",
        cuartil: "Q3",
        factorImpacto: "0.659",
        enlace: "https://doi.org/10.1016/j.vlsi.2014.12.005",
      },
    ],
    2015: [
      {
        titulo: "FPGA Realization of Multi-Scroll Chaotic Oscillators",
        autores:
          "E. Tlelo Cuautle, J. J. Rangel Magdaleno, A. D. Pano Azucena, P. J. Obeso Rodelo, José Cruz Núñez Pérez",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "Q1",
        factorImpacto: "2.834",
        enlace: "https://doi.org/10.1016/j.cnsns.2015.03.003",
      },
      {
        titulo:
          "FPGA realization of a chaotic communication system applied to image processing",
        autores:
          "E. Tlelo Cuautle, V. H. Carbajal Gomez, P. J. Obeso Rodelo, J. J. Rangel Magdaleno, José Cruz Núñez Pérez",
        revista: "Nonlinear Dynamics",
        cuartil: "Q1",
        factorImpacto: "3",
        enlace: "https://doi.org/10.1007/s11071-015-2284-x",
      },
      {
        titulo:
          "Periodic orbits and 10 cases of unbounded dynamics in a new Hamiltonian system defined by the conformally coupled scalar field",
        autores: "Konstantin E. Starkov",
        revista: "Physics Letters A",
        cuartil: "Q2",
        factorImpacto: "1.677",
        enlace: "https://doi.org/10.1016/j.physleta.2015.03.007",
      },
      {
        titulo: "New Achievements in Control of Robotic Systems",
        autores:
          "Arturo Zavala Río, Luis Rodolfo García Carrillo, Javier Moreno Valenzuela",
        revista: "Mathematical Problems in Engineering",
        cuartil: "Q3",
        factorImpacto: "0.644",
        enlace: "https://doi.org/10.1155/2015/514105",
      },
      {
        titulo:
          "Nonsmooth H∞ synthesis of position controllers for mechanical systems with friction and backlash",
        autores:
          "Israel U. Ponce, Yury Orlov, Luis T. Aguilar, Joaquín Álvarez",
        revista: "Control Engineering Practice",
        cuartil: "Q2",
        factorImpacto: "1.83",
        enlace: "https://doi.org/10.1016/j.conengprac.2015.10.004",
      },
      {
        titulo:
          "Generic nonsmooth H∞ output synthesis of a class of mechanical systems with friction and backlash",
        autores:
          "Israel U. Ponce, Joseph Bentsman, Yury Orlov, Luis T. Aguilar",
        revista: "IEEE Transactions on Control Systems Technology",
        cuartil: "Q1",
        factorImpacto: "2.818",
        enlace: "https://doi.org/10.1109/TCST.2015.2399672",
      },
      {
        titulo:
          "Pseudo-bacterial Potential Field for Path Planning of Mobile Robots",
        autores:
          "Ulises Orozco Rosas, Oscar H. Montiel Ross, Roberto Sepúlveda",
        revista: "International Journal of Advanced Robotic Systems",
        cuartil: "Q4",
        factorImpacto: "0.615",
        enlace: "https://doi.org/10.5772/60715",
      },
      {
        titulo:
          "FPGA-based test bed for measurement of intermodulation distortion",
        autores: "José Cruz Núñez Pérez et al.",
        revista: "Integration, the VLSI Journal",
        cuartil: "Q3",
        factorImpacto: "0.703",
        enlace: "https://doi.org/10.1016/j.vlsi.2015.06.007",
      },
      {
        titulo:
          "CCII+ Based on QFGMOS for Low Voltage Analog Signal Processing",
        autores:
          "José Cruz Núñez Pérez, E. Tlelo, Cristopher Ramirez, J. Jimenez",
        revista: "IEEE Latin America Transactions",
        cuartil: "Q4",
        factorImpacto: "0.436",
        enlace: "https://doi.org/10.1109/TLA.2015.7350032",
      },
      {
        titulo:
          "Adaptive chaotification of robot manipulators with flexible joints and time-varying delay",
        autores: "Javier Moreno Valenzuela, Carlos Torres Torres",
        revista: "Neurocomputing",
        cuartil: "Q1",
        factorImpacto: "2.392",
        enlace: "https://doi.org/10.1016/j.neucom.2015.11.085",
      },
      {
        titulo:
          "Experimental evaluations of voltage regulators for DC motors with switching and linear elements",
        autores: "Javier Moreno Valenzuela, Jorge Guzman Guemez",
        revista: "Transactions of the Institute of Measurement and Control",
        cuartil: "Q4",
        factorImpacto: "0.82",
        enlace: "https://doi.org/10.1177/0142331215592459",
      },
      {
        titulo:
          "Reducing the size of the Traveling Salesman Problem using the Operator Vaccine with Selection Mechanism",
        autores: "Oscar H. Montiel Ross, Francisco J. Díaz Delgadillo",
        revista: "Mathematical Problems in Engineering",
        cuartil: "Q4",
        factorImpacto: "0.644",
        enlace: "https://doi.org/10.1155/2015/713043",
      },
      {
        titulo:
          "Path planning for mobile robots using Bacterial Potential Field for avoiding static and dynamic obstacles",
        autores: "Oscar H. Montiel Ross et al.",
        revista: "Expert Systems with Applications",
        cuartil: "Q1",
        factorImpacto: "2.981",
        enlace: "https://doi.org/10.1016/j.eswa.2015.02.033",
      },
      {
        titulo:
          "Output sliding mode-based stabilization of underactuated 3-DOF planar Cartesian robot",
        autores: "Marlen Meza Sánchez, Luis T. Aguilar, Yury Orlov",
        revista: "Journal of the Franklin Institute",
        cuartil: "Q1",
        factorImpacto: "2.327",
        enlace: "https://doi.org/10.1016/j.jfranklin.2015.01.010",
      },
      {
        titulo:
          "Application of NSGA-II algorithm to a fuzzy system for trajectory tracking of mobile robots",
        autores: "Anabel Martínez Vargas et al.",
        revista: "Applied Soft Computing",
        cuartil: "Q1",
        factorImpacto: "2.857",
        enlace: "https://doi.org/10.1016/j.asoc.2015.11.010",
      },
      {
        titulo:
          "On the global dynamics of a chronic myelogenous leukemia model",
        autores: "Alexander P. Krishchenko, Konstantin E. Starkov",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "Q1",
        factorImpacto: "2.834",
        enlace: "https://doi.org/10.1016/j.cnsns.2015.10.001",
      },
      {
        titulo:
          "Target tracking with dynamically adaptive correlation filters under nonuniform illumination",
        autores: "Leopoldo N. Gaxiola et al.",
        revista: "Optics Communications",
        cuartil: "Q3",
        factorImpacto: "1.48",
        enlace: "https://doi.org/10.1016/j.optcom.2015.11.077",
      },
      {
        titulo:
          "Output tracking control of mechanical systems based on HOSM observation",
        autores: "Alejandra Ferreira de Loza et al.",
        revista: "Automatica",
        cuartil: "Q1",
        factorImpacto: "3.635",
        enlace: "https://doi.org/10.1016/j.automatica.2015.06.020",
      },
      {
        titulo:
          "Pattern recognition with composite correlation filters in noisy environments",
        autores: "Víctor Hugo Díaz Ramírez et al.",
        revista: "Optics Communications",
        cuartil: "Q3",
        factorImpacto: "1.48",
        enlace: "https://doi.org/10.1016/j.optcom.2014.10.038",
      },
      {
        titulo:
          "Reducing the size of Traveling Salesman Problems using a vaccine-based approach",
        autores: "F. J. Díaz Delgadillo, O. H. Montiel Ross, R. Sepúlveda",
        revista: "Expert Systems with Applications",
        cuartil: "Q1",
        factorImpacto: "2.981",
        enlace: "https://doi.org/10.1016/j.eswa.2015.11.026",
      },
      {
        titulo:
          "Analysis and Synthesis of Global Nonlinear H∞ Controller for an Uncertain Wind Turbine System",
        autores: "C. A. Chavez Guzmán, L. T. Aguilar, J. O. Mérida Rubio",
        revista: "Mathematical Problems in Engineering",
        cuartil: "Q3",
        factorImpacto: "0.644",
        enlace: "https://doi.org/10.1155/2015/410873",
      },
      {
        titulo: "New feedback Linearization-Based Control of DC Motors",
        autores: "Carlos Aguilar Avelar, Javier Moreno Valenzuela",
        revista: "IEEE/ASME Transactions on Mechatronics",
        cuartil: "Q1",
        factorImpacto: "4.357",
        enlace: "https://doi.org/10.1109/TMECH.2015.2485942",
      },
      {
        titulo:
          "A composite controller for trajectory tracking of two-link robot manipulators",
        autores: "Carlos Aguilar Avelar, Javier Moreno Valenzuela",
        revista: "ISA Transactions",
        cuartil: "Q1",
        factorImpacto: "2.6",
        enlace: "https://doi.org/10.1016/j.isatra.2015.02.009",
      },
    ],
    2016: [
      {
        titulo:
          "Global stability and tumor clearance conditions for a cancer chemotherapy system",
        autores: "Paul A. Valle, Konstantin E. Starkov, Luis Nestor Coria",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "Q1",
        factorImpacto: "2.784",
        enlace: "https://doi.org/10.1016/j.cnsns.2016.04.025",
      },
      {
        titulo:
          "Vision-Based Autonomous Underwater Vehicle Navigation in Poor Visibility Conditions Using a Model-Free Robust Control",
        autores:
          "Ricardo Pérez Alcocer, L. Abril Torres Méndez, Ernesto Olguín Díaz, A. Alejandro Maldonado Ramírez",
        revista: "Journal of Sensors",
        cuartil: "Q2",
        factorImpacto: "1.704",
        enlace: "https://doi.org/10.1155/2016/8594096",
      },
      {
        titulo:
          "Dynamical properties and tumor clearance conditions for a nine-dimensional model of bladder cancer immunotherapy",
        autores: "Konstantin E. Starkov, Svetlana Bunimovich Mendrazitsky",
        revista: "Mathematical Biosciences & Engineering",
        cuartil: "Q3",
        factorImpacto: "1.035",
        enlace: "https://doi.org/10.3934/mbe.2016030",
      },
      {
        titulo:
          "On bounded and unbounded dynamics of the Hamiltonian system for unified scalar field cosmology",
        autores: "Konstantin E. Starkov",
        revista: "Physics Letters A",
        cuartil: "Q2",
        factorImpacto: "1.772",
        enlace: "https://doi.org/10.1016/j.physleta.2016.04.029",
      },
      {
        titulo:
          "Speech enhancement using robust estimators and rank-order statistics",
        autores: "Yuma Sandoval, Victor Hugo Diaz Ramirez, Vitaly Kober",
        revista:
          "COMPEL - The International Journal for Computation and Mathematics in Electrical and Electronic Engineering",
        cuartil: "Q4",
        factorImpacto: "0.487",
        enlace: "https://doi.org/10.1108/COMPEL-05-2015-0209",
      },
      {
        titulo: "Speech enhancement with adaptive spectral estimators",
        autores:
          "Yuma Sandoval Ibarra, Victor Hugo Diaz Ramirez, V. I. Kober, V. N. Karnaukhov",
        revista: "Journal of Communications Technology and Electronics",
        cuartil: "Q4",
        factorImpacto: "0.446",
        enlace: "https://doi.org/10.1134/S1064226916060218",
      },
      {
        titulo:
          "A family of nonlinear PID-like regulators for a class of torque-driven robot manipulators equipped with torque-constrained actuators",
        autores: "Adriana Salinas, Javier Moreno Valenzuela, Rafael Kelly",
        revista: "Advances in Mechanical Engineering",
        cuartil: "Q4",
        factorImpacto: "0.946",
        enlace: "https://doi.org/10.1177/1687814016628492",
      },
      {
        titulo:
          "Discontinuous H ∞ control of underactuated mechanical systems with friction and backlash",
        autores: "Raúl Rascón, Joaquin Alvarez, Luis T. Aguilar",
        revista: "International Journal of Control, Automation, and Systems",
        cuartil: "Q3",
        factorImpacto: "1.687",
        enlace: "https://doi.org/10.1007/s12555-014-0498-1",
      },
      {
        titulo:
          "Neural controller for the Trajectory tracking control of an inertia wheel",
        autores: "S. Puga Guzmán, Javier Moreno Valenzuela, V. Santibáñez",
        revista:
          "Revista Internacional de Métodos Numéricos para Cálculo y Diseño en Ingeniería",
        cuartil: "Q4",
        factorImpacto: "0.431",
        enlace: "https://doi.org/10.1016/j.rimni.2015.06.002",
      },
      {
        titulo:
          "Fuzzy slope adaptation for the sliding mode control of a pneumatic parallel platform",
        autores:
          "Pablo J. Prieto, Nohe R. Cazarez-Castro, Luis T. Aguilar, Dianelis Garcia",
        revista: "International Journal of Fuzzy Systems",
        cuartil: "Q2",
        factorImpacto: "2.198",
        enlace: "https://doi.org/10.1007/s40815-016-0163-3",
      },
      {
        titulo:
          "Accurate three-dimensional pose recognition from monocular images using template matched filtering",
        autores:
          "Kenia Picos, Victor Hugo Diaz Ramirez, Vitaly Kober, Antonio S. Montemayor, Juan J. Pantrigo",
        revista: "Optical Engineering",
        cuartil: "Q3",
        factorImpacto: "1.082",
        enlace: "https://doi.org/10.1117/1.OE.55.6.063102",
      },
      {
        titulo:
          "Experimental B-learning laboratory for an electrical machines undergraduate course",
        autores:
          "F. J. P. Pinal, S. Nava, José Cruz Nuñez Pérez, I. Araujo, E. Vera A. Barranco",
        revista: "IEEE Latin America Transactions",
        cuartil: "Q4",
        factorImpacto: "0.631",
        enlace: "https://doi.org/10.1109/TLA.2016.7437188",
      },
      {
        titulo:
          "A robust approach for trajectory tracking control of a quadrotor with experimental validation",
        autores:
          "Ricardo Pérez Alcocer, Javier Moreno Valenzuela, Roger Miranda Colorado",
        revista: "ISA Transactions",
        cuartil: "Q1",
        factorImpacto: "3.394",
        enlace: "https://doi.org/10.1016/j.isatra.2016.08.001",
      },
      {
        titulo:
          "Adaptive Neural Network Control for the Trajectory Tracking of the Furuta Pendulum",
        autores:
          "Javier Moreno Valenzuela, Carlos Aguilar Avelar, Sergio A. Puga Guzmán, Víctor Santibáñez",
        revista: "IEEE Transactions on Cybernetics",
        cuartil: "Q1",
        factorImpacto: "7.384",
        enlace: "https://doi.org/10.1109/TCYB.2015.2509863",
      },
      {
        titulo:
          "Two adaptive control strategies for trajectory tracking of the inertia wheel pendulum: neural networks vis à vis model regressor",
        autores:
          "Javier Moreno Valenzuela, Carlos Aguilar Avelar, Sergio Puga Guzmán, Víctor Santibáñez",
        revista: "Intelligent Automation & Soft Computing",
        cuartil: "Q4",
        factorImpacto: "0.644",
        enlace: "N/F",
      },
      {
        titulo:
          "Architectural style classification of Mexican historical buildings using deep convolutional neural networks and sparse features",
        autores:
          "Abraham Montoya Obeso, Jenny Benois-Pineau, Alejandro Álvaro Ramirez Acosta, Mireya S. García Vázquez",
        revista: "Journal of Electronic Imaging",
        cuartil: "Q4",
        factorImpacto: "1.813",
        enlace: "https://doi.org/10.1117/1.JEI.26.1.011016",
      },
      {
        titulo:
          "Single-shot camera position estimation by crossed grating imaging",
        autores:
          "Rigoberto Juarez Salazar, Leopoldo Noel Gaxiola, Víctor Hugo Díaz Ramírez",
        revista: "Optics Communications",
        cuartil: "Q3",
        factorImpacto: "1.588",
        enlace: "https://doi.org/10.1016/j.optcom.2016.08.041",
      },
      {
        titulo:
          "Nonparaxial geometrical Ronchi test for spherical mirrors: An inverse ray-tracing approach",
        autores: "Rigoberto Juarez Salazar",
        revista: "Applied Optics",
        cuartil: "Q3",
        factorImpacto: "1.65",
        enlace: "https://doi.org/10.1364/AO.55.005986",
      },
      {
        titulo:
          "A microstrip antenna based on a standing-wave fractal geometry for CubeSat applications",
        autores:
          "Cruz Ángel Figueroa Torres, José Luis Medina Monroy, Humberto Lobato Morales, Ricardo Arturo Chávez Pérez, Andrés Calvillo Téllez",
        revista: "Microwave and Optical Technology Letters",
        cuartil: "Q4",
        factorImpacto: "0.731",
        enlace: "https://doi.org/10.1002/mop.30009",
      },
    ],
    2017: [
      {
        titulo:
          "Ultimate dynamics of the Kirschner–Panetta model: Tumor eradication and related problems",
        autores: "Konstantin E. Starkov, Alexander P. Krishchenko",
        revista: "Physics Letters A",
        cuartil: "Q2",
        factorImpacto: "1.863",
        enlace: "https://doi.org/10.1016/j.physleta.2017.08.048",
      },
      {
        titulo:
          "Dynamic Analysis of the Melanoma Model: from the Cancer Persistence to its Eradication",
        autores: "Konstantin E. Starkov, Laura Jimenez Beristain",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "Q2",
        factorImpacto: "1.501",
        enlace: "https://doi.org/10.1142/S0218127417501516",
      },
      {
        titulo:
          "On dynamic tumor eradication conditions under combined chemical/anti-angiogenic therapies",
        autores: "Konstantin E. Starkov",
        revista: "Physics Letters A",
        cuartil: "Q2",
        factorImpacto: "1.863",
        enlace: "https://doi.org/10.1016/j.physleta.2017.12.025",
      },
      {
        titulo:
          "Sensorless H∞ speed-tracking synthesis for surface-mount permanent magnet synchronous motor",
        autores: "Ramón Ramírez Villalobos, Luis T. Aguilar, Luis Nestor Coria",
        revista: "ISA Transactions",
        cuartil: "Q1",
        factorImpacto: "3.37",
        enlace: "https://doi.org/10.1016/j.isatra.2017.01.007",
      },
      {
        titulo:
          "Chattering existence and attenuation in fuzzy-based sliding mode control",
        autores:
          "Pablo J. Prieto, Nohe R. Cazarez Castro, Luis T. Aguilar, Selene L. Cardenas-Maciel",
        revista: "Engineering Applications of Artificial Intelligence",
        cuartil: "Q2",
        factorImpacto: "2.819",
        enlace: "https://doi.org/10.1016/j.engappai.2017.03.005",
      },
      {
        titulo:
          "ℒ2-gain tuning of variable structure SISO systems of relative degree n",
        autores: "Topacio Osuna, Yury Orlov, Luis T. Aguilar",
        revista: "International Journal of Control",
        cuartil: "Q2",
        factorImpacto: "2.101",
        enlace: "https://doi.org/10.1080/00207179.2016.1272717",
      },
      {
        titulo:
          "Lyapunov-Based Adaptive Control for the Permanent Magnet Synchronous Motor Driving a Robotic Load",
        autores:
          "Javier Moreno Valenzuela, Yajaira Quevedo Pillado, Regino Pérez Aboytes, Luis González Hernández",
        revista: "Journal of Circuits, Systems and Computers",
        cuartil: "Q4",
        factorImpacto: "0.595",
        enlace: "https://doi.org/10.1142/S0218126617501687",
      },
      {
        titulo:
          "A matlab-based identification procedure applied to a two-degrees-of-freedom robot manipulator for engineering students",
        autores:
          "Javier Moreno Valenzuela, Roger Miranda Colorado, Carlos Aguilar Avelar",
        revista: "International Journal of Electrical Engineering & Education",
        cuartil: "Q4",
        factorImpacto: "0.593",
        enlace: "https://doi.org/10.1177/0020720916689102",
      },
      {
        titulo:
          "Integral Sliding Modes with Nonlinear H∞ -Control for Time-Varying Minimum-Phase Underactuated Systems with Unmatched Disturbances",
        autores:
          "Roger Miranda Colorado, Carlos Chavez Guzman, Luis T. Aguilar",
        revista: "Mathematical Problems in Engineering",
        cuartil: "Q3",
        factorImpacto: "1.145",
        enlace: "https://doi.org/10.1155/2017/4876019",
      },
      {
        titulo:
          "An efficient on-line parameter identification algorithm for nonlinear servomechanisms with an algebraic technique for state estimation",
        autores: "Roger Miranda Colorado, Javier Moreno Valenzuela",
        revista: "Asian Journal of Control",
        cuartil: "Q3",
        factorImpacto: "1.528",
        enlace: "https://doi.org/10.1002/asjc.1511",
      },
      {
        titulo:
          "Experimental parameter identification of flexible joint robot manipulators",
        autores: "Roger Miranda Colorado, Javier Moreno Valenzuela",
        revista: "Robotica",
        cuartil: "Q4",
        factorImpacto: "1.177",
        enlace: "https://doi.org/10.1017/S0263574717000224",
      },
      {
        titulo: "Descriptor-based tracking algorithm using a depth camera",
        autores:
          "D. Miramontes Jaramillo, V. I. Kober, Victor Hugo Díaz Ramírez, V. N. Karnaukhov",
        revista: "Journal of Communications Technology and Electronics",
        cuartil: "Q4",
        factorImpacto: "0.431",
        enlace: "https://doi.org/10.1134/S1064226917060146",
      },
      {
        titulo:
          "Operator-based homogeneous coordinates: application in camera document scanning",
        autores: "Rigoberto Juarez Salazar, Victor Hugo Díaz Ramírez",
        revista: "Optical Engineering",
        cuartil: "Q4",
        factorImpacto: "0.993",
        enlace: "https://doi.org/10.1117/1.OE.56.7.070801",
      },
      {
        titulo:
          "Estimation of amplitude and standard deviation of noisy sinusoidal signals",
        autores: "Rigoberto Juarez Salazar, Victor Hugo Díaz Ramírez",
        revista: "Optical Engineering",
        cuartil: "Q4",
        factorImpacto: "0.993",
        enlace: "https://doi.org/10.1117/1.OE.56.1.013109",
      },
      {
        titulo:
          "Optimized robust multi-sensor scheme for simultaneous video and image iris recognition",
        autores:
          "Eduardo Garea Llano, Mireya S. García Vázquez, Juan M. Colores Vargas, Luis M. Zamudio Fuentes, Alejandro A. Ramírez Acosta",
        revista: "Pattern Recognition Letters",
        cuartil: "Q2",
        factorImpacto: "1.954",
        enlace: "https://doi.org/10.1016/j.patrec.2017.11.012",
      },
      {
        titulo:
          "On Control of a Boost DC-DC Power Converter under Constrained Input",
        autores: "Javier Moreno Valenzuela, Octavio García Alarcón",
        revista: "Complexity",
        cuartil: "Q1",
        factorImpacto: "4.621",
        enlace: "https://doi.org/10.1155/2017/4143901",
      },
      {
        titulo:
          "Measurement and Nonlinear Behavioral Modeling of the Dynamic Bias Current in an LTE-A Chireix PA",
        autores:
          "José Alejandro Galaviz Aguilar, Hsiu Chen Chang, Francisco Martinez Rodriguez, Patrick Roblin, José Cruz Núñez Pérez",
        revista: "Microwave and Optical Technology Letters",
        cuartil: "Q4",
        factorImpacto: "0.948",
        enlace: "https://doi.org/10.1002/mop.30817",
      },
      {
        titulo:
          "Comparison of a genetic programming approach with ANFIS for power amplifier behavioral modeling and FPGA implementation",
        autores:
          "José Alejandro Galaviz Aguilar, Patrick Roblin, José Ricardo Cárdenas-Valdez, Emigdio Z. Flores, Leonardo Trujillo, José Cruz Nuñez Pérez, Oliver Schütze",
        revista: "Soft Computing",
        cuartil: "Q2",
        factorImpacto: "2.367",
        enlace: "https://doi.org/10.1007/s00500-017-2941-8",
      },
      {
        titulo:
          "A novel fractal antenna based on the Sierpinski structure for super wide-band applications",
        autores:
          "Cruz Ángel Figueroa Torres, José Luis Medina Monroy, Humberto Lobato Morales, Ricardo Arturo Chávez Pérez, Andrés Calvillo Téllez",
        revista: "Microwave and Optical Technology Letters",
        cuartil: "Q4",
        factorImpacto: "0.948",
        enlace: "https://doi.org/10.1002/mop.30489",
      },
      {
        titulo:
          "Real-time haze removal in monocular images using locally adaptive processing",
        autores:
          "Victor Hugo Diaz Ramirez, José Enrique Hernández Beltrán, Rigoberto Juarez Salazar",
        revista: "Journal of Real-Time Image Processing",
        cuartil: "Q3",
        factorImpacto: "1.574",
        enlace: "https://doi.org/10.1007/s11554-017-0698-z",
      },
      {
        titulo:
          "A procedure to find equivalences among dynamic models of planar biped robots",
        autores:
          "Víctor De León Gómez, Víctor Santibañez, Javier Moreno Valenzuela",
        revista: "Simulation Modelling Practice and Theory",
        cuartil: "Q2",
        factorImpacto: "2.092",
        enlace: "https://doi.org/10.1016/j.simpat.2017.03.009",
      },
      {
        titulo:
          "Design of a fuzzy controller via fuzzy Lyapunov synthesis for the stabilization of an inertial wheel pendulum",
        autores:
          "Nohe R. Cazarez Castro, Luis T. Aguilar, Selene L. Cardenas-Maciel, Carlos A. Goribar Jiménez, Mauricio Odreman Vera",
        revista:
          "Revista Iberoamericana de Automática e Informática Industrial RIAI",
        cuartil: "Q4",
        factorImpacto: "0.494",
        enlace: "https://doi.org/10.1016/j.riai.2016.12.001",
      },
      {
        titulo:
          "A MRAC Principle for a Single-Link Electrically Driven Robot with Parameter Uncertainties",
        autores: "Carlos Aguilar Avelar, Javier Moreno Valenzuela",
        revista: "Complexity",
        cuartil: "Q2",
        factorImpacto: "1.829",
        enlace: "https://doi.org/10.1155/2017/9296012",
      },
      {
        titulo:
          "Effects of nonlinear friction compensation in the inertia wheel pendulum",
        autores:
          "Carlos Aguilar Avelar, Ricardo Rodríguez Calderón, Sergio Puga Guzmán, Javier Moreno Valenzuela",
        revista: "Journal of Mechanical Science and Technology",
        cuartil: "Q3",
        factorImpacto: "1.315",
        enlace: "https://doi.org/10.1007/s12206-017-0843-4",
      },
    ],
    2018: [
      {
        titulo:
          "Dynamics of the tumor-immune-virus interactions: Convergence conditions to tumor-only or tumor-free equilibrium points",
        autores: "Konstantin E. Starkov, Giovana Andres Garfias",
        revista: "Mathematical Biosciences & Engineering",
        cuartil: "Q3",
        factorImpacto: "1.313",
        enlace: "https://doi.org/10.3934/mbe.2019020",
      },
      {
        titulo: "Fuzzy Evaluation of Pharmacokinetic Models",
        autores:
          "Carlos Sepúlveda, Oscar H. Montiel Ross, José M. Cornejo Bravo, Roberto Sepúlveda",
        revista: "Computational Intelligence and Neuroscience",
        cuartil: "Q3",
        factorImpacto: "1.563",
        enlace: "https://doi.org/10.1155/2018/1983897",
      },
      {
        titulo:
          "Quantum inspired algorithm for microcalcification detection in mammograms",
        autores: "Yoshio Rubio, Oscar H. Montiel Ross, Roberto Sepúlveda",
        revista: "Information Sciences",
        cuartil: "Q1",
        factorImpacto: "5.524",
        enlace: "https://doi.org/10.1016/j.ins.2018.12.040",
      },
      {
        titulo:
          "Switched Polytopic Controller Applied on a Positive Reconfigurable Power Electronic Converter",
        autores:
          "Martín A. Rodríguez Licea, Francisco J. Perez-Pinal, Alejandro I. Barranco Gutiérrez, José Cruz Nuñez Perez",
        revista: "Energies",
        cuartil: "Q3",
        factorImpacto: "2.707",
        enlace: "https://doi.org/10.3390/en11010116",
      },
      {
        titulo:
          "A Reconfigurable Buck, Boost, and Buck-Boost Converter: Unified Model and Robust Controller",
        autores:
          "Martín Antonio Rodríguez Licea, Francisco Javier Perez Pinal, Alejandro Israel Barranco Gutiérrez, Carlos Alonso Herrera Ramírez, Jose Cruz Nuñez Perez",
        revista: "Mathematical Problems in Engineering",
        cuartil: "Q3",
        factorImpacto: "1.179",
        enlace: "https://doi.org/10.1155/2018/6251787",
      },
      {
        titulo:
          "Nonlinear Robust Control for Low Voltage Direct-Current Residential Microgrids with Constant Power Loads",
        autores:
          "Martín Antonio Rodríguez Licea, Francisco Javier Pérez Pinal, Jose Cruz Nuñez Perez, Carlos Alonso Herrera-Ramirez",
        revista: "Energies",
        cuartil: "Q3",
        factorImpacto: "2.707",
        enlace: "https://doi.org/10.3390/en11051130",
      },
      {
        titulo:
          "Relations between Touch Target Size and Drag Distance in Mobile Applications for Users with Autism Spectrum Disorders",
        autores:
          "Angeles Quezada, Reyes Juárez Ramírez, Samantha Jiménez, Juan José Tapia Armena, Rodolfo Villarroel, Roberto Munoz",
        revista: "Journal of Medical Systems",
        cuartil: "Q2",
        factorImpacto: "4.68",
        enlace: "https://doi.org/10.1007/s10916-018-1044-0",
      },
      {
        titulo:
          "Tracking of periodic oscillations in an underactuated system via adaptive neural networks",
        autores:
          "Sergio A. Puga Guzmán, Carlos Aguilar Avelar, Javier Moreno Valenzuela, Víctor Santibáñez",
        revista: "Journal of Low Frequency Noise, Vibration and Active Control",
        cuartil: "Q2",
        factorImpacto: "1.596",
        enlace: "https://doi.org/10.1177/1461348417752988",
      },
      {
        titulo:
          "Three-dimensional pose tracking by image correlation and particle filtering",
        autores:
          "Kenia Picos, Víctor Hugo Diaz Ramirez, Antonio Sanz Montemayor, Juan Jose Pantrigo, Vitaly Kober",
        revista: "Optical Engineering",
        cuartil: "Q3",
        factorImpacto: "1.209",
        enlace: "https://doi.org/10.1117/1.OE.57.7.073108",
      },
      {
        titulo:
          "Pose Estimation in Noncontinuous Video Sequences Using Evolutionary Correlation Filtering",
        autores:
          "Kenia Picos, Ulises Orozco Rosas, Victor H. Díaz Ramírez, Oscar H. Montiel Ross",
        revista: "Mathematical Problems in Engineering",
        cuartil: "Q3",
        factorImpacto: "1.179",
        enlace: "https://doi.org/10.1155/2018/5798696",
      },
      {
        titulo:
          "Nonlinear PID-Type Controller for Quadrotor Trajectory Tracking",
        autores:
          "Javier Moreno Valenzuela, Ricardo Pérez Alcocer, Manuel Guerrero Medina, Alejandro Dzul",
        revista: "IEEE/ASME Transactions on Mechatronics",
        cuartil: "Q1",
        factorImpacto: "4.943",
        enlace: "https://doi.org/10.1109/TMECH.2018.2855161",
      },
      {
        titulo:
          "Saliency-based selection of visual content for deep convolutional neural networks: Application to architectural style classification",
        autores:
          "A. Montoya Obeso, J. Benois-Pineau, Mireya S. García Vázquez, A. A. Ramírez Acosta",
        revista: "Multimedia Tools and Applications",
        cuartil: "Q2",
        factorImpacto: "8.199",
        enlace: "https://doi.org/10.1007/s11042-018-6515-2",
      },
      {
        titulo:
          "Adaptive control schemes applied to a control moment gyroscope of 2 degrees of freedom",
        autores:
          "Jorge Montoya Cháirez, Víctor Santibáñez, Javier Moreno Valenzuela",
        revista: "Mechatronics",
        cuartil: "Q2",
        factorImpacto: "2.978",
        enlace: "https://doi.org/10.1016/j.mechatronics.2018.11.011",
      },
      {
        titulo:
          "Reduction of power consumption on quadrotor vehicles via trajectory design and a controller-gains tuning stage",
        autores:
          "Roger Miranda Colorado, Luis T. Aguilar, José E. Herrero Brito",
        revista: "Aerospace Science and Technology",
        cuartil: "Q1",
        factorImpacto: "2.829",
        enlace: "https://doi.org/10.1016/j.ast.2018.04.027",
      },
      {
        titulo:
          "A New Parameter Identification Algorithm for a Class of Second Order Nonlinear Systems: An On-line Closed-loop Approach",
        autores: "Roger Miranda Colorado",
        revista: "International Journal of Control, Automation and Systems",
        cuartil: "Q3",
        factorImpacto: "2.181",
        enlace: "https://doi.org/10.1007/s12555-017-0380-z",
      },
      {
        titulo:
          "A model-based velocity controller for chaotization of flexible joint robot manipulators: Synthesis, analysis, and experimental evaluations",
        autores:
          "Roger Miranda Colorado, Luis T. Aguilar, Javier Moreno Valenzuela",
        revista: "International Journal of Advanced Robotic Systems",
        cuartil: "Q4",
        factorImpacto: "1.223",
        enlace: "https://doi.org/10.1177/1729881418802528",
      },
      {
        titulo:
          "The four-dimensional Kirschner-Panetta type cancer model: How to obtain tumor eradication?",
        autores: "Alexander P. Krishchenko, Konstantin E. Starkov",
        revista: "Mathematical Biosciences & Engineering",
        cuartil: "Q3",
        factorImpacto: "1.313",
        enlace: "https://doi.org/10.3934/mbe.2018057",
      },
      {
        titulo: "Pattern Recognition: Recent Advances and Applications",
        autores:
          "Vitaly Kober, Tae Choi, Victor Hugo Diaz Ramírez, Pablo Aguilar González",
        revista: "Mathematical Problems in Engineering",
        cuartil: "Q3",
        factorImpacto: "1.179",
        enlace: "https://doi.org/10.1155/2018/8510319",
      },
      {
        titulo:
          "Homography estimation by two PClines Hough transforms and a square-radial checkerboard pattern",
        autores: "Rigoberto Juarez Salazar, Victor Hugo Diaz Ramirez",
        revista: "Applied Optics",
        cuartil: "Q2",
        factorImpacto: "1.973",
        enlace: "https://doi.org/10.1364/AO.57.003316",
      },
      {
        titulo: "How do phase-shifting algorithms work?",
        autores:
          "Rigoberto Juarez Salazar, Ceciibet Mendoza Rodriguez, Jose E Hernandez Beltran, Carlos Robledo-Sanchez",
        revista: "European Journal of Physics",
        cuartil: "Q4",
        factorImpacto: "0.861",
        enlace: "https://doi.org/10.1088/1361-6404/aae3c2",
      },
      {
        titulo:
          "Design of estimators for restoration of images degraded by haze using genetic programming",
        autores:
          "Jose Enrique Hernandez Beltran, Victor Hugo Diaz Ramirez, Leonardo Trujillo, Pierrick Legrand",
        revista: "Swarm and Evolutionary Computation",
        cuartil: "Q1",
        factorImpacto: "6.33",
        enlace: "https://doi.org/10.1016/j.swevo.2018.11.008",
      },
      {
        titulo: "FPGA Realisation of n-QAM Digital Modulators",
        autores:
          "Jose Alejandro Galaviz Aguilar, José Cruz Nuñez Perez, F. J. Perez Pinal, E. Tlelo Cuautle",
        revista: "IETE Technical Review",
        cuartil: "Q3",
        factorImpacto: "1.618",
        enlace: "https://doi.org/10.1080/02564602.2018.1470038",
      },
      {
        titulo:
          "Computational Techniques for Eye Movements Analysis towards Supporting Early Diagnosis of Alzheimer’s Disease: A Review",
        autores:
          "Jessica Beltran Marquez, Mireya S. García Vázquez, Jenny Benois Pineau, Luis Miguel Gutierrez Robledo, Jean François Dartigues",
        revista: "Computational and Mathematical Methods in Medicine",
        cuartil: "Q3",
        factorImpacto: "1.563",
        enlace: "https://doi.org/10.1155/2018/2676409",
      },
      {
        titulo:
          "Recognition of audible disruptive behavior from people with dementia",
        autores:
          "Jessica Beltran Marquez, René Navarro, Edgar Chávez, Jesús Favela, Valeria Soto Mendoza, Catalina Ibarra",
        revista: "Personal and Ubiquitous Computing",
        cuartil: "Q3",
        factorImpacto: "1.735",
        enlace: "https://doi.org/10.1007/s00779-018-01188-8",
      },
    ],
    2019: [
      {
        titulo:
          "On the synchronization techniques of chaotic oscillators and their FPGA-based implementation for secure image transmission",
        autores:
          "Omar Guillén Fernández, Ashley Meléndez Cano, Esteban Tlelo Cuautle, Jose Cruz Núñez Pérez, Jose de Jesus Rangel Magdaleno",
        revista: "PLoS ONE",
        cuartil: "Q2",
        factorImpacto: "2.74",
        enlace: "https://doi.org/10.1371/journal.pone.0209618",
      },
      {
        titulo: "On the n-Dimensional Phase Portraits",
        autores:
          "Martín Antonio Rodríguez Licea, Francisco J. Perez Pinal, José Cruz Nuñez Pérez, Yuma Sandoval Ibarra",
        revista: "Applied Sciences",
        cuartil: "Q2",
        factorImpacto: "2.217",
        enlace: "https://doi.org/10.3390/app9050872",
      },
      {
        titulo:
          "Inferring Drivers’ Visual Focus Attention Through Head-Mounted Inertial Sensors",
        autores:
          "José M. Ramírez, Marcela D. Rodríguez, Ángel G. Andrade, Luis A. Castro, Jessica Beltran Marquez, Josué S. Armenta",
        revista: "IEEE Access",
        cuartil: "Q1",
        factorImpacto: "3.745",
        enlace: "https://doi.org/10.1109/ACCESS.2019.2960567",
      },
      {
        titulo:
          "A Lyapunov Analysis for Mamdani Type Fuzzy-based Sliding Mode Control",
        autores:
          "Pablo Jose Prieto Entenza, Nohe Ramon Cazarez Castro, Luis T. Aguilar, Selene L. Cardenas-Maciel, Jorge Antonio Lopez Renteria",
        revista: "IEEE Transactions on Fuzzy Systems",
        cuartil: "Q1",
        factorImpacto: "9.518",
        enlace: "https://doi.org/10.1109/TFUZZ.2019.2923167",
      },
      {
        titulo:
          "A novel Lyapunov-based trajectory tracking controller for a quadrotor: Experimental analysis by using two motion tasks",
        autores: "Ricardo Pérez Alcocer, Javier Moreno Valenzuela",
        revista: "Mechatronics",
        cuartil: "Q2",
        factorImpacto: "2.992",
        enlace: "https://doi.org/10.1016/j.mechatronics.2019.05.006",
      },
      {
        titulo:
          "Adaptive Control for Quadrotor Trajectory Tracking With Accurate Parametrization",
        autores: "Ricardo Pérez Alcocer, Javier Moreno Valenzuela",
        revista: "IEEE Access",
        cuartil: "Q1",
        factorImpacto: "3.745",
        enlace: "https://doi.org/10.1109/ACCESS.2019.2912608",
      },
      {
        titulo:
          "Hybrid Path Planning Algorithm Based on Membrane Pseudo-Bacterial Potential Field for Autonomous Mobile Robots",
        autores: "Ulises Orozco Rosas, Kenia Picos, Oscar H. Montiel Ross",
        revista: "IEEE Access",
        cuartil: "Q1",
        factorImpacto: "3.745",
        enlace: "https://doi.org/10.1109/ACCESS.2019.2949835",
      },
      {
        titulo:
          "Mobile robot path planning using membrane evolutionary artificial potential field",
        autores:
          "Ulises Orozco Rosas, Oscar H. Montiel Ross, Roberto Sepúlveda",
        revista: "Applied Soft Computing",
        cuartil: "Q1",
        factorImpacto: "5.472",
        enlace: "https://doi.org/10.1016/j.asoc.2019.01.036",
      },
      {
        titulo:
          "A Class of Proportional-Integral with Anti-Windup Controllers for DC-DC Buck Power Converters with Saturating Input",
        autores: "Javier Moreno Valenzuela",
        revista: "IEEE Transactions on Circuits and Systems II-Express Briefs",
        cuartil: "Q2",
        factorImpacto: "2.814",
        enlace: "https://doi.org/10.1109/TCSII.2019.2913336",
      },
      {
        titulo:
          "A Feedback Linearization-Based Motion Controller for a UWMR with Experimental Evaluations",
        autores:
          "Luis Montoya Villegas, Javier Moreno Valenzuela, Ricardo Pérez Alcocer",
        revista: "Robotica",
        cuartil: "Q3",
        factorImpacto: "1.509",
        enlace: "https://doi.org/10.1017/S0263574718001443",
      },
      {
        titulo: "Quantum-Inspired Acromyrmex Evolutionary Algorithm",
        autores:
          "Oscar H. Montiel Ross, Yoshio Rubio, Cynthia Olvera, Ajelet Rivera",
        revista: "Scientific Reports",
        cuartil: "Q1",
        factorImpacto: "1.34",
        enlace: "https://doi.org/10.1038/s41598-019-48409-5",
      },
      {
        titulo:
          "A review of quantum-inspired metaheuristics: going from classical computers to real quantum computers",
        autores: "Oscar H. Montiel Ross",
        revista: "IEEE Access",
        cuartil: "Q1",
        factorImpacto: "3.745",
        enlace: "https://doi.org/10.1109/ACCESS.2019.2962155",
      },
      {
        titulo:
          "Closed-loop parameter identification of second-order non-linear systems: A distributional approach using delayed reference signals",
        autores: "Roger Miranda Colorado",
        revista: "IET Control Theory and Applications",
        cuartil: "Q2",
        factorImpacto: "3.343",
        enlace: "https://doi.org/10.1049/iet-cta.2018.5457",
      },
      {
        titulo:
          "Finite-time sliding mode controller for perturbed second-order systems",
        autores: "Roger Miranda Colorado",
        revista: "ISA Transactions",
        cuartil: "Q1",
        factorImpacto: "4.305",
        enlace: "https://doi.org/10.1016/j.isatra.2019.05.026",
      },
      {
        titulo:
          "A family of anti-swing motion controllers for 2D-cranes with load hoisting/lowering",
        autores: "Roger Miranda Colorado, Luis T. Aguilar",
        revista: "Mechanical Systems and Signal Processing",
        cuartil: "Q1",
        factorImpacto: "6.471",
        enlace: "https://doi.org/10.1016/j.ymssp.2019.106253",
      },
      {
        titulo:
          "Parameter identification of conservative Hamiltonian systems using first integrals",
        autores: "Roger Miranda Colorado",
        revista: "Applied Mathematics and Computation",
        cuartil: "Q1",
        factorImpacto: "3.472",
        enlace: "https://doi.org/10.1016/j.amc.2019.124860",
      },
      {
        titulo:
          "Robust PID control of quadrotors with power reduction analysis",
        autores: "Roger Miranda Colorado, Luis T. Aguilar",
        revista: "ISA Transactions",
        cuartil: "Q1",
        factorImpacto: "4.305",
        enlace: "https://doi.org/10.1016/j.isatra.2019.08.045",
      },
      {
        titulo:
          "Flexible camera-projector calibration using superposed color checkerboards",
        autores: "Rigoberto Juarez Salazar, Victor Hugo Díaz Ramírez",
        revista: "Optics and Lasers in Engineering",
        cuartil: "Q1",
        factorImpacto: "4.273",
        enlace: "https://doi.org/10.1016/j.optlaseng.2019.02.016",
      },
      {
        titulo:
          "Key concepts for phase-to-coordinate conversion in fringe projection systems",
        autores:
          "Rigoberto Juarez Salazar, Alejandra Giron, Juan Zheng, Victor Hugo Diaz Ramirez",
        revista: "Applied Optics",
        cuartil: "Q3",
        factorImpacto: "1.961",
        enlace: "https://doi.org/10.1364/AO.58.004828",
      },
      {
        titulo:
          "Laser-induced electrical signal filtering by multilayer reduced graphene oxide decorated with Au nanoparticles",
        autores:
          "E. Jiménez Marín, Javier Moreno Moreno Valenzuela, M. Trejo Valdez, A. Martinez Rivas, J. R. Vargas García, C. Torres Torres",
        revista: "Optics Express",
        cuartil: "Q1",
        factorImpacto: "3.669",
        enlace: "https://doi.org/10.1364/OE.27.007330",
      },
      {
        titulo:
          "Adaptive matched filter for implicit-target recognition: application in three-dimensional reconstruction",
        autores:
          "Jose Enrique Hernandez Beltran, Victor Hugo Diaz Ramirez, Rigoberto Juarez Salazar",
        revista: "Applied Optics",
        cuartil: "Q3",
        factorImpacto: "1.961",
        enlace: "https://doi.org/10.1364/AO.58.008920",
      },
      {
        titulo:
          "Analysis and Design of a Controller for an Input-Saturated DC–DC Buck Power Converter",
        autores: "Octavio García Alarcón, Javier Moreno Valenzuela",
        revista: "IEEE Access",
        cuartil: "Q1",
        factorImpacto: "3.745",
        enlace: "https://doi.org/10.1109/ACCESS.2019.2912858",
      },
      {
        titulo:
          "High‐order sliding‐mode observer–based input‐output linearization",
        autores:
          "Alejandra Ferreira de Loza, L. Fridman, Luis T. Aguilar, R. Iriarte",
        revista: "International Journal of Robust and Nonlinear Control",
        cuartil: "Q2",
        factorImpacto: "3.503",
        enlace: "https://doi.org/10.1002/rnc.4556",
      },
      {
        titulo:
          "Semi-automated data labeling for activity recognition in pervasive healthcare",
        autores:
          "Dagoberto Cruz Sandoval, Jessica Beltran Marquez, Matias Garcia Constantino, Luis A. Gonzalez Jasso, Jesus Favela, Irvin Hussein Lopez Nava, Ian Cleland, Andrew Ennis, Netzahualcoyotl Hernandez-Cruz, Joseph Rafferty, Jonathan Synnott, Chris Nugent",
        revista: "Sensors",
        cuartil: "Q2",
        factorImpacto: "3.275",
        enlace: "https://doi.org/10.3390/s19143035",
      },
      {
        titulo:
          "Ultimate dynamics and optimal control of a multi-compartment model of tumor resistance to chemotherapy",
        autores:
          "Arturo Alvarez Arenas, Konstantin E. Starkov, Gabriel F. Calvo, Juan Belmonte Beitia",
        revista: "Discrete and Continuous Dynamical Systems - Series B",
        cuartil: "Q2",
        factorImpacto: "1.27",
        enlace: "https://doi.org/10.3934/dcdsb.2019082",
      },
      {
        titulo:
          "Robust sensorless speed tracking controller for surface-mount permanent magnet synchronous motors subjected to uncertain load variations",
        autores:
          "Luis T. Aguilar, Ramón Ramírez Villalobos, Alejandra Ferreira de Loza, Luis Nestor Coria",
        revista: "International Journal of Systems Science",
        cuartil: "Q3",
        factorImpacto: "2.149",
        enlace: "https://doi.org/10.1080/00207721.2019.1692953",
      },
    ],
    2020: [
      {
        titulo:
          "On the analysis of hyper-parameter space for a genetic programming system with iterated F-Race",
        autores:
          "Leonardo Trujillo, Ernesto Álvarez González, Edgar Galván, Juan José Tapia Armenta, Antonio Ponsich",
        revista: "Soft Computing",
        cuartil: "(2019) Q2",
        factorImpacto: "(2019) 3.050",
        enlace: "https://doi.org/10.1007/s00500-020-04829-4",
      },
      {
        titulo:
          "Convergence dynamics in one eco-epidemiological model: Self-healing and some related results",
        autores: "Alexander P. Krishchenko, Konstantin E. Starkov",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "(2019) Q1",
        factorImpacto: "(2019) 4.115",
        enlace: "https://doi.org/10.1016/j.cnsns.2020.105223",
      },
      {
        titulo:
          "A cancer model for the angiogenic switch and immunotherapy: tumor eradication in analysis of ultimate dynamics",
        autores: "Konstantin E. Starkov",
        revista: "International Journal of Bifurcation and Chaos",
        cuartil: "(2019) Q2",
        factorImpacto: "(2019) 2.469",
        enlace: "https://doi.org/10.1142/S0218127420501503",
      },
      {
        titulo:
          "Stabilization in a 3D eco-epidemiological model: from the complete extinction of a predator population to their self-healing",
        autores: "Konstantin E. Starkov, Alexander P. Krishchenko",
        revista: "Mathematical Methods in the Applied Sciences",
        cuartil: "(2019) Q2",
        factorImpacto: "(2019) 1.626",
        enlace: "https://doi.org/10.1002/mma.6873",
      },
      {
        titulo:
          "Ultimate tumor dynamics and eradication using oncolytic virotherapy",
        autores: "Konstantin E. Starkov, Anatoly N. Kanatnikov, Giovana Andres",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "(2019) Q1",
        factorImpacto: "(2019) 4.115",
        enlace: "https://doi.org/10.1016/j.cnsns.2020.105469",
      },
      {
        titulo:
          "Assisting older adults with medication reminders through an audio-based activity recognition system",
        autores:
          "Marcela D. Rodríguez, Jessica Beltran Marquez, Maribel Valenzuela Beltán, Dagoberto Cruz Sandoval, Jesús Favela",
        revista: "Personal and Ubiquitous Computing",
        cuartil: "(2019) Q3",
        factorImpacto: "(2019) 2.000",
        enlace: "https://doi.org/10.1007/s00779-020-01420-4",
      },
      {
        titulo:
          "Output feedback controller for trajectory tracking of robot manipulators without velocity measurements nor observers",
        autores: "Raúl Rascon, Javier Moreno Valenzuela",
        revista: "IET Control Theory and Applications",
        cuartil: "(2019) Q2",
        factorImpacto: "(2019) 3.343",
        enlace: "https://doi.org/10.1049/iet-cta.2020.0037",
      },
      {
        titulo:
          "FPGA‐based system for effective IQ imbalance mitigation of RF power amplifier",
        autores:
          "Jose Cruz Nuñez Perez, Sergio Alberto Juarez Cazares, Jose Alejandro Galaviz Aguilar, Yuma Sandoval Ibarra, Francisco Javier Perez Pinal, Esteban Tlelo Cuautle",
        revista: "International Journal of Circuit Theory and Applications",
        cuartil: "(2019) Q3",
        factorImpacto: "(2019) 1.581",
        enlace: "https://doi.org/10.1002/cta.2746",
      },
      {
        titulo: "A family of saturated controllers for UWMRs",
        autores:
          "Javier Moreno Valenzuela, Luis Montoya Villegas, Ricardo Pérez Alcocer, Jesús Sandoval",
        revista: "ISA Transactions",
        cuartil: "(2019) Q1",
        factorImpacto: "(2019) 4.305",
        enlace: "https://doi.org/10.1016/j.isatra.2020.01.007",
      },
      {
        titulo:
          "Robust trajectory tracking control of an underactuated control moment gyroscope via neural network–based feedback linearization",
        autores:
          "Javier Moreno Valenzuela, Jorge Montoya Cháirez, Víctor Santibáñez",
        revista: "Neurocomputing",
        cuartil: "(2019) Q1",
        factorImpacto: "(2019) 4.438",
        enlace: "https://doi.org/10.1016/j.neucom.2020.04.019",
      },
      {
        titulo:
          "Experimental Parameter Identifications of a Quadrotor by Using an Optimized Trajectory",
        autores:
          "Ivan Lopez Sanchez, Jorge Montoya Cháirez, Ricardo Pérez Alcocer, Javier Moreno Valenzuela",
        revista: "IEEE Access",
        cuartil: "(2019) Q1",
        factorImpacto: "(2019) 3.745",
        enlace: "https://doi.org/10.1109/ACCESS.2020.3023643",
      },
      {
        titulo:
          "Multi-demodulation phase-shifting and intensity pattern projection profilometry",
        autores:
          "Rigoberto Juarez Salazar, Juana Martínez Laguna, Víctor Hugo Díaz Ramírez",
        revista: "Optics and Lasers in Engineering",
        cuartil: "(2019) Q1",
        factorImpacto: "(2019) 4.273",
        enlace: "https://doi.org/10.1016/j.optlaseng.2020.106085",
      },
      {
        titulo: "Distorted pinhole camera modeling and calibration",
        autores:
          "Rigoberto Juarez Salazar, Juan Zheng, Víctor Hugo Díaz Ramírez",
        revista: "Applied Optics",
        cuartil: "(2019) Q3",
        factorImpacto: "(2019) 1.961",
        enlace: "https://doi.org/10.1364/AO.412159",
      },
      {
        titulo:
          "Facial landmark detection and tracking with dynamically adaptive matched filters",
        autores:
          "Viridiana Contreras González, Víctor Hugo Díaz Ramírez, Rigoberto Juárez Salazar",
        revista: "Journal of Electronic Imaging",
        cuartil: "(2019) Q4",
        factorImpacto: "(2019) 0.884",
        enlace: "https://doi.org/10.1117/1.JEI.29.3.033004",
      },
      {
        titulo:
          "Implementation of a parallel algorithm of image segmentation based on region growing",
        autores:
          "Jesús Antonio Álvarez Cedillo, Mario Aguilar Fernández, Teodoro Álvarez Sánchez, Raúl Junior Sandoval Gómez",
        revista: "Eastern-European Journal of Enterprise Technologies",
        cuartil: "Q2",
        factorImpacto: "DOI: https://doi.org/10.15587/1729-4061.2020.197095",
        enlace: "https://doi.org/10.15587/1729-4061.2020.197095",
      },
    ],
    2021: [
      {
        titulo:
          "Sensorless control for dc–dc boost converter via generalized parameter estimation-based observer",
        autores:
          "Xiaoyu Zhang, Mizraim Martinez-Lopez, Wei He, Yukai Shang, Chen Jiang, Javier Moreno Valenzuela",
        revista: "Applied Sciences",
        cuartil: "Q2",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.3390/app11167761",
      },
      {
        titulo:
          "Prescribed-time stabilization of controllable planar systems using switched state feedback",
        autores: "Ramón I. Verdés Kairuz, Yury Orlov, Luis T. Aguilar",
        revista: "IEEE Control Systems Letters",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1109/LCSYS.2020.3046682",
      },
      {
        titulo:
          "CMOS OTA-Based Filters for Designing Fractional-Order Chaotic Oscillators",
        autores:
          "Martín Alejandro Valencia-Ponce, Perla Rubí Castañeda-Aviña, Esteban Tlelo-Cuautle, Victor Hugo Carbajal-Gómez, Victor Rodolfo González-Díaz, Yuma Sandoval-Ibarra, José Cruz Núñez Pérez",
        revista: "Fractal and Fractional",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.3390/fractalfract5030122",
      },
      {
        titulo:
          "Eradication conditions of infected cell populations in the 7-order HIV model with viral mutations and related results",
        autores: "Konstantin E. Starkov, Anatoly N. Kanatnikov",
        revista: "Mathematics",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.3390/math9161862",
      },
      {
        titulo:
          "Energy regulation for a torque-driven vertical inertia wheel pendulum",
        autores:
          "Jesús Sandoval, Jerónimo Moyrón, Rafael Kelly, Víctor Santibáñez, Javier Moreno Valenzuela",
        revista: "Control Engineering Practice",
        cuartil: "Q2",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1016/j.conengprac.2021.104909",
      },
      {
        titulo:
          "Quantum-Inspired Evolutionary Algorithms on IBM Quantum Experience",
        autores: "Yoshio Rubio, Cynthia Olvera, Oscar H. Montiel Ross",
        revista: "Engineering Letters",
        cuartil: "Q3",
        factorImpacto: "(2020) n/a (2021)",
        enlace:
          "http://www.engineeringletters.com/issues_v29/issue_4/EL_29_4_30.pdf",
      },
      {
        titulo:
          "Multicriteria evaluation of deep neural networks for semantic segmentation of mammographies",
        autores: "N/A",
        revista: "Axioms",
        cuartil: "Q2",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.3390/axioms10030180",
      },
      {
        titulo:
          "Stability analysis for Mamdani-type integral fuzzy-based sliding mode control of systems under persistent disturbances",
        autores:
          "Pablo Jose Prieto-Entenza, Luis T. Aguilar, Selene L. Cardenas-Maciel, Jorge Antonio Lopez-Renteria, Nohe Ramon Cazarez Castro",
        revista: "IEEE Transactions on Fuzzy Systems",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1109/TFUZZ.2021.3063821",
      },
      {
        titulo:
          "Saturated Visual-Servoing Control Strategy for Nonholonomic Mobile Robots with Experimental Evaluations",
        autores:
          "Ricardo Pérez Alcocer, Luis Montoya Villegas, Angel Eduardo Lopez-Martinez, Javier Moreno Valenzuela",
        revista: "IEEE Access",
        cuartil: "Q2",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1109/ACCESS.2021.3114100",
      },
      {
        titulo: "DSP-HIL Comparison between IM Drive Control Strategies",
        autores:
          "Luis E. Ortega-García, Daniela Rodriguez-Sotelo, José Cruz Núñez Pérez, Yuma Sandoval-Ibarra, Francisco J. Perez-Pinal",
        revista: "Electronics",
        cuartil: "Q2",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.3390/electronics10080921",
      },
      {
        titulo:
          "Prescribed-Time Robust Differentiator Design Using Finite Varying Gains",
        autores: "Yury Orlov, Ramón I. Verdés Kairuz, Luis T. Aguilar",
        revista: "IEEE Control Systems Letters",
        cuartil: "Q2",
        factorImpacto: "(2020) n/a (2021)",
        enlace: "https://doi.org/10.1109/LCSYS.2021.3084134",
      },
      {
        titulo:
          "Maximizing the Chaotic Behavior of Fractional Order Chen System by Evolutionary Algorithms",
        autores:
          "José Cruz Núñez Pérez, Vincent Ademola Adeyemi, Yuma Sandoval Ibarra, Francisco Javier Perez Pinal, Esteban Tlelo-Cuautle",
        revista: "Mathematics",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.3390/math9111194",
      },
      {
        titulo:
          "FPGA Realization of Spherical Chaotic System with Application in Image Transmission",
        autores:
          "José Cruz Núñez Pérez, Vincent Ademola Adeyemi, Yuma Sandoval-Ibarra, F. Javier Pérez-Pinal, Esteban Tlelo-Cuautle",
        revista: "Mathematical Problems in Engineering",
        cuartil: "Q4",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1155/2021/5532106",
      },
      {
        titulo:
          "Constrained Trajectory Tracking Control of a Mobile Robot by Limited Integrator Anti-Windup",
        autores: "Javier Moreno Valenzuela",
        revista: "IEEE Transactions on Circuits and Systems II: Express Briefs",
        cuartil: "Q2",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1109/TCSII.2021.3111827",
      },
      {
        titulo:
          "Visual vs internal attention mechanisms in deep neural networks for image classification and object detection",
        autores:
          "Abraham Montoya Obeso, Jenny Benois-Pineau, Mireya Saraí García Vázquez, Alejandro Álvaro Ramírez Acosta",
        revista: "Pattern Recognition",
        cuartil: "Q1",
        factorImpacto: "(2020) 7.740 (2021)",
        enlace: "https://doi.org/10.1016/j.patcog.2021.108411",
      },
      {
        titulo:
          "Robust observer-based anti-swing control of 2D-crane systems with load hoisting-lowering",
        autores: "Roger Miranda Colorado",
        revista: "Nonlinear Dynamics",
        cuartil: "Q1",
        factorImpacto: "(2020) 5.022 (2021)",
        enlace: "https://doi.org/10.1007/s11071-021-06443-x",
      },
      {
        titulo:
          "Observer-based saturated proportional derivative control of perturbed second-order systems: Prescribed input and velocity constraints",
        autores: "Roger Miranda Colorado",
        revista: "ISA Transactions",
        cuartil: "Q1",
        factorImpacto: "(2020) 5.468 (2021)",
        enlace: "https://doi.org/10.1016/j.isatra.2021.05.001",
      },
      {
        titulo:
          "Increasing Power Generation Efficiency in Horizontal Wind Turbines by Rejecting Electromechanical Uncertainties due to the Wind",
        autores: "Jován Mérida, Luis T. Aguilar, Jorge Dávila",
        revista: "IEEE Control Systems Letters",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1109/LCSYS.2021.3060157",
      },
      {
        titulo:
          "Adaptive trajectory tracking control for quadrotors with disturbances by using generalized regression neural networks",
        autores:
          "Ivan Lopez-Sanchez, Francisco Rossomando, Ricardo Pérez-Alcocer, Carlos Soria, Ricardo Carelli, Javier Moreno Valenzuela",
        revista: "Neurocomputing",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1016/j.neucom.2021.06.079",
      },
      {
        titulo:
          "Self-Sustaining Oscillations with an Internal Two-Fuzzy Inference System Based on the Poincaré-Bendixson Method",
        autores:
          "Jorge Antonio Lopez-Renteria, Lisdan Herrera-Garcia, Selene L. Cardenas-Maciel, Luis T. Aguilar, Nohe Ramon Cazarezcastro",
        revista: "IEEE Transactions on Fuzzy Systems",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1109/TFUZZ.2021.3089053",
      },
      {
        titulo:
          "Evaluation Method of Deep Learning-Based Embedded Systems for Traffic Sign Detection",
        autores:
          "Sánchez-Adame, Moisés, Montiel-Ross, Oscar H., López-Montiel, Miguel Ángel, Ulises Orozco-Rosas, Kenia Picos",
        revista: "IEEE Access",
        cuartil: "Q2",
        factorImpacto: "(2020) 3.367 (2021)",
        enlace: "https://doi.org/10.1109/ACCESS.2021.3097969",
      },
      {
        titulo:
          "5D model of pancreatic cancer: Key features of ultimate dynamics",
        autores: "Alexander P. Krishcchenko, Konstantin E. Starkov",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1016/j.cnsns.2021.105997",
      },
      {
        titulo:
          "Self-excited periodic motion in underactuated mechanical systems using two-fuzzy inference system",
        autores:
          "Lisdan Herrera-Garcia, Nohe R.Cazarez-Castro, Selene L.Cardenas-Maciel, Jorge A.Lopez-Renteria, Luis T. Aguilar",
        revista: "Fuzzy Sets and Systems",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1016/j.fss.2021.04.017",
      },
      {
        titulo:
          "A 6-DOF sliding mode fault tolerant control solution for in-orbit autonomous rendezvous",
        autores:
          "David Henry, Jazmin Zenteno-Torres, Jérôme Cieslak, Alejandra Ferreira de Loza, Jorge Dávila",
        revista: "Aerospace Science and Technology",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1016/j.ast.2021.107050",
      },
      {
        titulo:
          "A Weighted Linearization Method for Highly RF-PA Nonlinear Behavior Based on the Compression Region Identification",
        autores:
          "Jose Alejandro Galaviz-Aguilar, Cesar Vargas-Rosales, José Ricardo Cárdenas-Valdez, Yasmany Martínez-Reyes, Everardo Inzunza-González, Yuma Sandoval-Ibarra, José Cruz Núñez Pérez",
        revista: "Applied Sciences",
        cuartil: "Q3",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.3390/app11072942",
      },
      {
        titulo:
          "Output-feedback sliding-mode controller for blood glucose regulation in critically Ill patients affected by type 1 diabetes",
        autores:
          "Roberto Franco, Alejandra Ferreira de Loza, Héctor Ríos, Louis Cassany, David Gucik-Derigny, Jérôme Cieslak",
        revista: "IEEE Transactions on Control Systems Technology",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1109/TCST.2020.3046420",
      },
      {
        titulo:
          "A Robust Nonlinear Model Reference Adaptive Control for Disturbed Linear Systems: An LMI Approach",
        autores:
          "Roberto Franco, Hector Rios, Alejandra Ferreira de Loza, Denis Efimov",
        revista: "IEEE Transactions on Automatic Control",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1109/TAC.2021.3069719",
      },
      {
        titulo:
          'Corrections to "Output-Feedback Sliding-Mode Controller for Blood Glucose Regulation in Critically Ill Patients Affected by Type 1 Diabetes"',
        autores:
          "Roberto Franco, Alejandra Ferreira de Loza, Héctor Ríos, Louis Cassany, David Gucik-Derigny, Jérôme Cieslak, Loïc Olçomendy, David Henry",
        revista: "IEEE Transactions on Control Systems Technology",
        cuartil: "Q1",
        factorImpacto: "(2019) 5.312 (2021)",
        enlace: "https://doi.org/10.1109/TCST.2021.3053437",
      },
      {
        titulo:
          "PI-Type Controllers and Modulation for Saturated DC-DC Buck Power Converters",
        autores:
          "Carlos Aguilar Ibañez, Javier Moreno Valenzuela, Octavio García Alarcón, Mizraim Martínez-López, José Angel Acosta, Miguel S. Suarez-Castanon",
        revista: "IEEE Access",
        cuartil: "Q2",
        factorImpacto: "(2019) 3.745 (2021)",
        enlace: "https://doi.org/10.1109/ACCESS.2021.3054600",
      },
      {
        titulo:
          "Leader-Follower Synchronization and ISS Analysis for a Network of Boundary-Controlled Wave PDEs",
        autores: "Luis T. Aguilar, Yury Orlov, Alessandro Pisano",
        revista: "IEEE Control Systems Letters",
        cuartil: "Q1",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.1109/LCSYS.2020.3004505",
      },
      {
        titulo:
          "Self-excited oscillations in an inverted cart-pendulum based on the two-relay approach",
        autores: "Luis T. Aguilar, José A. Ortega, Alejandra Ferreira",
        revista: "ISA Transactions",
        cuartil: "Q1",
        factorImpacto: "(2020) 5.468 (2021)",
        enlace: "https://doi.org/10.1016/j.isatra.2021.04.015",
      },
      {
        titulo:
          "FPGA Realization of the Parameter-Switching Method in the Chen Oscillator and Application in Image Transmission",
        autores:
          "Vincent Ademola Adeyemi, José Cruz Núñez Pérez, Yuma Sandoval-Ibarra, Francisco-Javier Perez-Pinal, Esteban Tlelo-Cuautle",
        revista: "Symmetry",
        cuartil: "Q2",
        factorImpacto: "No disponible",
        enlace: "https://doi.org/10.3390/sym13060923",
      },
    ],
    2022: [
      {
        titulo:
          "Robust observer design with prescribed settling-time bound and finite varying gains",
        autores: "Aguilar-Bustos, Luis T., Verdéz-Kairuz, Ramón I., Yury Orlov",
        revista: "European Journal of Control",
        cuartil: "Q3",
        factorImpacto: "(2021) 2.649 (2022)",
        enlace: "https://doi.org/10.1016/j.ejcon.2022.100667",
      },
      {
        titulo:
          "GSGP-CUDA — A CUDA framework for Geometric Semantic Genetic Programming",
        autores:
          "Tapia-Armenta, Juan José, Leonardo Trujillo, Jose Manuel Muñoz-Contreras, Daniel E. Hernández, Mauro Castelli",
        revista: "SoftwareX",
        cuartil: "Q2",
        factorImpacto: "(2021) 2.868 (2022)",
        enlace: "https://doi.org/10.1016/j.softx.2022.101085",
      },
      {
        titulo: "EEG-Based Emotion Recognition Using Deep Learning and M3GP",
        autores:
          "Calvillo-Téllez, Andrés, Adrián Rodríguez-Aguiñaga, Luis Muñoz-Delgado, Víctor Raúl López-López",
        revista: "Applied Sciences-Basel",
        cuartil: "Q2",
        factorImpacto: "(2021) 2.838 (2022)",
        enlace: "https://doi.org/10.3390/app12052527",
      },
      {
        titulo:
          "Quantum-inspired evolutionary algorithms on continuous space multiobjective problems",
        autores:
          "Montiel-Ross, Oscar H., Olvera-Pimentel, Cynthia Valeria, Rubio-Higuera, Yoshio Josué",
        revista: "Soft Computing",
        cuartil: "Q2",
        factorImpacto: "(2021) 3.732 (2022)",
        enlace: "https://doi.org/10.1007/s00500-022-06916-0",
      },
      {
        titulo:
          "Towards the Integration of an Islet-Based Biosensor in Closed-Loop Therapies for Patients With Type 1 Diabetes",
        autores:
          "Ferreira de Loza, Alejandra, Loïc Olçomendy, Louis Cassany, Antoine Pirog, Roberto Franco, et al.",
        revista: "Frontiers in Endocrinology",
        cuartil: "Q1",
        factorImpacto: "(2021) 6.055 (2022)",
        enlace: "https://doi.org/10.3389/fendo.2022.795225",
      },
      {
        titulo:
          "Nonlinear PI“D”-Type Control of Flexible Joint Robots by Using Motor Position Measurements is Globally Asymptotically Stable",
        autores: "Moreno-Valenzuela, Javier, Moyrón, Jerónimo, J. Sandoval",
        revista: "IEEE Transactions on Automatic Control",
        cuartil: "Q1",
        factorImpacto: "(2021) 6.549 (2022)",
        enlace: "https://doi.org/10.1109/TAC.2022.3194043",
      },
      {
        titulo:
          "Global asymptotic stability of input-saturated one degree-of-freedom Euler–Lagrange systems with Rayleigh dissipation under nonlinear control",
        autores:
          "Moreno-Valenzuela, Javier, Moyrón, Jerónimo, Martínez-López, Mizraim, Jiménez-Quiroz, Marco",
        revista: "International Journal of Control",
        cuartil: "Q2",
        factorImpacto: "(2021) 2.378 (2022)",
        enlace: "https://doi.org/10.1080/00207179.2022.2083688",
      },
      {
        titulo:
          "Saturated Proportional-integral-type Control of UWMRs with Experimental Evaluations",
        autores:
          "Moreno-Valenzuela, Javier, Pérez-Alcocer, Ricardo, Montoya-Villegas, Luis Gonzalo, Raúl Rascón",
        revista: "International Journal of Control, Automation and Systems",
        cuartil: "Q2",
        factorImpacto: "(2021) 2.964 (2022)",
        enlace: "https://doi.org/10.1007/s12555-020-0428-3",
      },
      {
        titulo:
          "Hybrid quantum genetic algorithm with adaptive rotation angle for the 0-1 Knapsack problem in the IBM Qiskit simulator",
        autores: "Montiel-Ross, Oscar H., Ballinas, Enrique",
        revista: "Soft Computing",
        cuartil: "Q2",
        factorImpacto: "(2021) 3.732 (2022)",
        enlace: "https://doi.org/10.1007/s00500-022-07460-7",
      },
      {
        titulo:
          "Observer-based proportional integral derivative control for trajectory tracking of wheeled mobile robots with kinematic disturbances",
        autores: "Miranda-Colorado, Roger",
        revista: "Applied Mathematics and Computation",
        cuartil: "Q1",
        factorImpacto: "(2021) 4.397 (2022)",
        enlace: "https://doi.org/10.1016/j.amc.2022.127372",
      },
      {
        titulo:
          "A robust nonlinear PI-type controller for the DC–DC buck–boost power converter",
        autores: "Moreno-Valenzuela, Javier, Martínez-López, Mizraim, Wei He",
        revista: "ISA Transactions",
        cuartil: "Q1",
        factorImpacto: "(2021) 5.911 (2022)",
        enlace: "https://doi.org/10.1016/j.isatra.2022.01.016",
      },
      {
        titulo:
          "Adaptive neural network-based trajectory tracking outer loop control for a quadrotor",
        autores:
          "Moreno-Valenzuela, Javier, López-Sánchez, Iván, Moyrón, Jerónimo",
        revista: "Aerospace Science and Technology",
        cuartil: "Q1",
        factorImpacto: "(2021) 5.457 (2022)",
        enlace: "https://doi.org/10.1016/j.ast.2022.107847",
      },
      {
        titulo:
          "Nonnegative Solutions of Systems with Fractional-Rational Right-Hand Sides and Localization of Attractors",
        autores: "Starkov, Konstantin E.",
        revista: "Differential Equations",
        cuartil: "Q3",
        factorImpacto: "(2021) 0.784 (2022)",
        enlace: "https://doi.org/10.1134/S0012266121110033",
      },
      {
        titulo:
          "Stereo-phase rectification for metric profilometry with two calibrated cameras and one uncalibrated projector",
        autores:
          "Juárez-Salazar, Rigoberto, Díaz-Ramírez, Víctor H., Ríos-Orellana, Obed I.",
        revista: "Applied Optics",
        cuartil: "Q3",
        factorImpacto: "(2021) 1.905 (2022)",
        enlace: "https://doi.org/10.1364/AO.461168",
      },
      {
        titulo:
          "An Image Encryption Scheme Synchronizing Optimized Chaotic Systems Implemented on Raspberry Pis",
        autores:
          "Núñez-Pérez, José Cruz, Omar Guillén-Fernández, Esteban Tlelo-Cuautle, et al.",
        revista: "Mathematics",
        cuartil: "Q1",
        factorImpacto: "(2021) 2.592 (2022)",
        enlace: "https://doi.org/10.3390/math10111907",
      },
      {
        titulo:
          "Trajectory tracking control of a self-balancing robot via adaptive neural networks",
        autores:
          "Moreno-Valenzuela, Javier, Montoya-Cháirez, Jorge Alberto, Víctor Santibáñez, Carlos Aguilar-Avelar",
        revista: "Engineering Science and Technology, an International Journal",
        cuartil: "Q1",
        factorImpacto: "(2021) 5.155 (2022)",
        enlace: "https://doi.org/10.1016/j.jestch.2022.101259",
      },
      {
        titulo: "Model reference adaptive control: A finite-time approach",
        autores: "Ferreira de Loza, Alejandra, Roberto Franco, Héctor Ríos",
        revista:
          "International Journal of Adaptive Control and Signal Processing",
        cuartil: "Q2",
        factorImpacto: "(2021) 3.369 (2022)",
        enlace: "https://doi.org/10.1002/acs.3399",
      },
      {
        titulo:
          "Parameter identification and state estimation for a diabetic glucose-insulin model via an adaptive observer",
        autores:
          "Ferreira de Loza, Alejandra, Roberto Franco, Héctor Ríos, et al.",
        revista: "International Journal of Robust and Nonlinear Control",
        cuartil: "Q1",
        factorImpacto: "(2021) 3.897 (2022)",
        enlace: "https://doi.org/10.1002/rnc.6030",
      },
      {
        titulo:
          "Homography estimation from a single-point correspondence using template matching and particle swarm optimization",
        autores:
          "Díaz-Ramírez, Víctor H., Juárez-Salazar, Rigoberto, Zheng, Juan, et al.",
        revista: "Applied Optics",
        cuartil: "Q3",
        factorImpacto: "(2021) 1.905 (2022)",
        enlace: "https://doi.org/10.1364/AO.444847",
      },
      {
        titulo:
          "Optimizing the Maximum Lyapunov Exponent of Fractional Order Chaotic Spherical System by Evolutionary Algorithms",
        autores:
          "Núñez-Pérez, José Cruz, Adeyemi, Vincent-Ademola, Esteban Tlelo-Cuautle, Francisco J. Pérez-Pinal",
        revista: "Fractal and Fractional",
        cuartil: "Q1",
        factorImpacto: "(2021) 3.577 (2022)",
        enlace: "https://doi.org/10.3390/fractalfract6080448",
      },
    ],
    2023: [
      {
        titulo:
          "An LMI–Based Robust Nonlinear Adaptive Observer for Disturbed Regression Models",
        revista: "IEEE Transactions on Automatic Control",
        cuartil: "Q1",
        factorImpacto: "(2022) 6.800 (2023)",
        autores:
          "Héctor Ríos; Alejandra Ferreira de Loza; Denis Efimov; Roberto Franco",
        enlace: "https://doi.org/10.1109/TAC.2023.3342890",
      },
      {
        titulo:
          "A methodology for setting-up a low-cost quadrotor experimental platform Control",
        revista: "Engineering Practice",
        cuartil: "Q2",
        factorImpacto: "(2022) 4.900 (2023)",
        autores:
          "Israel Domínguez, Roger Miranda-Colorado, Luis T. Aguilar-Bustos, Diego A. Mercado-Ravell",
        enlace: "https://doi.org/10.1016/j.conengprac.2023.105803",
      },
      {
        titulo:
          "Variable-gain sliding mode control for quadrotor vehicles: Lyapunov-based analysis and finite-time stability",
        revista: "International Journal of Control",
        cuartil: "Q3",
        factorImpacto: "(2022) 2.100 (2023)",
        autores:
          "Roger Miranda-Colorado, Israel domínguez, Luis T. Aguilar-Bustos",
        enlace: "https://doi.org/10.1080/00207179.2023.2285412",
      },
      {
        titulo:
          "Trajectory tracking nonlinear H∞ controller for wheeled mobile robots with disturbances observer",
        revista: "ISA Transactions",
        cuartil: "Q1",
        factorImpacto: "(2022) 7.300 (2023)",
        autores:
          "Jesús A. Rodríguez-Arellano, Roger Miranda-Colorado, Luis T. Aguilar-Bustos, M.A. Negrete-Villanueva",
        enlace: "https://doi.org/10.1016/j.isatra.2023.07.037",
      },
      {
        titulo:
          "Trajectory Tracking Outer Loop Regressor-Based Adaptive Controller for a Quadrotor",
        revista: "Applied Sciences-Basel",
        cuartil: "Q",
        factorImpacto: "(2022) 2.700 (2023)",
        autores:
          "Iván López-Sánchez, Jerónimo Moyrón, Luis Rodolfo García-Carrillo, Alejandro Dzul, Javier Moreno-Valenzuela",
        enlace: "https://doi.org/10.3390/app132212177",
      },
      {
        titulo:
          "Design and Analysis of an Input–Output Linearization-Based Trajectory Tracking Controller for Skid-Steering Mobile Robots",
        revista: "Machines",
        cuartil: "Q3 Q2",
        factorImpacto: "(2022) 2.600 (2023)",
        autores:
          "Javier Moreno-Valenzuela, Emanuel Slawiñski, Fernando A. Chicaiza, Francisco G. Rossomando, Vicente Mut, Marco A. Morán",
        enlace: "https://doi.org/10.3390/machines11110988",
      },
      {
        titulo: "PID control of quadrotor UAVs: A survey",
        revista: "Annual Reviews in Control",
        cuartil: "Q1 Q1",
        factorImpacto: "(2022) 9.400 (2023)",
        autores: "Iván López-Sánchez, Javier Moreno-Valenzuela",
        enlace: "https://doi.org/10.1016/j.arcontrol.2023.100900",
      },
      {
        titulo:
          "A robust finite–time model reference adaptive controller for arbitrary order disturbed LTI systems",
        revista: "ISA Transactions",
        cuartil: "Q1",
        factorImpacto: "(2022) 7.300 (2023)",
        autores: "Héctor Ríos, Roberto Franco, Alejandra Fereira de Loza",
        enlace: "https://doi.org/10.1016/j.isatra.2023.11.012",
      },
      {
        titulo:
          "Ultimate Dynamics of the Two-Phenotype Cancer Model: Attracting Sets and Global Cancer Eradication Condition",
        revista: "Mathematics",
        cuartil: "Q1",
        factorImpacto: "(2022) 2.400 (2023)",
        autores: "Anatoly N Kanatnikov, Konstantin E Starkov",
        enlace: "https://doi.org/10.3390/math11204275",
      },
      {
        titulo:
          "Cancer cell eradication in a 6D metastatic tumor model with time delay",
        revista: "Communications in Nonlinear Science and Numerical Simulation",
        cuartil: "Q1",
        factorImpacto: "(2022) 3.900 (2023)",
        autores: "Konstantin E Starkov, Anatoly N Kanatnikov",
        enlace: "https://doi.org/10.1016/j.cnsns.2023.107164",
      },
      {
        titulo: "Fractional PID Controller for Voltage-Lift Converter",
        revista: "Fractal and Fractional",
        cuartil: "Q1",
        factorImpacto: "(2022) 5.400 (2023) (2023)",
        autores:
          "Luis M. Martínez-Patiño, Francisco J. Pérez-Pinal, Allan Giovanni Soriano-Sánchez, Manuel Rico-Secades, Caarina Zárate-Orduño, José Cruz Núñez-Pérez",
        enlace: "https://doi.org/10.3390/fractalfract7070542",
      },
      {
        titulo:
          "FPGA Implementation of Parameter-Switching Scheme to Stabilize Chaos in Fractional Spherical Systems and Usage in Secure Image",
        revista: "Fractal and Fractional",
        cuartil: "Q",
        factorImpacto: "(2022) 5.400 (2023)",
        autores:
          "Vincent Ademola Adeyemi, Esteban Tlelo-Cuautle, Yuma Sandoval-Ibarra, Jose-Cruz Nuñez-Perez",
        enlace: "https://doi.org/10.3390/fractalfract7060440",
      },
      {
        titulo:
          "FPGA realization of four chaotic interference cases in a terrestrial trajectory model and application in image transmisión",
        revista: "Scientific Reports",
        cuartil: "Q2",
        factorImpacto: "(2022) 4.600 (2023)",
        autores:
          "Miguel-Angel Estudillo-Valdez, Vincent Ademola Adeyemi, Esteban Tlelo-Cuautle, Yuma Sandoval-Ibarra, Jose-Cruz Nuñez-Perez",
        enlace: "https://10.1038/s41598-023-39823-x",
      },
      {
        titulo:
          "Restoration of Binocular Images Degraded by Optical Scattering through Estimation of Atmospheric Coefficients",
        revista: "Sensors",
        cuartil: "Q2",
        factorImpacto: "(2022) 3.9 (2023)",
        autores:
          "Victor H. Diaz-Ramirez, Rigoberto Juarez-Salazar, Martín González-Ruiz, Vincent Ademola Adeyemi",
        enlace: "https://doi.org/10.3390/s23218918",
      },
      {
        titulo:
          "Are camera, projector, and camera–projector calibrations different?",
        revista: "Applied Optics",
        cuartil: "Q3",
        factorImpacto: "(2022) 1.900 (2023)",
        autores:
          "Rigoberto Juarez-Salazar, Sofia Esquivel-Hernandez, Victor H. Diaz-Ramirez",
        enlace: "https://doi.org/10.1364/AO.497149",
      },
      {
        titulo:
          "Editorial to the special issue on quantum intelligent systems and deep learning",
        revista: "Soft Computing",
        cuartil: "Q2",
        factorImpacto: "(2022) 4.1 (2023)",
        autores: "Oscar Castillo, Oscar H. Montiel, Fevrier Valdez",
        enlace: "https://doi.org/10.1007/s00500-023-08879-2",
      },
      {
        titulo:
          "Various Deep Learning Algorithms in Computational Intelligence",
        revista: "Axioms",
        cuartil: "Q1",
        factorImpacto: "(2022) 2.0 (2023)",
        autores: "Oscar H. Montiel-Ross",
        enlace: "https://doi.org/10.3390/axioms12050495",
      },
      {
        titulo:
          "Robust output-feedback orbital stabilization for underactuated mechanical systems via high-order sliding modes",
        revista: "Nonlinear Analysis-Hybrid Systems",
        cuartil: "Q2",
        factorImpacto: "(2022) 4.2 (2023)",
        autores:
          "Alejandra Ferreira de Loza, J.A. Ortega-Pérez, Luis T. Aguilar, R. Galván-Guerra",
        enlace: "https://doi.org/10.1016/j.nahs.2023.101351",
      },
      {
        titulo:
          "Latest advances in manufacturing and machine learning of bulk metallic glasses",
        revista: "Advanced Engineering Materials",
        cuartil: "Q2",
        factorImpacto: "(2022) 3.600 (2023)",
        autores:
          "Olivia A. Graeve, Mireya S. García-Vázquez, Zachary Cardieux, Alejandro A. Ramírez-Acosta",
        enlace: "https://doi.org/10.1002/adem.202201493",
      },
      {
        titulo:
          "Trajectory tracking double two-loop adaptive neural network control for a Quadrotor",
        revista:
          "Journal of the Franklin Institute-Engineering and Applied Mathematics",
        cuartil: "Q1",
        factorImpacto: "(2022) 4.100 (2023)",
        autores:
          "Ivan Lopez-Sanchez, Ricardo Pérez-Alcocer, Javier Moreno-Valenzuela",
        enlace: "https://doi.org/10.1016/j.jfranklin.2023.01.029",
      },
      {
        titulo:
          "Three‐dimensional spatial point computation in fringe projection profilometry",
        revista: "Optics and Lasers in Engineering",
        cuartil: "Q1",
        factorImpacto: "(2022) 4.600 (2023)",
        autores:
          "Rigoberto Juarez-Salazar, Gustavo A. Rodriguez-Reveles, Sofia Esquivel-Hernandez, Victor H. Diaz-Ramirez",
        enlace: "https://doi.org/10.1016/j.optlaseng.2023.107482",
      },
    ],
    2024: [
      {
        titulo:
          "Partial Potential Energy Shaping Control of Torque-Driven Robot Manipulators in Joint Space",
        revista: "International Journal of Control, Automation and Systems",
        cuartil: "Q2",
        factorImpacto: "(2023) 2.500 (2024)",
        autores:
          "Jesús Sandoval, Víctor Santibáñez, Luis Cervantes-Pérez, Javier Moreno-Valenzuela",
        enlace: "https://doi.org/10.1007/s12555-022-1196-zFPGA",
      },
      {
        titulo:
          "FPGA realization of an image encryption system using the DCSK-CDMA technique",
        revista: "Integration, the VLSI Journal",
        cuartil: "Q4",
        factorImpacto: "(2022) 1.900 (2024)",
        autores:
          "Miguel-Angel Estudillo-Valdez, Vincent-Ademola Adeyemi, Jose-Cruz Nuñez-Perez",
        enlace: "https://doi.org/10.1016/j.vlsi.2024.102157",
      },
      {
        titulo:
          "Observer-based fuzzy trajectory-tracking controller for wheeled mobile robots with kinematic disturbances",
        revista: "Engineering Applications of Artificial Intelligence",
        cuartil: "Q1",
        factorImpacto: "(2022) 8.000 (2024)",
        autores: "Roger Miranda-Colorado, Nohe R. Cazarez-Castro",
        enlace: "https://doi.org/10.1016/j.engappai.2024.108279",
      },
      {
        titulo:
          "On the Dynamics of Immune-Tumor Conjugates in a Four-Dimensional Tumor Model",
        revista: "Mathematics",
        cuartil: "Q1",
        factorImpacto: "(2022) 2.400 (2024)",
        autores: "Konstantin E. Starkov, Alexander P. Krishchenko",
        enlace: "https://doi.org/10.3390/math12060843",
      },
      {
        titulo:
          "Hybrid Quantum Genetic Algorithm with Fuzzy Adaptive Rotation Angle for Efficient Placement of Unmanned Aerial Vehicles in Natural Disaster Areas",
        revista: "Axioms",
        cuartil: "Q1",
        factorImpacto: "(2022) 2.000 (2024)",
        autores:
          "Enrique Ballinas, Oscar H. Montiel-Ross, Anabel Martínez-Vargas, Gabriela Rodríguez-Cortés",
        enlace: "https://doi.org/10.3390/axioms13010048",
      },
      {
        titulo:
          "A Spectral Gap-Based Topology Control Algorithm for Wireless Backhaul Networks",
        revista: "Future Internet",
        cuartil: "Q2",
        factorImpacto: "(2022) 3.400 (2024)",
        autores:
          "Sergio-Jesus Gonzalez-Ambriz, Rolando Menchaca-Méndez, Sergio Alejandro Pinacho-Castellanos, Mario Eduardo Rivero-Ángeles",
        enlace: "https://doi.org/10.3390/fi16020043",
      },
      {
        titulo: "IoT-based system for campus community security",
        revista: "Internet of Things",
        cuartil: "Q1",
        factorImpacto: "(2022) 5.900 (2024)",
        autores:
          "Berenice Flores-Salgado, Sergio-Jesus Gonzalez-Ambriz, Ciro-Andrés Martínez-García-Moreno, Jessica Beltrán",
        enlace: "https://doi.org/10.1016/j.iot.2024.101179",
      },
      {
        titulo:
          "Scaling technique for prescribed-time output feedback stabilization: Autonomous and non-autonomous paradigms and their comparative study",
        revista: "Journal of the Franklin Institute",
        cuartil: "Q1",
        factorImpacto: "(2022) 4.1 (2024)",
        autores: "Yury Orlov, Ramón I. Verdés Kairuz, Luis T. Aguilar-Bustos",
        enlace: "https://doi.org/10.1016/j.jfranklin.2024.01.043",
      },
      {
        titulo:
          "Output–Feedback Stabilization Control for a Class of Underactuated Systems via High–Order Sliding Modes Identification and Compensation",
        revista: "Journal of the Franklin Institute",
        cuartil: "Q2",
        factorImpacto: "(2023) 3.700 (2024)",
        autores:
          "Luis T. Aguilar, Alejandra Ferreira de Loza,Samy Kharuf Gutierrez",
        enlace: "https://doi.org/10.1016/j.jfranklin.2024.107186",
      },
      {
        titulo:
          "LSTM network in bilateral teleoperation of a skid-steering robot",
        revista: "Neurocomputing",
        cuartil: "Q2",
        factorImpacto: "(2023)5,5 (2024)",
        autores:
          "Emanuel Slawiñski, Francisco Rossomando, Fernando A. Chicaiza, Javier Moreno-Valenzuela, Vicente Mut",
        enlace: "https://doi.org/10.1016/j.neucom.2024.128248",
      },
      {
        titulo:
          "Lyapunov-based estimation and control of velocity and load in rotating machines via Luenberger globally-convergent observer",
        revista: "European Journal of Control",
        cuartil: "Q2",
        factorImpacto: "(2023)2,5 (2024)",
        autores:
          "Carlos Aguilar-Ibanez, José Ángel Acosta, Miguel S. Suarez-Castanon, Belem Saldivar, Eduardo Javier Moreno-Valenzuela, Isaac Gandarilla-Esparza, Manuel A. Jimenez-Lizarraga",
        enlace: "https://doi.org/10.1016/j.ejcon.2024.101092",
      },
      {
        titulo:
          "Continuous finite-time terminal sliding mode to solve the tracking problem in a class of mechanical systems",
        revista: "Measurement and Control.",
        cuartil: "Q1",
        factorImpacto: "(2023)7,5 (2024)",
        autores: "Rascón R, Moreno-Ahedo L, Calvillo-Téllez A.",
        enlace: "https://doi.org/10.1177/00202940231212871",
      },
      {
        titulo:
          "EEG-BASED MOTOR IMAGERY CLASSIFICATION WITH QUANTUM ALGORITHMS",
        revista: "Expert Systems With Applications",
        cuartil: "Q1",
        factorImpacto: "(2023)1,3 (2024)",
        autores: "Cynthia Olvera, Oscar Montiel Ross, Yoshio Rubio",
        enlace: "https://doi.org/10.1016/j.eswa.2024.123354",
      },
      {
        titulo:
          "Flat mirrors, virtual rear-view cameras, and camera-mirror calibration",
        revista: "Optik",
        cuartil: "Q2",
        factorImpacto: "(2022) 3,1 (2024)",
        autores: "Rigoberto Juarez-Salazar",
        enlace: "https://doi.org/10.1016/j.ijleo.2024.172067",
      },
      {
        titulo:
          "Comparison of Performance of Amazon Braket Using a Quantum Genetic Algorithm",
        revista: "Computación y Sistemas",
        cuartil: "Q4",
        factorImpacto: "(2022) 0,6 (2024)",
        autores:
          "Sandra S. Rosales , Oscar Montiel , Ulises Orozco-Rosas , Juan J. Tapia , Oscar Castillo",
        enlace: "https://doi.org/10.13053/CyS-28-3-5178",
      },
      {
        titulo:
          "Normal Attractor Intersection Based Multi-objective Optimization Using Particle Swarm Optimization",
        revista: "Computación y Sistemas",
        cuartil: "Q4",
        factorImpacto: "(2022) 0,6 (2024)",
        autores:
          "Josué Domínguez-Guerrero, Oscar Montiel-Ross, Víctor Carrillo, Edgar Martínez, Oscar Castillo",
        enlace: "https://doi.org/10.13053/CyS-28-3-5177",
      },
      {
        titulo:
          "FPGA Realization of a Fractional-Order Model of Universal Memory Elements",
        revista: "Fractal and Fractional",
        cuartil: "Q1",
        factorImpacto: "(2023) 3,6 (2024)",
        autores:
          "Opeyemi-Micheal Afolabi, Vincent-Ademola Adeyemi, Esteban Tlelo-Cuautle, José Cruz Núñez-Pére",
        enlace: "https://doi.org/10.3390/fractalfract8100605",
      },
      {
        titulo:
          "FPGA Realization of an Image Encryption System Using a 16-CPSK Modulation Technique",
        revista: "Electronics",
        cuartil: "Q3",
        factorImpacto: "(2023) 2,6 (2024)",
        autores:
          "José Cruz Núñez-Pérez, Miguel-Ángel Estudillo-Valdez, Yuma Sandoval-Ibarra, Vincent-Ademola Adeyemi",
        enlace: "https://doi.org/10.3390/electronics13224337",
      },
      {
        titulo:
          "The Potential of Automated Assessment of Cognitive Function Using Non-Neuroimaging Data: A Systematic Review",
        revista: "Journal of Clinical Medicine",
        cuartil: "Q2",
        factorImpacto: "(2023) 1,6 (2024)",
        autores:
          "Eyitomilayo Yemisi Babatope , Alejandro Álvaro Ramírez-Acosta , José Alberto Avila-Funes and Mireya García-Vázquez",
        enlace: "https://doi.org/10.3390/jcm13237068",
      },
      {
        titulo:
          "Global Regulation of Flexible Joint Robots With Input Saturation by Nonlinear I-PID-Type Control",
        revista: "IEEE Transactions on Control Systems Technology",
        cuartil: "Q2",
        factorImpacto: "(2023) 4,9 (2024)",
        autores: "Jerónimo Moyrón; Javier Moreno-Valenzuela; Jesús Sando",
        enlace: "https://doi.org/10.1109/TCST.2024.3391129",
      },
      {
        titulo:
          "Performance Analysis of Wireless Sensor Networks Using Damped Oscillation Functions for the Packet Transmission Probability",
        revista: "Computers",
        cuartil: "Q3",
        factorImpacto: "(2023) 2,6 (2024)",
        autores:
          "Izlian Y. Orea-Flores,Mario E. Rivero-Ángeles,Sergio Jesús González-Ambriz,Eleazar Aguirre Anaya y Sumera Saleem",
        enlace: "https://doi.org/10.3390/computers13110285",
      },
      {
        titulo:
          "Prescribed-Time Trajectory Tracking Control of Wheeled Mobile Robots Using Neural Networks and Robust Control Techniques",
        revista: "Computación y Sistemas",
        cuartil: "Q4",
        factorImpacto: "(2023) 3.2 (2024)",
        autores:
          "Jesús A. Rodríguez-Arellano, Víctor D. Cruz, Luis T. Aguilar, Roger Miranda Colorado",
        enlace: "https://doi.org/10.13053/CyS-28-2-5025",
      },
      {
        titulo:
          "A GES joint position trajectory tracking smooth controller of torque-driven robot manipulators affected by disturbances",
        revista: "Robust and Nonlinear Control",
        cuartil: "Q2",
        factorImpacto: "(2023) 3.2 (2024)",
        autores:
          "Jesús Sandoval, Luis Cervantes-Pérez, Víctor Santibáñez, Javier Moreno-Valenzuela, Rafael Kelly",
        enlace: "https://doi.org/10.1002/rnc.7015",
      },
      {
        titulo:
          "Limited Integrator Antiwindup-Based Control of Input-Constrained Manipulators",
        revista: "IEEE Transactions on Industrial Electronics",
        cuartil: "Q1",
        factorImpacto: "(2023) 7,5 (2024)",
        autores:
          "Javier Moreno-Valenzuela , Jerónimo Moyrón , Jorge Montoya-Chairez",
        enlace: "http://doi.org/10.1109/TIE.2023.3262858",
      },
      {
        titulo:
          "Static Anti-Windup for Global Regulation of Constrained Euler-Lagrange Systems",
        revista: "IEEE Transactions on Circuits and Systems II: Express Briefs",
        cuartil: "Q2",
        factorImpacto: "(2023) 4,0 (2024)",
        autores:
          "Javier Moreno-Valenzuela, Mizraim Martínez-López, Jesús Sandoval",
        enlace: "http://doi.org/10.1109/TCSII.2024.3373455",
      },
      {
        titulo:
          "Cartesian trajectory tracking in manipulator robots [Control para seguimiento de trayectorias cartesianas en robots manipuladores]",
        revista:
          "RIAI-Revista Iberoamericana de Automatica e Informatica Industrial",
        cuartil: "Q4",
        factorImpacto: "(2023)1,1 (2024)",
        autores:
          "Rascón, Raúl, Flores-Mendoza, Adrián, Moreno-Valenzuela, Javier, Aguilar-Avelar, Carlos",
        enlace: "http://doi.org/10.4995/riai.2024.20399",
      },
      {
        titulo:
          "Evaluation of Two-Dimensional DBH Estimation Algorithms Using TLS",
        revista: "Forests",
        cuartil: "Q1",
        factorImpacto: "(2023) 2.4 (2024)",
        autores:
          "Jorge Luis Compeán-Aguirre , Pablito Marcelo López-Serrano , José Luis Silván-Cárdenas , Ciro Andrés Martínez-García-Moreno, Daniel José Vega-Nieva , José Javier Corral-Rivas ,Marín Pompa-García",
        enlace: "https://doi.org/10.3390/f15111964",
      },
    ],
  },
];
