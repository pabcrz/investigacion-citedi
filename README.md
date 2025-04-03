# CITEDI Investigación - Documentación

## Descripción del Proyecto

Este proyecto es un sitio web para el Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI) del Instituto Politécnico Nacional (IPN). El sitio web proporciona información sobre los investigadores, laboratorios, líneas de investigación y áreas de conocimiento del centro.

## Tecnologías Utilizadas

- **Frontend**: Next.js 15.1.4, React 19
- **Estilos**: Tailwind CSS
- **Tipado**: TypeScript

## Estructura del Proyecto

```
/src
  /components      # Componentes reutilizables
    /main          # Componentes principales de la página de inicio
  /lib             # Datos y tipos
    data.ts        # Datos generales
    investigadores.ts # Información de investigadores
    laboratorios.ts  # Información de laboratorios
    types.ts       # Definiciones de tipos TypeScript
  /pages           # Páginas de la aplicación
    /conocenos     # Página "Conócenos"
    /investigadores # Páginas de investigadores
    /laboratorios  # Páginas de laboratorios
    /lgac          # Líneas de Generación y Aplicación del Conocimiento
  /styles          # Estilos globales
/public            # Archivos estáticos
  /investigadores  # Imágenes de investigadores
  /main            # Imágenes principales
```

## Modelos de Datos

El proyecto utiliza TypeScript para definir la estructura de los datos. Los principales modelos son:

### Investigador

Representa a un investigador del CITEDI con su información académica, proyectos, publicaciones y trabajos de tesis.

### Laboratorio

Representa un laboratorio de investigación con su descripción, personal, proyectos y publicaciones.

### Otros Modelos

- **ProyectoItem**: Información sobre un proyecto de investigación
- **PublicacionItem**: Información sobre una publicación académica
- **Patente**: Información sobre una patente registrada

## Instalación y Ejecución

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecutar en modo desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Construcción para Producción

```bash
npm run build
npm run start
```

## Estructura de Páginas

- **/** - Página principal
- **/conocenos** - Información sobre CITEDI
- **/investigadores** - Lista de investigadores
- **/investigadores/[id]** - Detalle de un investigador específico
- **/laboratorios** - Lista de laboratorios
- **/laboratorios/[id]** - Detalle de un laboratorio específico
- **/lgac** - Líneas de Generación y Aplicación del Conocimiento

## Mantenimiento

### Agregar un Nuevo Investigador

Para agregar un nuevo investigador, edite el archivo `src/lib/investigadores.ts` y añada un nuevo objeto siguiendo la estructura de tipo `Investigador` definida en `src/lib/types.ts`.

### Agregar un Nuevo Laboratorio

Para agregar un nuevo laboratorio, edite el archivo `src/lib/laboratorios.ts` y añada un nuevo objeto siguiendo la estructura de tipo `Laboratorio` definida en `src/lib/types.ts`.

## Contribución

Para contribuir al proyecto:

1. Cree una rama para su característica (`git checkout -b feature/nueva-caracteristica`)
2. Realice sus cambios
3. Envíe un Pull Request

## Licencia

Este proyecto es propiedad del Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI) del Instituto Politécnico Nacional (IPN).
