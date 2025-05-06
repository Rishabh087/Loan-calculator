import { Button, TextField, Typography, Box } from '@mui/material';
import { useState } from 'react';
import useEMICalculator from '../hooks/useEMICalculator';
import { useCurrency } from '../context/CurrencyContext';

function EMIForm() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const { currency } = useCurrency();
  const emi = useEMICalculator(loanAmount, interestRate, tenure);

  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">EMI Calculator</Typography>
      <TextField
        label="Loan Amount"
        type="number"
        variant="outlined"
        onChange={(e) => setLoanAmount(e.target.value)}
      />
      <TextField
        label="Interest Rate (p.a.)"
        type="number"
        variant="outlined"
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <TextField
        label="Tenure (months)"
        type="number"
        variant="outlined"
        onChange={(e) => setTenure(e.target.value)}
      />
      <Typography variant="h6">
        Monthly EMI: {emi} {currency}
      </Typography>
    </Box>
  );
}

export default EMIForm;
