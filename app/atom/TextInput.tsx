interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  type?: string;
  showValidation?: boolean;
}

export const TextInput = ({
  value,
  onChange,
  placeholder,
  label,
  type = "text",
  showValidation = false,
}: TextInputProps) => {
  // Email validation logic
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValid = type === "email" ? validateEmail(value) : value.length > 0;
  const hasInput = value.length > 0;
  const showError = showValidation && hasInput && !isValid;
  const showSuccess = showValidation && hasInput && isValid;

  return (
    <div className="space-y-3">
      {label && (
        <div className="text-base font-medium text-gray-900">{label}</div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-4 bg-gray-50 rounded-[30px] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
          showError
            ? "border-2 border-red-500 focus:ring-red-200"
            : showSuccess
            ? "border-2 border-green-500 focus:ring-green-200"
            : "border border-gray-200 focus:ring-green-100 focus:border-transparent"
        }`}
      />
      
      {/* Validation Messages */}
      {showValidation && hasInput && (
        <div className="px-2">
          {showError && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>
                {type === "email" ? "Please enter a valid email address" : "This field is required"}
              </span>
            </div>
          )}
          {showSuccess && (
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>
                {type === "email" ? "Email address is valid" : "Input is valid"}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};