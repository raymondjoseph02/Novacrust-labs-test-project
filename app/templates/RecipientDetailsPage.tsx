import { RecipientDetailsForm } from "../organisms/RecipientDetailsForm";

interface RecipientDetailsPageProps {
  onNext: () => void;
  onBack: () => void;
}

export const RecipientDetailsPage = ({
  onNext,
  onBack,
}: RecipientDetailsPageProps) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <RecipientDetailsForm onNext={onNext} onBack={onBack} />
      </div>
    </div>
  );
};
