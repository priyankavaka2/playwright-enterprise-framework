
class BankAccount{
 accountHolder:string = "Priyanka";
 balance:number = 5000

 currentbalance(){
    console.log(this.accountHolder + ' present balance : ' + this.balance)
 }

 deposit(amount:number){
this.balance = this.balance + amount
console.log(this.accountHolder + ' new balance after deposit : '  + this.balance)
 }

 withdraw(amount:number){
    if(this.balance >= amount)
    {
  this.balance = this.balance - amount
    console.log(this.accountHolder + ' withdrawn amount : ' + amount)
    }
  else
  {
    console.log("insufficient balance")
  }
    }


showbalance(){

   console.log(this .accountHolder +' balance is ' + this.balance);
    
 }
}
const bal = new BankAccount();
bal.currentbalance();
bal.deposit(3000);
bal.withdraw(5000)
bal.showbalance()
