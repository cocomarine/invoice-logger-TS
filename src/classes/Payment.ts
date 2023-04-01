import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ) {}
  
  // with the HasFormatter interface implemented, 
  // need to use the format method, otherwise throws error
  format() {
    return `${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}