export function formatInrCurrency(value) {
  const numericValue = Number(value)
  const safeValue = Number.isFinite(numericValue) ? numericValue : 0

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(safeValue)
}

export function calculateSip({ monthlyInvestment, expectedReturn, timePeriodYears }) {
  const P = Number(monthlyInvestment)
  const annualRate = Number(expectedReturn)
  const years = Number(timePeriodYears)

  if (!Number.isFinite(P) || !Number.isFinite(annualRate) || !Number.isFinite(years) || P < 0 || years <= 0) {
    throw new Error('Please enter valid SIP inputs.')
  }

  const n = years * 12
  const r = annualRate / 12 / 100
  const totalInvestment = P * n

  if (r <= 0) {
    return {
      maturityAmount: totalInvestment,
      totalInvestment,
      estimatedReturns: 0,
    }
  }

  const maturityAmount = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r))

  return {
    maturityAmount,
    totalInvestment,
    estimatedReturns: maturityAmount - totalInvestment,
  }
}

export function calculateEmi({ loanAmount, interestRate, loanTenureYears }) {
  const P = Number(loanAmount)
  const annualRate = Number(interestRate)
  const years = Number(loanTenureYears)

  if (!Number.isFinite(P) || !Number.isFinite(annualRate) || !Number.isFinite(years) || P <= 0 || years <= 0) {
    throw new Error('Please enter valid loan inputs.')
  }

  const n = years * 12
  const r = annualRate / 12 / 100

  let emi
  if (r <= 0) {
    emi = P / n
  } else {
    emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  }

  const totalAmount = emi * n
  const totalInterest = totalAmount - P

  return {
    emi,
    totalAmount,
    totalInterest,
    principalAmount: P,
  }
}
