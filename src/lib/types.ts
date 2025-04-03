// Definiciones de tipos para los datos de la aplicación

// Tipos para cards
export interface CardItem {
  content: string;
  numbers: number;
  img?: string;
}

export interface Card {
  title: string;
  items: CardItem[];
  color: string;
}

// Tipos para areas
export interface Area {
  title: string;
  img: string;
  icon: string;
  content: string[];
  labs: number[];
  descripcion: string;
  investigadores: number[];
}

// Tipos para about
export interface AboutItem {
  title: string;
  icon: string;
  href: string;
}

// Tipos para investigadores
export interface OrcidInfo {
  id: string;
  link: string;
}

export interface ScopusAuthorInfo {
  id: string;
  link: string;
}

export interface ResearcherIDInfo {
  id: string;
  link: string;
}

export interface InvestigadorInfo {
  content: string[][];
  orcid?: OrcidInfo;
  scopusAuthor?: ScopusAuthorInfo;
  researcherID?: ResearcherIDInfo;
  researchGate?: string;
  scholarGoogle?: string;
}

export interface Patente {
  nombre: string;
  numero: string;
  no: number;
  link: string;
}

export interface ProyectoItem {
  nombre: string;
  periodo: string;
  fuente: string;
  descripcion?: string;
}

export interface ProyectosInfo {
  content: string;
  lista: ProyectoItem[];
}

export interface PublicacionItem {
  titulo: string;
  autores: string;
  fecha: string;
  link: string;
}

export interface PublicacionesInfo {
  content: string;
  lista: PublicacionItem[];
}

export interface ProgramaTesis {
  nombre: string;
  trabajos: string[];
}

export interface TrabajosTesisInfo {
  content: string;
  programa: ProgramaTesis[];
}

export interface Investigador {
  id: number;
  name: string;
  img?: string;
  tiempo: string;
  lab?: number;
  email: string;
  emailIPN: string;
  level: string;
  info: InvestigadorInfo;
  proyectos?: ProyectosInfo;
  publicaciones?: PublicacionesInfo;
  propiedadIntelectual?: string;
  trabajosTesis?: TrabajosTesisInfo;
  patentes?: Patente[];
  investigador?: string;
  participacionInvestigacion?: string[];
}

// Tipos para laboratorios
export interface PersonalAcademico {
  id: number;
  cargo: string;
  estudio: string;
  sumary?: string;
}

export interface PersonalInfo {
  descripcion: string;
  academico: PersonalAcademico[];
  doctorado?: string[];
  maestria?: string[];
  investigadoresExternos?: InvestigadorExterno[];
  estudiantesColaboradores?: EstudianteColaborador[];
}

export interface ProyectosLabInfo {
  descripcion: string;
  lista: ProyectoItem[];
}

export interface PublicacionesLabInfo {
  descripcion: string;
  lista: PublicacionItem[];
}

export interface Laboratorio {
  id: number;
  name: string;
  responsable: number;
  img: string;
  descripcion: string[];
  equipo?: string[];
  personal: PersonalInfo;
  proyectos: ProyectosLabInfo;
  publicaciones: PublicacionesLabInfo;
}

export interface InvestigadorExterno {
  nombre: string;
  institucion: string;
}

export interface EstudianteColaborador {
  nombre: string;
  estudios: string;
}