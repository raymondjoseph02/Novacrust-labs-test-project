import { useState } from "react";
import { ChevronLeft, CopyIcon, Info } from "lucide-react";
import { Button } from "../atom/Button";

interface SendConfirmationFormProps {
  onConfirm: () => void;
  onBack: () => void;
}

export const SendConfirmationForm = ({
  onConfirm,
  onBack,
}: SendConfirmationFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const walletAddress = "4LiV4YjbxsL6739MKghUd";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleConfirmation = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      onConfirm();
    } catch (error) {
      console.error("Confirmation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-160 mx-auto bg-white rounded-3xl shadow-lg p-6 space-y-8">
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft />
        </button>
        <h1 className="text-xl font-medium text-green-100 flex-1 text-center">
          Send ETH to the address below
        </h1>
      </div>

      <div className="space-y-8">
        {/* Wallet Address */}
        <div className="bg-[#CCF6E5] rounded-[30px] px-4 w-fit  mx-auto flex items-center justify-between gap-2">
          <span className=" text-green-100 font-medium">{walletAddress}</span>
          <button
            onClick={() => copyToClipboard(walletAddress)}
            className="p-2 cursor-pointer rounded-lg transition-colors"
          >
            <CopyIcon />
          </button>
        </div>

        {/* Transaction Details */}
        <div className=" bg-[#F7F7F7] rounded-[10px]  space-y-6 px-6 py-4">
          <div className="flex justify-between items-center ">
            <span className="text-[#4F4F4F] text-sm">Amount to send</span>
            <div className="flex items-center gap-3">
              <span className=" text-green-100">100 ETH</span>
              <button
                onClick={() => copyToClipboard("100")}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
              >
                <CopyIcon size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <span className="text-[#4F4F4F] text-sm">Network</span>
            <span className=" text-green-100">ETH</span>
          </div>

          <div className="flex justify-between items-center ">
            <span className="text-[#4F4F4F] text-sm">Wallet</span>
            <span className=" text-green-100">Other</span>
          </div>
        </div>

        {/* Warning Message */}
        <div className="flex items-start gap-2">
          <Info />
          <div className="text-[#4F4F4F] text-sm leading-relaxed">
            Only send (USDT) to this address. Ensure the sender is on the (CELO)
            network otherwise you might lose your deposit
          </div>
        </div>
      </div>

      <Button
        text="I have sent it"
        onClick={handleConfirmation}
        isDisable={false}
        isLoading={isLoading}
        style={`w-full py-4 rounded-[30px] font-bold transition-colors ${
          !isLoading
            ? "bg-green-100 text-white hover:bg-green-100/95"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      />
    </div>
  );
};
