# Documentación Técnica - CITEDI Investigación

## Arquitectura del Proyecto

Este proyecto está construido con Next.js utilizando el sistema de páginas (Pages Router) y TypeScript para el tipado estático. La aplicación sigue una arquitectura basada en componentes con datos estáticos definidos en archivos TypeScript.

## Estructura de Archivos

### Componentes (`/src/components`)

Los componentes reutilizables están organizados en esta carpeta:

- `/main` - Componentes utilizados en la página principal
  - `About.js` - Sección "Acerca de" en la página principal
  - `Areas.js` - Sección de áreas de investigación
  - `Card.js/Card.tsx` - Componente de tarjeta reutilizable
  - `Direction.js` - Información de dirección/contacto
  - `Hero.js` - Sección principal (hero) de la página de inicio

### Datos y Tipos (`/src/lib`)

- `data.ts` - Datos generales utilizados en toda la aplicación
- `investigadores.ts` - Información completa de todos los investigadores
- `laboratorios.ts` - Información completa de todos los laboratorios
- `types.ts` - Definiciones de tipos TypeScript para todos los modelos de datos

### Páginas (`/src/pages`)

- `_app.js` - Componente raíz de la aplicación Next.js
- `_document.js` - Personalización del documento HTML
- `index.js` - Página principal
- `/conocenos/index.js` - Página de información sobre CITEDI
- `/investigadores/index.js` - Lista de investigadores
- `/investigadores/[id].js` - Página de detalle de un investigador específico
- `/laboratorios/index.js` - Lista de laboratorios
- `/laboratorios/[id].js` - Página de detalle de un laboratorio específico
- `/lgac/index.js` - Líneas de Generación y Aplicación del Conocimiento

## Modelos de Datos

### Investigador

```typescript
interface Investigador {
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
```

### Laboratorio

```typescript
interface Laboratorio {
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
```

## Rutas y Navegación

El proyecto utiliza el sistema de enrutamiento basado en archivos de Next.js:

- `/` - Página principal
- `/conocenos` - Información sobre CITEDI
- `/investigadores` - Lista de investigadores
- `/investigadores/[id]` - Detalle de un investigador específico (ruta dinámica)
- `/laboratorios` - Lista de laboratorios
- `/laboratorios/[id]` - Detalle de un laboratorio específico (ruta dinámica)
- `/lgac` - Líneas de Generación y Aplicación del Conocimiento

## Patrones de Renderizado

### Páginas de Detalle

Las páginas de detalle (`[id].js`) utilizan el parámetro de ruta para buscar la información específica en los archivos de datos:

```javascript
// Ejemplo de /investigadores/[id].js
const investigador = investigadores.find((inv) => inv.id === Number(id));
```

### Renderizado Condicional

Se utiliza renderizado condicional para mostrar secciones opcionales:

```javascript
{
  !!investigador.proyectos && (
    <section>
      <h2>Proyectos de Investigación</h2>
      {/* Contenido de proyectos */}
    </section>
  );
}
```

## Estilizado

El proyecto utiliza Tailwind CSS para los estilos. Las clases de Tailwind se aplican directamente en los elementos JSX.

## Guía de Mantenimiento

### Modificar Datos de Investigadores

Para actualizar la información de un investigador existente:

1. Abra el archivo `src/lib/investigadores.ts`
2. Localice el objeto del investigador por su `id`
3. Actualice los campos necesarios siguiendo la estructura de tipos definida

### Modificar Datos de Laboratorios

Para actualizar la información de un laboratorio existente:

1. Abra el archivo `src/lib/laboratorios.ts`
2. Localice el objeto del laboratorio por su `id`
3. Actualice los campos necesarios siguiendo la estructura de tipos definida

### Agregar Nuevas Páginas

Para agregar una nueva página:

1. Cree un nuevo archivo `.js` en la carpeta `/src/pages` o en una subcarpeta apropiada
2. Implemente el componente React para la página
3. La ruta se generará automáticamente basada en la estructura de archivos

## Optimización de Imágenes

El proyecto utiliza el componente `Image` de Next.js para optimizar automáticamente las imágenes:

```javascript
import Image from "next/image";

// Uso
<Image src="/ruta/a/imagen.jpg" width={300} height={200} alt="Descripción" />;
```

## Consideraciones para Despliegue

