import { useState } from 'react'
import './SIPCalculator.css'

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [timePeriod, setTimePeriod] = useState(10)
  const [result, setResult] = useState(null)

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment)
    const r = parseFloat(expectedReturn) / 12 / 100 // monthly rate
    const n = parseFloat(timePeriod) * 12 // total months

    // SIP Formula: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
    const maturityAmount = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r))
    const totalInvestment = P * n
    const estimatedReturns = maturityAmount - totalInvestment

    setResult({
      maturityAmount: maturityAmount.toFixed(2),
      totalInvestment: totalInvestment.toFixed(2),
      estimatedReturns: estimatedReturns.toFixed(2)
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
    <div className="sip-calculator">
      <h2 className="calc-title">SIP Calculator</h2>
      
      <div className="input-group">
        <label>
          <span className="label-text">Monthly Investment</span>
          <span className="label-value">{formatCurrency(monthlyInvestment)}</span>
        </label>
        <input
          type="range"
          min="500"
          max="100000"
          step="500"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
          className="slider"
        />
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
          className="number-input"
        />
      </div>

      <div className="input-group">
        <label>
          <span className="label-text">Expected Return Rate (p.a.)</span>
          <span className="label-value">{expectedReturn}%</span>
        </label>
        <input
          type="range"
          min="1"
          max="30"
          step="0.5"
          value={expectedReturn}
          onChange={(e) => setExpectedReturn(e.target.value)}
          className="slider"
        />
        <input
          type="number"
          value={expectedReturn}
          onChange={(e) => setExpectedReturn(e.target.value)}
          className="number-input"
        />
      </div>

      <div className="input-group">
        <label>
          <span className="label-text">Time Period</span>
          <span className="label-value">{timePeriod} Years</span>
        </label>
        <input
          type="range"
          min="1"
          max="40"
          step="1"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          className="slider"
        />
        <input
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          className="number-input"
        />
      </div>

      <button onClick={calculateSIP} className="calculate-btn">
        Calculate
      </button>

      {result && (
        <div className="results">
          <div className="result-card">
            <div className="result-label">Total Investment</div>
            <div className="result-value">{formatCurrency(result.totalInvestment)}</div>
          </div>
          <div className="result-card">
            <div className="result-label">Estimated Returns</div>
            <div className="result-value returns">{formatCurrency(result.estimatedReturns)}</div>
          </div>
          <div className="result-card highlight">
            <div className="result-label">Maturity Amount</div>
            <div className="result-value large">{formatCurrency(result.maturityAmount)}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SIPCalculator
