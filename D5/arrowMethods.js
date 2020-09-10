// Do the below programs in arrow functions
// Print odd numbers in an array

let a=[2,3,4,5,6,7]

const odd = a.filter((x)=> {
  return x%2!==0
})

// Convert all the strings to title caps in a string array
let s = ["jayanth", "vishwas", "guvi"]
const caps = s.map( (x) => {
  return x[0].toUpperCase() + x.slice(1)
})

// Sum of all numbers in an array
a=[2,3,4,5,6,7]

const sum = a.reduce((total,x)=> total+x,0)

// Return all the prime numbers in an array
a=[1,2,3,4,5,6,7]

const primes = a.filter((x)=>{
  let isPrime=true
  for(let i=2; i<x; i++){
    if(x%i===0){
      isPrime=false
    }
  }
  if(isPrime && x!==1) return x

})

// Return all the palindromes in an array
a=[121,123,234,232,111,101]

const palindromes = a.filter((x)=>{
  let temp=x
  let rem,final=0
  while(x>0){
    rem=x%10
    x = parseInt(x/10)
    final= final*10 + rem
  }
  if(temp===final) return temp
})
