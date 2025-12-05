import React, { useState } from 'react';

// REQUISITO 2: Componente interactivo FormularioTecnologia
export default function FormularioTecnologia({ agregarTecnologia }) {
    // REQUISITO 2: Usa useState para inputs
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('frontend');

    // REQUISITO 2: Evento onSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim()) return;

        // REQUISITO 3: Usa la función agregarTecnologia pasada como prop
        agregarTecnologia({ nombre, tipo });
        setNombre('');
        setTipo('frontend');
    };

    return (
        <section className="formulario-section" style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Agregar Nueva Tecnología</h3>
            {/* REQUISITO 2: Formulario controlado */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <input
                    type="text"
                    value={nombre}
                    // REQUISITO 2: Evento onChange
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre de la tecnología"
                    style={{ padding: '8px', flex: '1' }}
                    required
                />
                <select
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    style={{ padding: '8px' }}
                >
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="base de datos">Base de Datos</option>
                    <option value="herramienta">Herramienta</option>
                </select>
                <button
                    type="submit"
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Agregar
                </button>
            </form>
        </section>
    );
}
