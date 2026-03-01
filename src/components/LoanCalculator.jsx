import { useState } from 'react'
import LabeledRangeNumberInput from './common/LabeledRangeNumberInput'
import { calculateEmi, formatInrCurrency } from '../utils/calculations'
import { clampNumber } from '../utils/inputValidation'
import './LoanCalculator.css'

const LOAN_LIMITS = {
  loanAmount: { min: 100000, max: 10000000, step: 50000, fallback: 1000000 },
  interestRate: { min: 0, max: 20, step: 0.1, fallback: 8.5 },
  loanTenure: { min: 1, max: 30, step: 1, fallback: 20 },
}

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [loanTenure, setLoanTenure] = useState(20)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const updateInput = (setter, limits) => (event) => {
    const nextValue = clampNumber(event.target.value, limits.min, limits.max, limits.fallback)
    setter(nextValue)
  }

  const calculateEMIResult = () => {
    try {
      const nextResult = calculateEmi({
        loanAmount,
        interestRate,
        loanTenureYears: loanTenure,
      })

      setResult(nextResult)
      setError('')
    } catch (calculationError) {
      setResult(null)
      setError(calculationError.message)
    }
  }

  return (
    <div className="loan-calculator">
      <h2 className="calc-title">Loan EMI Calculator</h2>

      <LabeledRangeNumberInput
        id="loan-amount"
        label="Loan Amount"
        displayValue={formatInrCurrency(loanAmount)}
        value={loanAmount}
        min={LOAN_LIMITS.loanAmount.min}
        max={LOAN_LIMITS.loanAmount.max}
        step={LOAN_LIMITS.loanAmount.step}
        onChange={updateInput(setLoanAmount, LOAN_LIMITS.loanAmount)}
      />

      <LabeledRangeNumberInput
        id="loan-interest-rate"
        label="Interest Rate (p.a.)"
        displayValue={`${interestRate}%`}
        value={interestRate}
        min={LOAN_LIMITS.interestRate.min}
        max={LOAN_LIMITS.interestRate.max}
        step={LOAN_LIMITS.interestRate.step}
        onChange={updateInput(setInterestRate, LOAN_LIMITS.interestRate)}
      />

      <LabeledRangeNumberInput
        id="loan-tenure"
        label="Loan Tenure"
        displayValue={`${loanTenure} Years`}
        value={loanTenure}
        min={LOAN_LIMITS.loanTenure.min}
        max={LOAN_LIMITS.loanTenure.max}
        step={LOAN_LIMITS.loanTenure.step}
        onChange={updateInput(setLoanTenure, LOAN_LIMITS.loanTenure)}
      />

      <button onClick={calculateEMIResult} className="calculate-btn">
        Calculate EMI
      </button>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <div className="results">
          <div className="result-card highlight">
            <div className="result-label">Monthly EMI</div>
            <div className="result-value large">{formatInrCurrency(result.emi)}</div>
          </div>
          <div className="result-row">
            <div className="result-card">
              <div className="result-label">Principal Amount</div>
              <div className="result-value">{formatInrCurrency(result.principalAmount)}</div>
            </div>
            <div className="result-card">
              <div className="result-label">Total Interest</div>
              <div className="result-value interest">{formatInrCurrency(result.totalInterest)}</div>
            </div>
          </div>
          <div className="result-card">
            <div className="result-label">Total Amount Payable</div>
            <div className="result-value total">{formatInrCurrency(result.totalAmount)}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoanCalculator
