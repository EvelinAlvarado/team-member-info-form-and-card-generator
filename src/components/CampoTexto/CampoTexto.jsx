import "./CampoTexto.css";

export function CampoTexto(props) {
  const placeholderModifier = `${props.placeholder}...`;
  return (
    <div className="campo-texto">
      <label>{props.title}</label>
      <input placeholder={placeholderModifier} required={props.required} />
    </div>
  );
}
