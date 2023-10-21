

class Bankaccount{
    // balance=0;
    // name="";

    constructor (name,balance){
        this.name=name;
        this.balance=balance;

    }

    CheckBalance= function (){

        if(this.balance==0 ){
            console.log("you don't have money");
        } else{
            console.log(`Account balance for ${this.name} s : Rs:${this.balance}  `);
        }
    }

    deposite =function (money){

        if(money < 0 ){
            console.log("Invalid deposite amount . Please enter positive amount . ");
            return;
        } else{
            this.balance += money;
            console.log(`deposited Rs : ${money} . New balance : ${this.balance}`);
        }
        
    }

    withdraw = function(money){
        if(money < 0){
            console.log("Invalid deposite amount . Please enter positive amount . ");
            return;
        } else if(money > this.balance){
            console.log(`Insufficient funds for withdraw .your balance : ${this.balance} but you went to withdraw ${money}` );
            return;
        } else{
            this.balance-=money;
            console.log(`Withdraw Rs. ${money} . Your balance : Rs.${this.balance}.`)
        }
    }


}

let sujit = new Bankaccount("sujit", 1000);
sujit.CheckBalance();
sujit.deposite(500);
sujit.deposite(-50);
sujit.withdraw(200);
sujit.withdraw(1500);
sujit.withdraw(-39);
sujit.CheckBalance();
