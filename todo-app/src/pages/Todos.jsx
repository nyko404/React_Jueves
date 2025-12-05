import { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

/**
 * Componente Todos (Página Principal de Tareas)
 * Maneja la lista de tareas, la carga de datos desde la API y el estado global de la vista.
 */
function Todos() {
    // Hook useState: Inicializamos el estado 'todos' como un arreglo vacío.
    const [todos, setTodos] = useState([]);
    // Estado para controlar si estamos cargando datos (para mostrar spinner/texto)
    const [loading, setLoading] = useState(true);
    // Estado para manejar posibles errores de conexión
    const [error, setError] = useState(null);

    // Hook useEffect: Se ejecuta una vez cuando el componente se monta (array de dependencias vacío [])
    useEffect(() => {
        setLoading(true);
        setError(null);

        // API Fetch: Solicitamos los datos a un servicio externo (JSONPlaceholder)
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => {
                // Verificamos si la respuesta de la red fue exitosa
                if (!response.ok) {
                    throw new Error('Error al cargar datos');
                }
                return response.json(); // Transformamos la respuesta a JSON
            })
            .then(data => {
                console.log('Todos fetched:', data);
                setTodos(data); // Actualizamos el estado con los datos recibidos
            })
            .catch(err => {
                console.error('Error fetching todos:', err);
                setError(err.message); // Guardamos el mensaje de error para mostrarlo
            })
            .finally(() => {
                // Finally se ejecuta siempre, haya error o éxito. Terminamos el estado de carga.
                setLoading(false);
            });
    }, []);

    // Función para agregar una nueva tarea
    // Recibe el título desde el componente hijo TodoForm
    const handleAddTodo = (title) => {
        const newTodo = {
            userId: 1,
            id: Date.now(), // Usamos la fecha como ID temporal único
            title,
            completed: false
        };
        // Actualizamos el estado agregando el nuevo todo al principio del arreglo
        setTodos([newTodo, ...todos]);
    };

    // Función para alternar el estado completado/pendiente
    const handleToggleComplete = (id) => {
        // Usamos .map para crear un NUEVO arreglo con el item modificado
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Función para eliminar una tarea
    const handleDelete = (id) => {
        // Usamos .filter para remover el item cuyo ID coincida
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Renderizado condicional: Si está cargando, mostramos mensaje
    if (loading) return <div>Cargando tareas...</div>;

    // Renderizado condicional: Si hubo error, mostramos mensaje de error
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div>
            <h1>Lista de Tareas</h1>
            {/* Pasamos la función handleAddTodo como prop 'onAdd' al formulario */}
            <TodoForm onAdd={handleAddTodo} />

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map(todo => (
                    // Usamos el componente TodoItem para renderizar cada tarea individualmente
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={handleToggleComplete}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Todos;
