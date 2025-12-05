/**
 * Componente TodoItem
 * Representa una fila individual de tarea en la lista.
 * Es un "Componente Presentacional" ya que principalmente muestra datos.
 * 
 * @param {Object} todo - Objeto con los datos de la tarea
 * @param {Function} onToggle - Función para cambiar el estado completado
 * @param {Function} onDelete - Función para eliminar la tarea
 */
function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li style={{
            padding: '1rem',
            borderBottom: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                {/* Título de la tarea: Al hacer click llama a onToggle con el ID */}
                <span
                    onClick={() => onToggle(todo.id)}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        cursor: 'pointer',
                        flex: 1
                    }}
                >
                    {todo.title}
                </span>

                {/* Etiqueta de estado */}
                <span style={{ fontSize: '0.8rem', color: todo.completed ? 'green' : 'gray' }}>
                    {todo.completed ? 'Completado' : 'Pendiente'}
                </span>
            </div>

            {/* Botón Eliminar: Al hacer click llama a onDelete con el ID */}
            <button
                onClick={() => onDelete(todo.id)}
                style={{ padding: '0.25rem 0.5rem', background: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '1rem' }}
            >
                Eliminar
            </button>
        </li>
    );
}

export default TodoItem;
