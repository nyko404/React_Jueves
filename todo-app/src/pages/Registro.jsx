import { useState } from 'react';

/**
 * Componente Registro
 * Muestra un formulario para que los usuarios nuevos se registren.
 * Demuestra el manejo de "Formularios Controlados" donde el estado de React
 * controla los valores de los inputs.
 */
function Registro() {
    // Estado para guardar los datos del formulario (Objeto único para agruparlos)
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: ''
    });

    // Estado para capturar errores de validación
    const [errors, setErrors] = useState({});

    // Función para manejar cambios en los inputs
    // Se ejecuta cada vez que el usuario escribe en un campo.
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Actualizamos solo el campo que cambió, manteniendo los demás iguales spread pattern (...)
        setFormData({
            ...formData,
            [name]: value
        });
        // Limpiamos el error de ese campo si existía
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    // Función para validar los datos antes de enviar
    const validate = () => {
        const newErrors = {};

        // Validación de Nombre
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido.';
        }

        // Validación de Email (Formato simple)
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El formato del correo no es válido.';
        }

        // Validación de Contraseña
        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida.';
        } else if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
        }

        return newErrors;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene la recarga de página por defecto

        const validationErrors = validate();

        // Si hay errores (el objeto tiene llaves), no enviamos y mostramos errores
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Si no hay errores, procedemos con el "Registro"
            console.log('Datos de registro válidos:', formData);
            alert('¡Registro exitoso! Revisa la consola para ver los datos.');

            // Reiniciamos el formulario
            setFormData({ nombre: '', email: '', password: '' });
            setErrors({});
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h1>Registro de Usuario</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                {/* Campo Nombre */}
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <label htmlFor="nombre">Nombre Completo:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        style={{ padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                    {errors.nombre && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.nombre}</span>}
                </div>

                {/* Campo Email */}
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                    {errors.email && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email}</span>}
                </div>

                {/* Campo Contraseña */}
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{ padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                    {errors.password && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.password}</span>}
                </div>

                <button type="submit" style={{ padding: '0.75rem', fontSize: '1rem', marginTop: '1rem' }}>
                    Registrarse
                </button>
            </form>
        </div>
    );
}

export default Registro;
