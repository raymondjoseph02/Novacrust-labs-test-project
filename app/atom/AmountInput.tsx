interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export const AmountInput = ({
  value,
  onChange,
  placeholder = "0.00",
  label,
}: AmountInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Allow empty string
    if (inputValue === "") {
      onChange("");
      return;
    }

    // Only allow numbers and single decimal point
    const numericRegex = /^\d*\.?\d*$/;
    if (numericRegex.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full  py-3 text-2xl font-semibold bg-transparent border-none outline-none focus:ring-0 appearance-none"
      />
    </div>
  );
};
