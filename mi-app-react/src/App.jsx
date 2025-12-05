import { useState } from "react";
import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import Habilidades from "./components/Habilidades.jsx";
import ToggleHabilidades from "./components/ToggleHabilidades.jsx";
import FormularioTecnologia from "./components/FormularioTecnologia.jsx";
import { datosPersonales, perfilProfesional, experiencias, educacion, listaTecnologias, listaHabilidades } from "./cvData.js";

// REQUISITO 1: Reutilizar estructura del proyecto (Cabecera, Perfil, etc.)
// REQUISITO 3: Modificar App.jsx para manejar el estado y la lógica
export default function App() {
  // REQUISITO 3: Manejar el estado de la lista de tecnologías (useState)
  const [tecnologias, setTecnologias] = useState(listaTecnologias);
  // REQUISITO 3: Manejar la lógica de visibilidad para Habilidades
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);

  // REQUISITO 3: Función agregarTecnologia() como prop para FormularioTecnologia
  const agregarTecnologia = (nuevaTecnologia) => {
    const tecnologiaConId = {
      ...nuevaTecnologia,
      id: tecnologias.length + 1
    };
    setTecnologias([...tecnologias, tecnologiaConId]);
  };

  // REQUISITO 2 & 3: Lógica para mostrar/ocultar habilidades (usada por ToggleHabilidades)
  const toggleHabilidades = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };

  return (
    <div className="app-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Sección de CV - REQUISITO 1 */}
      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />
      <Perfil resumen={perfilProfesional} />
      <Experiencia experiencias={experiencias} />
      <Educacion educacion={educacion} />

      {/* REQUISITO 1: StackTecnologias (ahora dinámico) */}
      <StackTecnologias tecnologias={tecnologias} />

      {/* REQUISITO 2: Componente FormularioTecnologia */}
      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

      {/* REQUISITO 2: Componente ToggleHabilidades */}
      <ToggleHabilidades onToggle={toggleHabilidades} mostrar={mostrarHabilidades} />

      {/* REQUISITO 2: Renderizado condicional de Habilidades */}
      {mostrarHabilidades && <Habilidades habilidades={listaHabilidades} />}
    </div>
  );
}