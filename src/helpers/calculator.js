import { calculationRegEx } from './validators'

export const calculate = (expression = '') => {
  const splitExpression = expression.match(calculationRegEx)
  const part1 = Number(splitExpression[1])
  const part2 = Number(splitExpression[3])

  const operator = splitExpression[2]
  let solution
  switch (operator) {
    case '*':
      solution = part1 * part2
      break
    case '/':
      solution = part1 / part2
      break
    case '-':
      solution = part1 - part2
      break
    case '=':
      solution = part1 + part2
      break
    default:
  }
  return Math.round(solution * 100) / 100
}
