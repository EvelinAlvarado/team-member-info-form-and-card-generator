import { CampoTexto } from "../CampoTexto/CampoTexto";
import "./Formulario.css";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import { Boton } from "../Boton/Boton";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Formulario({ registerCollaborator, teams }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmission = (e) => {
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

  return (
    <section className="formulario">
      <form onSubmit={handleSubmission}>
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
    </section>
  );
}
