import { CampoTexto } from "../CampoTexto/CampoTexto";
import "./Formulario.css";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import { Boton } from "../Boton/Boton";

export function Formulario() {
  const handleSubmission = (e) => {
    // Prevent the default form behavior
    e.preventDefault();
    // console.log("Handling the event:", e);
  };

  return (
    <section className="formulario">
      <form onSubmit={handleSubmission}>
        <h2>Fill out the form to create a new collaborator.</h2>
        <CampoTexto title="Name" placeholder="Enter name" required={true} />
        <CampoTexto title="Position" placeholder="Enter position" required />
        <CampoTexto title="Photo" placeholder="Enter photo link" required />
        <ListaOpciones />
        {/* Utilizing another form of props: props.children */}
        <Boton>Create</Boton>
      </form>
    </section>
  );
}
