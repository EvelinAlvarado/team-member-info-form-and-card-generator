import { Collaborator } from "../Collaborator/Collaborator.jsx";
import "./Team.css";

export function Team(props) {
  // Destructuring
  const { primaryColor, secondaryColor, title } = props.dataTeam;

  const secondaryColorStyle = { backgroundColor: secondaryColor };
  const primaryColorStyle = { borderColor: primaryColor };

  return (
    <section className="team" style={secondaryColorStyle}>
      <h3 style={primaryColorStyle}>{title}</h3>
      <div className="collaborators">
        <Collaborator />
        <Collaborator />
      </div>
    </section>
  );
}
