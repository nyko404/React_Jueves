# Mi App React - CV Dinámico

Este proyecto es una aplicación de CV interactivo construida con React y Vite.

## Características

- **Visualización de CV**: Muestra información personal, perfil, experiencia y educación.
- **Stack de Tecnologías Dinámico**: Lista de tecnologías con renderizado condicional de colores según el tipo.
- **Gestión de Estado**: Uso de `useState` para manejar la lista de tecnologías y la visibilidad de secciones.

## Eventos y Estados

### Estados Principales (`App.jsx`)
- `tecnologias`: Array de objetos que almacena las tecnologías mostradas.
- `mostrarHabilidades`: Booleano que controla la visibilidad de la sección de habilidades blandas.

### Eventos
- **Toggle Habilidades**: Botón que alterna el estado `mostrarHabilidades` para mostrar u ocultar la lista de habilidades.
- **Agregar Tecnología**: Formulario que captura el nombre y tipo de tecnología, y actualiza el estado `tecnologias` mediante la función `agregarTecnologia`.

## Ejecución

Para correr el proyecto localmente:

```bash
npm install
npm run dev
```
