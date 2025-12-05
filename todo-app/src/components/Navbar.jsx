import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '1rem' }}>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/todos">Tareas</Link></li>
                <li><Link to="/registro">Registro</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
