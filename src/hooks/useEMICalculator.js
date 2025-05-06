import { useMemo } from 'react';

const useEMICalculator = (loanAmount, interestRate, tenure) => {
  return useMemo(() => {
    if (!loanAmount || !interestRate || !tenure) return 0;

    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const months = parseInt(tenure);

    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    return emi.toFixed(2); // Returning EMI value rounded to two decimal places
  }, [loanAmount, interestRate, tenure]);
};

export default useEMICalculator;
