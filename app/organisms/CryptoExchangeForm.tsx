import { useState } from "react";
import { Button } from "../atom/Button";
import { Tab } from "../molecules/Tab";
import { CurrencyInputPanel } from "../molecules/CurrencyInputPanel";
import { WalletSelector } from "../molecules/WalletSelector";
import { cryptocurrencies, wallets, tabs } from "../data";

interface CryptoExchangeFormProps {
  onConvertNow?: () => void;
}

export const CryptoExchangeForm = ({
  onConvertNow,
}: CryptoExchangeFormProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [payAmount, setPayAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [payCurrency, setPayCurrency] = useState("ETH");
  const [receiveCurrency, setReceiveCurrency] = useState("BNB");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [paymentSource, setPaymentSource] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const walletOptions = wallets.map((wallet) => ({
    label: wallet.label,
    value: wallet.value,
    icon: wallet.icon,
  }));

  // Validation logic
  const validateAmount = (amount: string): boolean => {
    const numAmount = parseFloat(amount);
    return amount !== "" && !isNaN(numAmount) && numAmount > 0;
  };

  const isFormValid = (): boolean => {
    return (
      validateAmount(payAmount) &&
      validateAmount(receiveAmount) &&
      payCurrency !== "" &&
      receiveCurrency !== "" &&
      selectedWallet !== "" &&
      paymentSource !== "" &&
      payCurrency !== receiveCurrency
    );
  };

  const handleConversion = async () => {
    if (!isFormValid() || isLoading) return;
    
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      onConvertNow?.();
    } catch (error) {
      console.error("Conversion failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-160 mx-auto bg-white rounded-3xl shadow-lg px-17 pt-10 pb-14 flex items-center justify-center flex-col gap-y-10">
      <Tab
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onClick={(tab) => setActiveTab(tab)}
      />

      <div className="space-y-6">
        <CurrencyInputPanel
          label="You pay"
          amount={payAmount}
          onAmountChange={setPayAmount}
          currency={payCurrency}
          onCurrencyChange={setPayCurrency}
          currencies={cryptocurrencies}
          searchable={true}
        />

        <CurrencyInputPanel
          label="You receive"
          amount={receiveAmount}
          onAmountChange={setReceiveAmount}
          currency={receiveCurrency}
          onCurrencyChange={setReceiveCurrency}
          currencies={cryptocurrencies}
          searchable={true}
        />

        <WalletSelector
          label="Pay from"
          selectedWallet={paymentSource}
          onWalletSelect={setPaymentSource}
          wallets={walletOptions}
        />

        <WalletSelector
          label="Pay to"
          selectedWallet={selectedWallet}
          onWalletSelect={setSelectedWallet}
          wallets={walletOptions}
        />
      </div>

      <Button
        text="Convert now"
        onClick={handleConversion}
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
