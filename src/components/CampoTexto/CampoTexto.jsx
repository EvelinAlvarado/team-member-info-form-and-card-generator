import "./CampoTexto.css";

export function CampoTexto(props) {
  const placeholderModificado = `${props.placeholder}...`;
  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input placeholder={placeholderModificado} />
    </div>
  );
}
