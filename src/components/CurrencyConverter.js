import React, { useEffect, useState } from 'react';

const CurrencyConverter = ({ baseAmount }) => {
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    const fetchConversion = async () => {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
      const data = await response.json();
      setConvertedAmount(data.rates['INR'] * baseAmount); // Convert to INR
    };

    fetchConversion();
  }, [currency, baseAmount]);

  return (
    <div>
      <h3>Currency Converter</h3>
      <p>
        {baseAmount} {currency} is equivalent to {convertedAmount} INR
      </p>
      <button onClick={() => setCurrency('USD')}>USD</button>
      <button onClick={() => setCurrency('EUR')}>EUR</button>
    </div>
  );
};

export default CurrencyConverter;
