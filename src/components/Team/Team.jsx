import { Collaborator } from "../Collaborator/Collaborator.jsx";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

export function Team(props) {
  // Destructuring
  const { primaryColor, secondaryColor, title, id } = props.dataTeam;
  const { collaboratorList, deleteCollaborator, updateColor } = props;

  // Set the background color style with an adjusted opacity based on the primary color using hexToRgba.
  const secondaryColorStyle = {
    backgroundColor: hexToRgba(primaryColor, 0.35),
  };
  const primaryColorStyle = { borderColor: primaryColor };

  // Render the team section only if there are collaborators in the list
  return (
    <>
      {collaboratorList.length > 0 && (
        <section className="team" style={secondaryColorStyle}>
          <input
            type="color"
            className="input-color"
            value={primaryColor}
            onChange={(e) => {
              updateColor(e.target.value, id);
            }}
          />
          <h3 style={primaryColorStyle}>{title}</h3>
          <div className="collaborators">
            {collaboratorList.map((collaboratorItem) => (
              <Collaborator
                collaboratorInfo={collaboratorItem}
                primaryColor={primaryColor}
                key={collaboratorItem.id}
                deleteCollaborator={deleteCollaborator}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
