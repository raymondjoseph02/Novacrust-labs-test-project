import { SelectProps } from "../types/interface";

export const Select = ({
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  label,
}: SelectProps) => {
  return (
    <>
      {label && (
        <label className="block mb-2.5 text-sm font-medium text-gray-600">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[30px] text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-100 text-gray-500 appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 0.5rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.5em 1.5em',
          paddingRight: '2.5rem'
        }}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
