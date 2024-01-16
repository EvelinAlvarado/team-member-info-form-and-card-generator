import "./Collaborator.css";
import { AiFillCloseCircle } from "react-icons/ai";

export function Collaborator(props) {
  // Destructuring
  const { name, position, photoLink, team } = props.collaboratorInfo;
  const { primaryColor, deleteCollaborator } = props;

  return (
    <div className="collaborator">
      <AiFillCloseCircle className="delete-icon" onClick={deleteCollaborator} />
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
