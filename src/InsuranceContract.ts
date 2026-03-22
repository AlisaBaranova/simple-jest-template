import { BaseContract } from './BaseContract'

export class InsuranceContract extends BaseContract {
  insuranceType: string
  premium: number
  termYears: number

  constructor(contractId: string, clientName: string, isActive: boolean, insuranceType: string, premium: number, termYears: number,) {
    super(contractId, clientName, isActive)
    this.insuranceType = insuranceType
    this.premium = premium
    this.termYears = termYears
  }
  calculateTotalPremium(): number {
    return this.premium * this.termYears
  }
}