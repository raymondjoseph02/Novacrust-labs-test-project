import { ReactNode } from "react";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: string;
  isDisable: boolean;
  isLoading?: boolean;
}
export interface SelectOption {
  label: string;
  value: string;
  icon?: ReactNode;
}

export interface CryptoCurrency {
  symbol: string;
  name: string;
  icon: ReactNode;
}

export interface WalletOption {
  label: string;
  value: string;
  icon: ReactNode;
}

export interface SelectProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  options: SelectOption[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
}
type Tab = string;
export interface TabProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (val: string) => void;
  onClick: (val: string) => void;
}
