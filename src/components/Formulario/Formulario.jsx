import { CampoTexto } from "../CampoTexto/CampoTexto";
import "./Formulario.css";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import { Boton } from "../Boton/Boton";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Formulario({ registerCollaborator, teams, createNewTeam }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [team, setTeam] = useState("");
  const [titleTeam, setTitleTeam] = useState("");
  const [colorTeam, setColorTeam] = useState("");

  const handleSubmissionNewCollaborator = (e) => {
    // Prevent the default form behavior
    e.preventDefault();
    // console.log("Handling the event:", e);

    // Construct collaborator data from form fields
    let collaboratorData = {
      name: name,
      position: position,
      photoLink: photoLink,
      team: team,
      id: uuidv4(),
    };
    // Register the new collaborator using the provided function from props
    registerCollaborator(collaboratorData);
  };

  const handleSubmissionNewTeam = (e) => {
    // Prevent the default form behavior
    e.preventDefault();
    // ({titleTeam: titleTeam, colorTeam:colorTeam})
    createNewTeam({ title: titleTeam, primaryColor: colorTeam, id: uuidv4() });
  };

  return (
    <section className="formulario">
      <form onSubmit={handleSubmissionNewCollaborator}>
        <h2>Fill out the form to create a new collaborator.</h2>
        <CampoTexto
          title="Name"
          placeholder="Enter name"
          required={true}
          value={name}
          setValue={setName}
        />
        <CampoTexto
          title="Position"
          placeholder="Enter position"
          required
          value={position}
          setValue={setPosition}
        />
        <CampoTexto
          title="Photo"
          placeholder="Enter photo link"
          required
          value={photoLink}
          setValue={setPhotoLink}
        />
        <ListaOpciones value={team} setValue={setTeam} teams={teams} />
        {/* Utilizing another form of props: props.children */}
        <Boton>Create</Boton>
      </form>
      <form onSubmit={handleSubmissionNewTeam}>
        <h2>Fill out the form to create a new Team.</h2>
        <CampoTexto
          title="Title"
          placeholder="Enter title"
          required={true}
          value={titleTeam}
          setValue={setTitleTeam}
        />
        <CampoTexto
          title="Color"
          placeholder="Enter color in hexadecimal"
          required
          value={colorTeam}
          setValue={setColorTeam}
        />
        <Boton>Register Team</Boton>
      </form>
    </section>
  );
}
