import React from 'react';

// REQUISITO 2: Componente interactivo ToggleHabilidades
export default function ToggleHabilidades({ onToggle, mostrar }) {
    return (
        <div className="toggle-container" style={{ margin: '20px 0', textAlign: 'center' }}>
            {/* REQUISITO 2: Muestra u oculta el componente Habilidades con un botón */}
            <button
                onClick={onToggle}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                }}
            >
                {mostrar ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
            </button>
        </div>
    );
}
