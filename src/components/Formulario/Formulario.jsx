import { CampoTexto } from "../CampoTexto/CampoTexto";
import "./Formulario.css";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import { Boton } from "../Boton/Boton";

export function Formulario() {
  const manejarEnvio = (e) => {
    // evitar el comportamiento por defecto
    e.preventDefault();
    // console.log("Manejar el evento :", e);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" />
        <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" />
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" />
        <ListaOpciones />
        {/* Se utiliza otra forma de props: props.children */}
        <Boton>Crear</Boton>
      </form>
    </section>
  );
}
