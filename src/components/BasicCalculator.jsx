import { useState } from 'react'
import './BasicCalculator.css'

function BasicCalculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [expression, setExpression] = useState('')

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
    setExpression('')
  }

  const getOperatorSymbol = (op) => {
    const symbols = { '+': '+', '-': '−', '*': '×', '/': '÷', '%': '%' }
    return symbols[op] || op
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
      if (nextOperation) {
        setExpression(`${inputValue} ${getOperatorSymbol(nextOperation)}`)
      }
    } else if (operation) {
      const currentValue = previousValue || 0
      let newValue = currentValue

      switch (operation) {
        case '+':
          newValue = currentValue + inputValue
          break
        case '-':
          newValue = currentValue - inputValue
          break
        case '*':
          newValue = currentValue * inputValue
          break
        case '/':
          newValue = currentValue / inputValue
          break
        case '%':
          newValue = currentValue % inputValue
          break
        default:
          break
      }

      setDisplay(String(newValue))
      setPreviousValue(newValue)
      
      if (nextOperation) {
        setExpression(`${newValue} ${getOperatorSymbol(nextOperation)}`)
      }
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = () => {
    if (operation && previousValue !== null) {
      const inputValue = parseFloat(display)
      setExpression(`${previousValue} ${getOperatorSymbol(operation)} ${inputValue} =`)
    }
    performOperation(null)
    setOperation(null)
    setPreviousValue(null)
  }

  const toggleSign = () => {
    const value = parseFloat(display)
    setDisplay(String(value * -1))
  }

  const percentage = () => {
    const value = parseFloat(display)
    setDisplay(String(value / 100))
  }

  return (
    <div className="basic-calculator">
      <div className="expression">{expression}</div>
      <div className="display">{display}</div>
      
      <div className="keypad">
        <button className="btn secondary" onClick={clear}>AC</button>
        <button className="btn secondary" onClick={toggleSign}>+/-</button>
        <button className="btn secondary" onClick={percentage}>%</button>
        <button className="btn operator" onClick={() => performOperation('/')}>÷</button>

        <button className="btn" onClick={() => inputDigit(7)}>7</button>
        <button className="btn" onClick={() => inputDigit(8)}>8</button>
        <button className="btn" onClick={() => inputDigit(9)}>9</button>
        <button className="btn operator" onClick={() => performOperation('*')}>×</button>

        <button className="btn" onClick={() => inputDigit(4)}>4</button>
        <button className="btn" onClick={() => inputDigit(5)}>5</button>
        <button className="btn" onClick={() => inputDigit(6)}>6</button>
        <button className="btn operator" onClick={() => performOperation('-')}>−</button>

        <button className="btn" onClick={() => inputDigit(1)}>1</button>
        <button className="btn" onClick={() => inputDigit(2)}>2</button>
        <button className="btn" onClick={() => inputDigit(3)}>3</button>
        <button className="btn operator" onClick={() => performOperation('+')}>+</button>

        <button className="btn zero" onClick={() => inputDigit(0)}>0</button>
        <button className="btn" onClick={inputDecimal}>.</button>
        <button className="btn operator" onClick={calculate}>=</button>
      </div>
    </div>
  )
}

export default BasicCalculator
