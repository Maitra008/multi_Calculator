export function clampNumber(value, min, max, fallback) {
  const numeric = Number(value)

  if (!Number.isFinite(numeric)) {
    return fallback
  }

  if (numeric < min) {
    return min
  }

  if (numeric > max) {
    return max
  }

  return numeric
}
