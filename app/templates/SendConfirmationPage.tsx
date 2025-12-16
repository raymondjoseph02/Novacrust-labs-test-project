import { SendConfirmationForm } from "../organisms/SendConfirmationForm";

interface SendConfirmationPageProps {
  onConfirm: () => void;
  onBack: () => void;
}

export const SendConfirmationPage = ({
  onConfirm,
  onBack,
}: SendConfirmationPageProps) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <SendConfirmationForm onConfirm={onConfirm} onBack={onBack} />
      </div>
    </div>
  );
};
