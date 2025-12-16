import React, { useState, useRef, useEffect } from "react";
import { WalletOption } from "../types/interface";

interface WalletSelectorProps {
  selectedWallet: string;
  onWalletSelect: (wallet: string) => void;
  wallets: WalletOption[];
  label: string;
}

export const WalletSelector = ({
  selectedWallet,
  onWalletSelect,
  wallets,
  label,
}: WalletSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      <div className="text-sm text-green-100 font-medium">{label}</div>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-[30px] text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-100"
        >
          <span className="text-green-100 capitalize">
            {selectedWallet || "Select an option"}
          </span>
          <svg
            className="w-4 h-4"
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
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-[20px] shadow-lg">
            <div className="max-h-60 overflow-y-auto">
              {wallets.map((wallet) => (
                <button
                  key={wallet.value}
                  onClick={() => {
                    onWalletSelect(wallet.value);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 capitalize"
                >
                  {wallet.icon}
                  <span>{wallet.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
