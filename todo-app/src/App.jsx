import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Registro from './pages/Registro';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
