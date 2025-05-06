import React from 'react';
import EMIForm from '../components/EMIForm';
import CurrencyConverter from '../components/CurrencyConverter';

function Home() {
  return (
    <div>
      <h1>EMI Calculator App</h1>
      <EMIForm />
      <CurrencyConverter baseAmount={1000} />
    </div>
  );
}

export default Home;
