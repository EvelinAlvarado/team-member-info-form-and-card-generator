import "./ListaOpciones.css";

const ListaOpciones = (props) => {
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

  const handleOnChangeTeam = (e) => {
    props.setValue(e.target.value);
  };
  return (
    <div className="lista-opciones">
      <label>Teams</label>
      <select value={props.value} onChange={handleOnChangeTeam}>
        <option value="" disabled defaultValue="" hidden>
          Select Team
        </option>
        {/* When using map() with React on an array, it must have a unique identifier */}
        {teams.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
