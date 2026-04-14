export type DepositRate = {
  months: number
  rate: number
}

export type BankData = {
  bank: string
  min: number
  url: string
  rates: DepositRate[]
  fetchedAt: string
}

export type RatesPayload = {
  updatedAt: string
  banks: BankData[]
}
