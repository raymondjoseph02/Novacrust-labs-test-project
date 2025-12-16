import React from "react";
import { AmountInput } from "../atom/AmountInput";
import { CurrencyDropdown } from "../atom/CurrencyDropdown";
import { CryptoCurrency } from "../types/interface";

interface CurrencyInputPanelProps {
  label: string;
  amount: string;
  onAmountChange: (amount: string) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  currencies: CryptoCurrency[];
  searchable?: boolean;
}

export const CurrencyInputPanel = ({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencies,
  searchable = false,
}: CurrencyInputPanelProps) => {
  return (
    <div className="border border-[#E0E0E0] rounded-[30px] p-6 space-y-2">
      <div className="text-base text-grey-400 font-medium">{label}</div>
      <div className="flex items-baseline justify-baseline ">
        <div className="">
          <AmountInput
            value={amount}
            onChange={onAmountChange}
            placeholder="0.00"
          />
        </div>
        <div className="">
          <CurrencyDropdown
            value={currency}
            onChange={onCurrencyChange}
            currencies={currencies}
            searchable={searchable}
          />
        </div>
      </div>
    </div>
  );
};
