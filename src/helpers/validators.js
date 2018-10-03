export const calculationRegEx = /^([-0-9.]+)([-*+/]){1}([-0-9.]+)$/

export const validCalculation = (calculation = '') => {
  return calculationRegEx.test(calculation)
}

export const isOperator = (char) => {
  return ['*', '/', '+'].includes(char)
}
