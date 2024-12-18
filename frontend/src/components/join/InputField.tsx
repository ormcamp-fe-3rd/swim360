interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  id: string;
  placeholder?: string;
  helperText?: string;
}

function InputField({
  label,
  type = "text",
  name,
  id,
  placeholder,
  helperText,
}: InputFieldProps) {
  return (
    <div className="h-22 flex w-full justify-between border-b py-4">
      <span className="block w-1/2 pl-4">{label}</span>
      <div className="w-1/2 flex-col">
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="w-full border-none bg-slate-100 py-2.5"
        />
        {helperText && (
          <span className="mt-2 block text-sm text-gray-500">{helperText}</span>
        )}
      </div>
    </div>
  );
}

export default InputField;
