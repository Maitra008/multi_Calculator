import { useState } from 'react'
import './LoanCalculator.css'

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [loanTenure, setLoanTenure] = useState(20)
  const [result, setResult] = useState(null)

  const calculateEMI = () => {
    const P = parseFloat(loanAmount)
    const r = parseFloat(interestRate) / 12 / 100 // monthly interest rate
    const n = parseFloat(loanTenure) * 12 // total months

    // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalAmount = emi * n
    const totalInterest = totalAmount - P

    setResult({
      emi: emi.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      principalAmount: P.toFixed(2)
    })
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="loan-calculator">
      <h2 className="calc-title">Loan EMI Calculator</h2>
      
      <div className="input-group">
        <label>
          <span className="label-text">Loan Amount</span>
          <span className="label-value">{formatCurrency(loanAmount)}</span>
        </label>
        <input
          type="range"
          min="100000"
          max="10000000"
          step="50000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="slider"
        />
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="number-input"
        />
      </div>

      <div className="input-group">
        <label>
          <span className="label-text">Interest Rate (p.a.)</span>
          <span className="label-value">{interestRate}%</span>
        </label>
        <input
          type="range"
          min="1"
          max="20"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="slider"
        />
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="number-input"
        />
      </div>

      <div className="input-group">
        <label>
          <span className="label-text">Loan Tenure</span>
          <span className="label-value">{loanTenure} Years</span>
        </label>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          className="slider"
        />
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          className="number-input"
        />
      </div>

      <button onClick={calculateEMI} className="calculate-btn">
        Calculate EMI
      </button>

      {result && (
        <div className="results">
          <div className="result-card highlight">
            <div className="result-label">Monthly EMI</div>
            <div className="result-value large">{formatCurrency(result.emi)}</div>
          </div>
          <div className="result-row">
            <div className="result-card">
              <div className="result-label">Principal Amount</div>
              <div className="result-value">{formatCurrency(result.principalAmount)}</div>
            </div>
            <div className="result-card">
              <div className="result-label">Total Interest</div>
              <div className="result-value interest">{formatCurrency(result.totalInterest)}</div>
            </div>
          </div>
          <div className="result-card">
            <div className="result-label">Total Amount Payable</div>
            <div className="result-value total">{formatCurrency(result.totalAmount)}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoanCalculator
