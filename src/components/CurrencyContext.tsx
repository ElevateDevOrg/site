
import { createContext, useContext, useState, ReactNode } from 'react';

type Currency = 'USD' | 'GBP' | 'EUR' | 'ZAR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (usdPrice: number) => string;
  getCurrencySymbol: (currency: Currency) => string;
}

// Exchange rates (fixed for demonstration)
const exchangeRates = {
  USD: 1,
  GBP: 0.79,
  EUR: 0.92,
  ZAR: 18.23
};

// Currency symbols
const currencySymbols = {
  USD: '$',
  GBP: '£',
  EUR: '€',
  ZAR: 'R'
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  const convertPrice = (usdPrice: number): string => {
    const convertedPrice = usdPrice * exchangeRates[currency];
    
    // Format based on currency
    if (currency === 'ZAR') {
      return convertedPrice.toFixed(0); // No decimal for Rand
    }
    
    return convertedPrice.toFixed(2);
  };

  const getCurrencySymbol = (currencyCode: Currency): string => {
    return currencySymbols[currencyCode];
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice, getCurrencySymbol }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