1. Construya la aplicación para producción con `npm run build`
2. Inicie el servidor de producción con `npm run start`
3. Para despliegue en plataformas como Vercel, simplemente conecte el repositorio y la plataforma manejará el proceso de construcción y despliegue

## Dependencias Principales

- **next**: Framework React para producción
- **react/react-dom**: Biblioteca UI
- **tailwindcss**: Framework CSS utilitario
- **typescript**: Lenguaje de tipado estático
- **dompurify**: Sanitización de HTML

## Mejores Prácticas

1. **Tipado**: Mantenga todas las definiciones de tipos en `types.ts` y asegúrese de que todos los datos se adhieran a estas definiciones
2. **Componentes**: Extraiga lógica reutilizable en componentes separados
3. **Datos**: Mantenga los datos organizados en archivos separados por dominio (investigadores, laboratorios, etc.)
4. **Estilos**: Utilice clases de Tailwind para estilos en lugar de CSS personalizado cuando sea posible

## Generación de Archivos Estáticos en Next.js

### Pasos para Generar Archivos Estáticos

1. **Ejecutar el comando de construcción**:

   - Abre una terminal en la raíz del proyecto y ejecuta el siguiente comando:
     ```bash
     pnpm build
     ```
   - Este comando generará los archivos estáticos en la carpeta `.next`.

2. **Archivos generados**:

   - Los archivos estáticos generados estarán en la carpeta `.next/static`. Esta carpeta incluye:
     - Archivos JavaScript y CSS optimizados.
     - Recursos necesarios para la aplicación.

3. **Cómo usar los archivos estáticos**:

   - Los archivos en `.next/static` son utilizados automáticamente por Next.js cuando sirves la aplicación en producción.
   - Si necesitas servirlos manualmente, asegúrate de configurar tu servidor para servir esta carpeta.

4. **Iniciar el servidor de producción**:
   - Después de generar los archivos estáticos, puedes iniciar el servidor de producción con:
     ```bash
     pnpm start
     ```

## Generación de la Carpeta `out`

Para exportar la aplicación como un sitio estático y generar la carpeta `out`, sigue estos pasos:

1. **Configura el archivo `next.config.mjs`**:
   - Asegúrate de que el archivo `next.config.mjs` tenga configurado `exportTrailingSlash` y cualquier otra configuración necesaria para la exportación estática.

2. **Ejecuta el comando de exportación**:
   - Abre una terminal en la raíz del proyecto y ejecuta el siguiente comando:
     ```bash
     pnpm next export
     ```
   - Este comando generará una carpeta llamada `out/` que contendrá los archivos HTML, CSS, JavaScript y otros recursos estáticos.

3. **Verifica los archivos generados**:
   - La carpeta `out/` incluirá:
     - Archivos HTML para cada página de tu aplicación.
     - Archivos estáticos en subcarpetas como `_next/` y otras.

4. **Prueba los archivos localmente**:
   - Para probar los archivos generados, puedes usar un servidor local. Por ejemplo:
     ```bash
     python3 -m http.server --directory out
     ```
   - Luego, abre `http://localhost:8000` en tu navegador.

5. **Ajusta las rutas si es necesario**:
   - Si necesitas ajustar las rutas para que funcionen correctamente al abrir los archivos localmente, ejecuta el script `fix_routes.py` como se describe en la sección anterior.

## Ajuste de Rutas en Archivos Exportados

Si necesitas ajustar las rutas de los archivos generados por Next.js para que funcionen correctamente al abrirlos localmente, puedes usar el script `fix_routes.py`.

### Pasos para Ejecutar el Script

1. **Asegúrate de tener Python instalado**:
   - Verifica que Python esté instalado ejecutando:
     ```bash
     python3 --version
     ```

2. **Ejecuta el script**:
   - Desde la raíz del proyecto, ejecuta el siguiente comando:
     ```bash
     python3 fix_routes.py
     ```

3. **Verifica los cambios**:
   - El script ajustará automáticamente las rutas en los archivos HTML dentro de la carpeta `out/`.
   - Abre los archivos HTML en un navegador para confirmar que los estilos y recursos se cargan correctamente.

### Notas
- Este script ajusta rutas de recursos como CSS, JavaScript e imágenes para que sean relativas.
- Asegúrate de ejecutar este script cada vez que exportes la aplicación con `pnpm next export`.
