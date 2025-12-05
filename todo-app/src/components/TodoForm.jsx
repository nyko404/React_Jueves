import { useState } from 'react';

/**
 * Componente TodoForm
 * Formulario simple para crear nuevas tareas.
 * @param {Function} onAdd - Función recibida del padre para comunicar la nueva tarea
 */
function TodoForm({ onAdd }) {
    // Estado local para el valor del input, formulario controlado
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Evitamos recarga del navegador

        // Validación simple: no permitir vacíos
        if (!title.trim()) {
            setError('El título es requerido');
            return;
        }

        setError('');
        console.log('Nuevo Todo:', title);

        // Llamamos a la función del padre pasándole el título
        onAdd(title);

        // Limpiamos el input después de enviar
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                    type="text"
                    value={title}
                    // Actualizamos el estado cada vez que el usuario escribe
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nueva tarea..."
                    style={{ padding: '0.5rem', flex: 1 }}
                />
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>Agregar</button>
            </div>
            {/* Mostramos mensaje de error solo si existe */}
            {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}
        </form>
    );
}

export default TodoForm;
