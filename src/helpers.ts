import { TransactionType } from "./types"

export const getOrderNumber = (arr: TransactionType[]): string => {

  if (arr.length) {
    const array: Array<number> = []

    arr.forEach((item => {
        array.push(Number(item.transactionid))
      }
    ))

    return String(Math.max(...array) + 1)
  }
 
  return "1"
}