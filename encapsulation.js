class BankAccount {
    customerName;
    accountNumber 
   #balance ;

    constructor(customerName,balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount){
        this.#balance +=amount;
    }
    withdraw(amount){
        this.#balance -= amount;
    }
}
    class CurrentAccount extends BankAccount{
          transactionLimit = 50000;

          constructor(customerName , balance = 0){
            super(customerName , balance)
          }

          takeBusinessLoan(amount){
            console.log('Taking business loan :  +amount')
          }
          }
    const amitaAccount = new CurrentAccount('Amita' , 2000)
    amitaAccount.#balance = 5000;
    console.log(amitaAccount)