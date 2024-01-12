import { Collaborator } from "../Collaborator/Collaborator.jsx";
import "./Team.css";

export function Team(props) {
  // Destructuring
  const { primaryColor, secondaryColor, title } = props.dataTeam;
  const { collaboratorList } = props;

  const secondaryColorStyle = { backgroundColor: secondaryColor };
  const primaryColorStyle = { borderColor: primaryColor };

  // Render the team section only if there are collaborators in the list
  return (
    <>
      {collaboratorList.length > 0 && (
        <section className="team" style={secondaryColorStyle}>
          <h3 style={primaryColorStyle}>{title}</h3>
          <div className="collaborators">
            {collaboratorList.map((collaboratorItem) => (
              <Collaborator
                collaboratorInfo={collaboratorItem}
                primaryColor={primaryColor}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
// ! ToDo: key for collaboratorList: collaboratorList.map((collaboratorItem, index) => (<Collaborator collaboratorInfo={collaboratorItem} index={"id?"} />
