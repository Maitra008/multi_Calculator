function LabeledRangeNumberInput({
  id,
  label,
  displayValue,
  value,
  min,
  max,
  step,
  onChange,
}) {
  return (
    <div className="input-group">
      <label htmlFor={`${id}-range`}>
        <span className="label-text">{label}</span>
        <span className="label-value">{displayValue}</span>
      </label>
      <input
        id={`${id}-range`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="slider"
      />
      <input
        id={`${id}-number`}
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        className="number-input"
      />
    </div>
  )
}

export default LabeledRangeNumberInput
