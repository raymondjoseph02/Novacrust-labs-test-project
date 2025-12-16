import React, { useState, useRef, useEffect } from "react";
import { CryptoCurrency } from "../types/interface";

interface CurrencyDropdownProps {
  value: string;
  onChange: (currency: string) => void;
  currencies: CryptoCurrency[];
  searchable?: boolean;
}

export const CurrencyDropdown = ({
  value,
  onChange,
  currencies,
  searchable = false,
}: CurrencyDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedCurrency = currencies.find((c) => c.symbol === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-grey-100 border border-[#E0E0E0] rounded-[20px] focus:outline-none max-w-28 "
      >
        {selectedCurrency?.icon}
        <span className="font-semibold">{value}</span>
        <svg
          className="w-4 h-4 ml-auto"
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
        <div className="absolute z-10 w-66 h-fit px-3 py-4 mt-1 bg-white border border-[#E0E0E0] rounded-[20px] shadow-lg -left-full">
          {searchable && (
            <div className="mb-2">
              <div className="relative w-full rounded-[20px]">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-[#E0E0E0] rounded-[20px] focus:border outline-0"
                />
                <svg
                  className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          )}
          <div className="flex-1 overflow-y-scroll scroll-smooth max-h-46">
            {filteredCurrencies.map((currency) => (
              <button
                key={currency.symbol}
                onClick={() => {
                  onChange(currency.symbol);
                  setIsOpen(false);
                  setSearchTerm("");
                }}
                className="flex items-center gap-3 w-full p-3 rounded-xl text-left hover:bg-[#f5f5f5]  cursor-pointer my-1 focus:outline-none focus:bg-gray-50"
              >
                {currency.icon}
                <div className="flex items-center gap-2 font-medium text-sm">
                  <span className="">{currency.symbol}</span>
                  <span className="">{currency.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
