export class BaseContract{
  contractId: string
  clientName: string
  isActive: boolean

  constructor(contractId: string, clientName: string, isActive: boolean) {
    this.contractId = contractId
    this.clientName = clientName
    this.isActive = isActive
  }
  activate(): void {
    this.isActive = true
  }
  deactivate(): void {
    this.isActive = false
  }
}
