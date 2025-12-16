export const wallets = [
  {
    label: "Metamask",
    icon: (
      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
        🦊
      </div>
    ),
    value: "metamask",
  },
  {
    label: "Rainbow",
    icon: (
      <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center">
        🌈
      </div>
    ),
    value: "rainbow",
  },
  {
    label: "WalletConnect",
    icon: (
      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
        W
      </div>
    ),
    value: "walletconnect",
  },
  {
    label: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)",
    icon: (
      <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white text-xs">
        ⚡
      </div>
    ),
    value: "other",
  },
];

export const cryptocurrencies = [
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: <img alt="ETH icon" src="/images/eth.png" className="w-6 h-6 rounded-full" />,
  },
  {
    symbol: "CELO",
    name: "Celo",
    icon: <img alt="CELO icon" src="/images/Rectangle 4410.png" className="w-6 h-6 rounded-full" />,
  },
  {
    symbol: "TON",
    name: "Toncoin", 
    icon: <img alt="TON icon" src="/images/ton.png" className="w-6 h-6 rounded-full" />,
  },
  {
    symbol: "BNB",
    name: "BNB",
    icon: <img alt="BNB icon" src="/images/bnb.png" className="w-6 h-6 rounded-full" />,
  },
];

export const tabs = ["Crypto to cash", "Cash to crypto", "Crypto to fiat loan"];
