import test from 'node:test'
import assert from 'node:assert/strict'
import { calculateSip, calculateEmi, formatInrCurrency } from '../src/utils/calculations.js'

test('calculateSip returns deterministic values for standard inputs', () => {
  const result = calculateSip({ monthlyInvestment: 5000, expectedReturn: 12, timePeriodYears: 10 })

  assert.equal(Math.round(result.totalInvestment), 600000)
  assert.equal(Math.round(result.maturityAmount), 1161695)
  assert.equal(Math.round(result.estimatedReturns), 561695)
})

test('calculateSip handles zero return rate', () => {
  const result = calculateSip({ monthlyInvestment: 3000, expectedReturn: 0, timePeriodYears: 5 })

  assert.equal(result.estimatedReturns, 0)
  assert.equal(result.maturityAmount, result.totalInvestment)
})

test('calculateEmi handles zero interest rate', () => {
  const result = calculateEmi({ loanAmount: 120000, interestRate: 0, loanTenureYears: 1 })

  assert.equal(Math.round(result.emi), 10000)
  assert.equal(Math.round(result.totalInterest), 0)
})

test('calculateEmi throws on invalid values', () => {
  assert.throws(
    () => calculateEmi({ loanAmount: -1, interestRate: 10, loanTenureYears: 1 }),
    /valid loan inputs/,
  )
})

test('formatInrCurrency formats INR currency safely', () => {
  assert.equal(formatInrCurrency(125000), '₹1,25,000')
  assert.equal(formatInrCurrency('not-a-number'), '₹0')
})
