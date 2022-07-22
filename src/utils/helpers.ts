import { AmountFilterType, TransactionType } from "../types";

export const getMaxMinAmount = (arr: TransactionType[]): AmountFilterType => {
  let array: Array<number> = []

  arr?.forEach(el => {
    let number = getNumberFromAmount(el.amount)
    array.push(number)
  })

  array.sort((a, b) => a - b)

  const max = array[array.length - 1]
  const min = array[0]

  return { from: min, to: max }
}

export const getNumberFromAmount = (amount: string): number => {
  let number = Number(amount.slice(1))

  return number
}