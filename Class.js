class BankAccount {
    customerName;
    accountNumber 
    balance ;

    constructor(customerName,balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount){
        this.balance +=amount;
    }
    withdraw(amount){
        this.balance -= amount;
    }
}
const amitaAccount = new BankAccount('Amita', 1000)
console.log(amitaAccount);
amitaAccount.deposit(500);
console.log(amitaAccount);