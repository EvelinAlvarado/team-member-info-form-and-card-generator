import "./InputField.css";

export function InputField(props) {
  const placeholderModifier = `${props.placeholder}...`;
  // Destructuring, default type text
  const { type = "text" } = props;
  // console.log("Data: ", props);

  const handleOnChange = (e) => {
    props.setValue(e.target.value);
  };
  return (
    <div className={`field field-${type}`}>
      <label>{props.title}</label>
      <input
        placeholder={placeholderModifier}
        required={props.required}
        value={props.value}
        onChange={handleOnChange}
        type={type}
      />
    </div>
  );
}
