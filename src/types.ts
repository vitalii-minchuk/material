export type PostType = {
  id: number
  body: string
  title: string
}

export type TransactionType = {
  transactionid: string
  type: string
  status: string
  clientname: string
  amount: string
}

export type OpenDialogsType = {
  addNewTr: boolean
  delTr: boolean
  editTr: boolean
  import: boolean
  export: boolean
}

export type AmountFilterType ={
  from: number
  to: number
}

export type InvestmentDetails = {
  fullName: string
  initialInvestment: number | string
  investmentRisk: Array<"High" | "Medium" | "Low">
  commentAboutInvestmentRisk: string
  dependents: number
  acceptedTermsAndConditions: boolean
}