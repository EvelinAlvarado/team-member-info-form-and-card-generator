import "./Collaborator.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export function Collaborator(props) {
  // Destructuring
  const { name, position, photoLink, team, id, favorite } =
    props.collaboratorInfo;
  const { primaryColor, deleteCollaborator, toggleFavoriteStatus } = props;

  return (
    <div className="collaborator">
      <AiFillCloseCircle
        className="delete-icon"
        onClick={() => deleteCollaborator(id)}
      />
      <div
        className="collaborator-header"
        style={{ backgroundColor: primaryColor }}
      >
        <img src={photoLink} alt={name} />
      </div>
      <div className="collaborator-info">
        <h4>{name}</h4>
        <h5>{position}</h5>
        {favorite === true ? (
          <AiFillHeart color="red" onClick={() => toggleFavoriteStatus(id)} />
        ) : (
          <AiOutlineHeart onClick={() => toggleFavoriteStatus(id)} />
        )}
      </div>
    </div>
  );
}
