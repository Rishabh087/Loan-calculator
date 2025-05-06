import { useEffect, useState } from 'react';

export default function useCurrencyConverter(amount, targetCurrency) {
  const [converted, setConverted] = useState(amount);

  useEffect(() => {
    if (!amount || !targetCurrency) return;

    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
      .then(res => res.json())
      .then(data => {
        const rate = data.rates[targetCurrency];
        setConverted((amount * rate).toFixed(2));
      })
      .catch(() => setConverted(amount));
  }, [amount, targetCurrency]);

  return converted;
}

