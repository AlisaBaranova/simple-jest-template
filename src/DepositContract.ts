import {BaseContract} from "./BaseContract";

export class DepositContract extends BaseContract {
  amount: number
  interestRate: number

  constructor(contractId: string, clientName: string, isActive: boolean, amount: number, interestRate: number,) {
    super(contractId, clientName, isActive)
    this.amount = amount
    this.interestRate = interestRate
  }
  calculateInterest(): number {
    return (this.amount * this.interestRate) / 100
  }
}