import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import { datosPersonales, perfilProfesional, experiencias, educacion } from "./data.js";

export default function App() {
  return (
    <div>
      {/* Sección de CV */}
      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />
      <Perfil resumen={perfilProfesional} />
      <Experiencia experiencias={experiencias} />
      <Educacion educacion={educacion} />
      <StackTecnologias />
    </div>
  );
}