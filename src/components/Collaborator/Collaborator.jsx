import "./Collaborator.css";

export function Collaborator(props) {
  // Destructuring
  const { name, position, photoLink, team } = props.collaboratorInfo;
  const { primaryColor } = props;

  return (
    <div className="collaborator">
      <div
        className="collaborator-header"
        style={{ backgroundColor: primaryColor }}
      >
        <img src={photoLink} alt={name} />
      </div>
      <div className="collaborator-info">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
}
