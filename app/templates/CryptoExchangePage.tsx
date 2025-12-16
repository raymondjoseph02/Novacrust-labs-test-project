import { CryptoExchangeForm } from "../organisms/CryptoExchangeForm";

interface CryptoExchangePageProps {
  onConvertNow?: () => void;
}

export const CryptoExchangePage = ({
  onConvertNow,
}: CryptoExchangePageProps) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="flex justify-center lg:justify-end">
        <CryptoExchangeForm onConvertNow={onConvertNow} />
      </div>
    </div>
  );
};
