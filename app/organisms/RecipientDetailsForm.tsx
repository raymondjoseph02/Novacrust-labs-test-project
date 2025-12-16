import { useState } from "react";
import { Button } from "../atom/Button";
import { TextInput } from "../atom/TextInput";
import { PhoneInput } from "../atom/PhoneInput";

interface RecipientDetailsFormProps {
  onNext: () => void;
  onBack: () => void;
}

export const RecipientDetailsForm = ({
  onNext,
  onBack,
}: RecipientDetailsFormProps) => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced validation logic
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\d{10,15}$/; // 10-15 digits
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, ""); // Remove spaces, dashes, parentheses
    return phoneRegex.test(cleanPhone);
  };

  const isFormValid = (): boolean => {
    return validateEmail(recipientEmail) && validatePhoneNumber(phoneNumber);
  };

  const handleNext = async () => {
    if (!isFormValid() || isLoading) return;

    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onNext();
    } catch (error) {
      console.error("Validation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6 space-y-6 ">
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-xl font-medium text-green-100 flex-1 text-center">
          Recipient details
        </h1>
      </div>

      <div className="space-y-6 mb-25">
        <div>
          <TextInput
            label="Recipient email"
            value={recipientEmail}
            onChange={setRecipientEmail}
            placeholder="Enter recipient email"
            type="email"
            showValidation={false}
          />
        </div>

        <div>
          <PhoneInput
            label="Recipient phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            placeholder="000 - 000 - 00000"
            showValidation={false}
          />
        </div>
      </div>

      <Button
        text="Next"
        onClick={handleNext}
        isDisable={!isFormValid()}
        isLoading={isLoading}
        style={`w-full py-4 rounded-[30px] font-bold transition-colors ${
          isFormValid() && !isLoading
            ? "bg-green-100 text-white hover:bg-green-100/95"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      />
    </div>
  );
};
