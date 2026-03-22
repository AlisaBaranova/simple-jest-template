import { BaseContract } from './BaseContract'

export class LoanContract extends BaseContract {
  loanAmount: number
  monthlyPayment: number
  loanTermMonths: number

  constructor(contractId: string, clientName: string, isActive: boolean, loanAmount: number, monthlyPayment: number, loanTermMonths: number,) {
    super(contractId, clientName, isActive)
    this.loanAmount = loanAmount
    this.monthlyPayment = monthlyPayment
    this.loanTermMonths = loanTermMonths
  }
  calculateTotalPayment(): number {
    return this.monthlyPayment * this.loanTermMonths
  }
}