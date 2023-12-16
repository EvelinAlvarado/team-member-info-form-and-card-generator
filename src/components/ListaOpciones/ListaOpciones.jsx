import "./ListaOpciones.css";

const ListaOpciones = () => {
  //Método map
  const equipos = [
    "Progamación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];
  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select>
        {/* Cuando se utiliza map() con react en un array, debe tener un identificador único */}
        {equipos.map((equipo, index) => (
          <option key={index}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
