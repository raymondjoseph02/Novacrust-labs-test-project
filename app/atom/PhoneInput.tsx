import { useState, useRef, useEffect } from "react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  showValidation?: boolean;
}

const countries = [
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+33", flag: "🇫🇷", name: "France" },
];

export const PhoneInput = ({
  value,
  onChange,
  placeholder = "000 - 000 - 00000",
  label,
  showValidation = false,
}: PhoneInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Phone validation logic
  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\d{10,15}$/; // 10-15 digits
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, ''); // Remove spaces, dashes, parentheses
    return phoneRegex.test(cleanPhone);
  };

  const isValid = validatePhoneNumber(value);
  const hasInput = value.length > 0;
  const showError = showValidation && hasInput && !isValid;
  const showSuccess = showValidation && hasInput && isValid;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-3">
      {label && (
        <div className="text-base font-medium text-gray-900">{label}</div>
      )}
      <div className={`flex items-center bg-gray-50 rounded-[30px] focus-within:ring-2 transition-colors ${
        showError
          ? "border-2 border-red-500 focus-within:ring-red-200"
          : showSuccess
          ? "border-2 border-green-500 focus-within:ring-green-200"
          : "border border-gray-200 focus-within:ring-green-100"
      }`}>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-4 hover:bg-gray-100 rounded-l-[30px] transition-colors  border-r border-r-[#E0E0E0]"
          >
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="font-medium text-gray-700">
              {selectedCountry.code}
            </span>
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute z-10 w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              <div className="max-h-40 overflow-y-auto">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <div className="flex-1">
                      <span className="font-medium">{country.code}</span>
                      <span className="text-gray-500 ml-2">{country.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <input
          type="tel"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500"
        />
      </div>
      
      {/* Validation Messages */}
      {showValidation && hasInput && (
        <div className="px-2">
          {showError && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Please enter a valid phone number (10-15 digits)</span>
            </div>
          )}
          {showSuccess && (
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Phone number is valid</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
