export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // with the HasFormatter interface implemented, 
    // need to use the format method, otherwise throws error
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
