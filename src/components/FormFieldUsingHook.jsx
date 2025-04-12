import { useValidation } from "../hooks/useValidation";

export function FormFieldUsingHooks(props) {
    const [ErrorDisplay, validate] = useValidation();
    const { name, label, value, onUpdate } = props;
    const onChange = (event) => {
      validate(event);
      onUpdate(name, event.target.value);
    };
    return (
      <div key={name} className="FormField">
        <label>{label}</label>
        <br/>
        <input type="text" name={name} value={value} onChange={onChange}  />
        <ErrorDisplay />
      </div>
    );
  }