// Do the below programs in anonymous function & IIFE

// Print odd numbers in an array

let a=[2,3,4,5,6,7]

let odds=function(a){
  let temp=[]
  for(let i=0; i<a.length; i++){
    if(a[i]%2!==0) temp.push(a[i])
  }
  return temp
}

console.log(odds(a))
// Convert all the strings to title caps in a string array

let s = ["jayanth","vishwas","guvi"]

let caps = function(s){
  for(let i=0; i< s.length; i++){
    s[i] = s[i][0].toUpperCase() + s[i].slice(1)
  }
  return s
}

console.log(caps(s))

// Sum of all numbers in an array
 a = [1,2,3,4,5]

let sum = function(a){
  let tot=0
  for(let i=0; i<a.length; i++){
    tot+= a[i]
  }
  return tot
}

console.log(sum(a))

// Return all the prime numbers in an array

a = [1,2,3,4,5,6,7,8]

let primes = function(a){
  let temp =[]

  for(let i=0; i<a.length; i++){
    let isPrime=true
    let n = a[i]
    if(n>1){
      for(let j=2; j<n;j++){
        if(n%j===0) {
          isPrime=false
          break
        }
      }
    }
    if(isPrime && n!==1) temp.push(n)
  }
  return temp
}
console.log(primes(a))
// Return all the palindromes in an array

a=[313,29,292,111,10]

let palindromes = function(a){
  let pal=[]
  for(let i=0; i<a.length; i++){
    let n= a[i]
    let temp=n,rem,final=0
    while(n>0){
      rem=n%10
      n =  parseInt(n/10)
      final = final*10 + rem
    }
    if(temp ===final) pal.push(temp)

  }
  return pal
}

console.log(palindromes(a))

// Return median of two sorted arrays of same size
let p =[1,2,3,4]
let q= [5,6,7,8]

let median= function(p,q){
  let l = p.length
  return [p[l-1],q[0]]
}
console.log(median(p,q))

// Remove duplicates from an array
a= [1,1,2,3,4,55,55,9]

let duplicates= function(a){
  let map ={}
  for(let i=0; i<a.length; i++){
    if(map[a[i]]) map[a[i]]++
    else map[a[i]]=1
  }
  let temp=[]
  for(key in map){
    if(map[key]===1) temp.push(+key)
  }

  console.log(temp)
}

duplicates(a)

// Rotate an array by k times and return the rotated array
a = [1,2,3,4,5,6,7,8]

let rotate = function(a, count){
  for(let i=0; i<count; i++){
    a.push(a.shift())
  }
  console.log(a)
}

rotate([1,2,3,4,5,6,7,8],1)
rotate([1,2,3,4,5,6,7,8],2)
