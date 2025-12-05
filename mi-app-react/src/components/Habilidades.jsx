import React from 'react';

export default function Habilidades({ habilidades }) {
    return (
        <section className="habilidades-section">
            <h3>Habilidades Blandas</h3>
            <ul className="habilidades-list">
                {habilidades.map((habilidad) => (
                    <li key={habilidad.id}>
                        <strong>{habilidad.nombre}</strong> - {habilidad.nivel}
                    </li>
                ))}
            </ul>
        </section>
    );
}
