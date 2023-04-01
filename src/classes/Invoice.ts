import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {}
  
  // with the HasFormatter interface implemented, 
  // need to use the format method, otherwise throws error
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}