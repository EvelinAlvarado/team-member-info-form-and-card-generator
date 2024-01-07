import "./ListaOpciones.css";

const ListaOpciones = () => {
  // Map method
  const teams = [
    "Programming",
    "Front End",
    "Data Science",
    "Devops",
    "UX and Design",
    "Mobile",
    "Innovation and Management",
  ];
  return (
    <div className="lista-opciones">
      <label>Teams</label>
      <select>
        {/* When using map() with React on an array, it must have a unique identifier */}
        {teams.map((team, index) => (
          <option key={index}>{team}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
