class bank{
  this.code
  this.address

  bankAtm = new atm()
  bankCust = new customer()
  bankAccount = new account()
  manages(){}
  maintains(){}
}

class atm{
  this.location
  this.managedly

  identifies(){}
  transactions(){}
}

class customer{
  this.name
  this.address
  this.dob
  this.cardnum
  this.pin
  bankAtm = new atm()
  bankAccount = new account()

  verifyPassword(){}
}

class account{
  this.number
  this.balance
  deposit(){}
  withdraw(){}
  createTransactions(){}
}

class atmTransactions{
  this.transacID
  this.date
  this.type
  this.amount
  this.postbalance

  bankAccount = new account()
  modifies(){}
}

class cuurentAccount extends account{
  this.accountNo

  withdraw(){}
}

class savingsAccount extends account{
  this.accountNo
}
