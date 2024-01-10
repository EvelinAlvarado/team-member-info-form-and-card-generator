import "./CampoTexto.css";

export function CampoTexto(props) {
  const placeholderModifier = `${props.placeholder}...`;

  // console.log("Data: ", props);

  const handleOnChange = (e) => {
    props.setValue(e.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.title}</label>
      <input
        placeholder={placeholderModifier}
        required={props.required}
        value={props.value}
        onChange={handleOnChange}
      />
    </div>
  );
}
