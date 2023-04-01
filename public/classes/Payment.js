export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // with the HasFormatter interface implemented, 
    // need to use the format method, otherwise throws error
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
