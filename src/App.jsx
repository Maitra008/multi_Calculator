import { useState } from 'react'
import BasicCalculator from './components/BasicCalculator'
import SIPCalculator from './components/SIPCalculator'
import LoanCalculator from './components/LoanCalculator'
import './App.css'

const tabs = [
  { id: 'basic', label: 'Basic' },
  { id: 'sip', label: 'SIP' },
  { id: 'loan', label: 'Loan' },
]

function App() {
  const [activeTab, setActiveTab] = useState('basic')

  const onTabKeyDown = (event, currentIndex) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      return
    }

    event.preventDefault()
    const direction = event.key === 'ArrowRight' ? 1 : -1
    const nextIndex = (currentIndex + direction + tabs.length) % tabs.length
    setActiveTab(tabs[nextIndex].id)
  }

  return (
    <div className="app">
      <div className="calculator-container">
        <h1 className="app-title">Multi Calculator</h1>

        <div className="tabs" role="tablist" aria-label="Calculator options">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="calculator-content" role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
          {activeTab === 'basic' && <BasicCalculator />}
          {activeTab === 'sip' && <SIPCalculator />}
          {activeTab === 'loan' && <LoanCalculator />}
        </div>
      </div>
    </div>
  )
}

export default App
