import { useState } from 'react'
import BasicCalculator from './components/BasicCalculator'
import SIPCalculator from './components/SIPCalculator'
import LoanCalculator from './components/LoanCalculator'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('basic')

  return (
    <div className="app">
      <div className="calculator-container">
        <h1 className="app-title">Multi Calculator</h1>
        
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'basic' ? 'active' : ''}`}
            onClick={() => setActiveTab('basic')}
          >
            Basic
          </button>
          <button 
            className={`tab ${activeTab === 'sip' ? 'active' : ''}`}
            onClick={() => setActiveTab('sip')}
          >
            SIP
          </button>
          <button 
            className={`tab ${activeTab === 'loan' ? 'active' : ''}`}
            onClick={() => setActiveTab('loan')}
          >
            Loan
          </button>
        </div>

        <div className="calculator-content">
          {activeTab === 'basic' && <BasicCalculator />}
          {activeTab === 'sip' && <SIPCalculator />}
          {activeTab === 'loan' && <LoanCalculator />}
        </div>
      </div>
    </div>
  )
}

export default App
