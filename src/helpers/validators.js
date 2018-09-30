export const validCalculation = (calculation = '') => {
  return /([0-9.])+([*-=+/])([0-9.])/g.test(calculation)
}
