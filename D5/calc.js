//https://docs.google.com/document/d/1AB04kg6FD9UuJgfW3P9Ml_Ol9tFCNJRVT2mx4jPKK3U/edit
//write a calculator class

class calc{

  add(a,b){
    return a+b
  }

  sub(a,b){
    return a-b
  }

  mul(a,b){
    return a*b
  }
}

let calculator = new calc()
let sum = calculator.add(10,5)
let prod = calculator.mul(2,4)
