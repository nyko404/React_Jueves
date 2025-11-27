export default function Educacion() {
  const educacion = [
    {
      id: 1,
      titulo: "Ingeniería en Sistemas",
      universidad: "Universidad Nacional",
      periodo: "2018-2022",
    },
  ];

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.universidad} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
