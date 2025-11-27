import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";

function App() {
  return (
    <div>
      <CabeceraCV />
      <Perfil />
      <Educacion />
      <Experiencia />
      <StackTecnologias />
    </div>
  );
}

export default App;

// import CabeceraCV from "./components/CabeceraCV.jsx";
// import Perfil from "./components/Perfil.jsx";
// import Educacion from "./components/Educacion.jsx";
// import Experiencia from "./components/Experiencia.jsx";

// function App() {
//   return (
//     <div>
//       <CabeceraCV />
//       <Perfil />
//       <Educacion />
//       <Experiencia />
//     </div>
//   );
// }

// export default App;
// function App() {
//   return (
//     <>
//       <div></div>
//     </>
//   );
// }

// export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
