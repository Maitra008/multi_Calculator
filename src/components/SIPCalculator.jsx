import { useState } from 'react'
import LabeledRangeNumberInput from './common/LabeledRangeNumberInput'
import { calculateSip, formatInrCurrency } from '../utils/calculations'
import { clampNumber } from '../utils/inputValidation'
import './SIPCalculator.css'

const SIP_LIMITS = {
  monthlyInvestment: { min: 500, max: 100000, step: 500, fallback: 5000 },
  expectedReturn: { min: 0, max: 30, step: 0.5, fallback: 12 },
  timePeriod: { min: 1, max: 40, step: 1, fallback: 10 },
}

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [timePeriod, setTimePeriod] = useState(10)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const updateInput = (setter, limits) => (event) => {
    const nextValue = clampNumber(event.target.value, limits.min, limits.max, limits.fallback)
    setter(nextValue)
  }

  const calculateSIPResult = () => {
    try {
      const nextResult = calculateSip({
        monthlyInvestment,
        expectedReturn,
        timePeriodYears: timePeriod,
      })

      setResult(nextResult)
      setError('')
    } catch (calculationError) {
      setResult(null)
      setError(calculationError.message)
    }
  }

  return (
    <div className="sip-calculator">
      <h2 className="calc-title">SIP Calculator</h2>

      <LabeledRangeNumberInput
        id="sip-monthly-investment"
        label="Monthly Investment"
        displayValue={formatInrCurrency(monthlyInvestment)}
        value={monthlyInvestment}
        min={SIP_LIMITS.monthlyInvestment.min}
        max={SIP_LIMITS.monthlyInvestment.max}
        step={SIP_LIMITS.monthlyInvestment.step}
        onChange={updateInput(setMonthlyInvestment, SIP_LIMITS.monthlyInvestment)}
      />

      <LabeledRangeNumberInput
        id="sip-expected-return"
        label="Expected Return Rate (p.a.)"
        displayValue={`${expectedReturn}%`}
        value={expectedReturn}
        min={SIP_LIMITS.expectedReturn.min}
        max={SIP_LIMITS.expectedReturn.max}
        step={SIP_LIMITS.expectedReturn.step}
        onChange={updateInput(setExpectedReturn, SIP_LIMITS.expectedReturn)}
      />

      <LabeledRangeNumberInput
        id="sip-time-period"
        label="Time Period"
        displayValue={`${timePeriod} Years`}
        value={timePeriod}
        min={SIP_LIMITS.timePeriod.min}
        max={SIP_LIMITS.timePeriod.max}
        step={SIP_LIMITS.timePeriod.step}
        onChange={updateInput(setTimePeriod, SIP_LIMITS.timePeriod)}
      />

      <button onClick={calculateSIPResult} className="calculate-btn">
        Calculate
      </button>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <div className="results">
          <div className="result-card">
            <div className="result-label">Total Investment</div>
            <div className="result-value">{formatInrCurrency(result.totalInvestment)}</div>
          </div>
          <div className="result-card">
            <div className="result-label">Estimated Returns</div>
            <div className="result-value returns">{formatInrCurrency(result.estimatedReturns)}</div>
          </div>
          <div className="result-card highlight">
            <div className="result-label">Maturity Amount</div>
            <div className="result-value large">{formatInrCurrency(result.maturityAmount)}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SIPCalculator
