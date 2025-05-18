import InputBase from "./inputBase";

interface Props {
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, "name">;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  name: string;
}

function Input({ inputProps = {}, labelProps = {}, name }: Props) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm/6 font-medium text-gray-900"
        {...labelProps}
      >
        Email address
      </label>
      <div className="mt-2">
        <InputBase id={name} name={name} {...inputProps} />
        {}
      </div>
    </div>
  );
}

export default Input;
