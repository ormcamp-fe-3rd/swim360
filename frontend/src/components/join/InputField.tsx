interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  id: string;
  placeholder?: string;
  className?: string;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  label,
  type = "text",
  name,
  id,
  placeholder,
  helperText,
  className,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex h-16 w-full items-center justify-between py-4">
      <span className="block w-1/3 px-10 text-lg font-normal text-[#5E5E5E]">
        {label}
      </span>
      <div className="w-2/3 flex-col pr-10">
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={`w-full rounded-md border-none bg-[#F0F0F0] py-2.5 ${className}`}
          onChange={onChange}
        />
        {helperText && (
          <span className="mt-2 block text-sm text-gray-500">{helperText}</span>
        )}
      </div>
    </div>
  );
}

export default InputField;
