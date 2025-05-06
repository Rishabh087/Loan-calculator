# 💸 EMI Calculator App

A responsive React-based EMI Calculator with live currency conversion and light/dark theming.

## 🚀 Features
- EMI calculation using standard formula
- Live currency conversion using ExchangeRate API
- Light/Dark mode toggle using Material UI
- Context API for theme and currency state
- Custom hooks for EMI logic and currency conversion
- 404 Not Found and Error fallback pages

## 📦 Tech Stack
- React (with Context API)
- Material UI for theming
- ExchangeRate API for currency data
- React Router

## 🧮 EMI Formula
\[ EMI = \frac{P \times R \times (1 + R)^N}{(1 + R)^N - 1} \]
Where:
- `P` = Principal loan amount
- `R` = Monthly interest rate (annual / 12 / 100)
- `N` = Loan tenure in months

## Live Demo
You can view the live demo of this project here: [Live Demo](https://loan-calculator-self-iota.vercel.app/)


## 🛠️ Setup Instructions
```bash
# Clone the repo
git clone https://github.com/Rishabh087/Loan-calculator
cd emi-calculator

# Install dependencies
npm install

# Create .env
cp .env.example .env

# Start the dev server
npm start
