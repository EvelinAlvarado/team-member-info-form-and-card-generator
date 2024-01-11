import "./Collaborator.css";

export function Collaborator(props) {
  // Destructuring
  const { name, position, photoLink, team } = props.collaboratorInfo;

  return (
    <div className="collaborator">
      <div className="collaborator-header">
        <img src={photoLink} alt={name} />
      </div>
      <div className="collaborator-info">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
}
