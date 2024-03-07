//String Manipulation Functions:

//Reverse a String
function fonction(str) {
  return str.split("").reverse().join("");
}

//Count Characters
function str(x) {
  return x.length;
}
//Capitalize Words

function convetToUppercase(str){
  let newStr =""
  newStr= str[0].toUpperCase()
  for (let i=1;i<str.length;i++){
  if (str[i]===" "){newStr= newStr +" "+ str[i+1].toUpperCase()
    i++}
    else { newStr+=str[i]}
  
  }

return newStr

//Array Functions:

//Find Maximum and Minimum

function maxMin (tab){
  if (tab.length===1){return tab[0] }
let min= tab[0]
let max= tab[1]
for (let elt of tab){
  if (elt > max)
  { max= elt}
  if ( elt < min){ min= elt}
}
return {max, min}
}
//Sum of Array

function sumArray (tab) {
let sum=0
for (let i=0 ; i< tab.length ; i++){ sum+= tab[i]}
return sum

}

//Filter Array

function filterArra(tab) {
let newArr=[]
for( let elt of tab){if (elt %2 ===0){ newArr.push(elt)}

}
return newArr
}


//Mathematical Functions:

//Factorial

function fact(nbr) {
  if (nbr === 0) {
    return 1;
  } else {
    return nbr * fact(nbr - 1)
  }
}
//Prime Number Check

function nbrPremier(nbr) {
  for (let i = 2; i < nbr; i++) if (nbr % i === 0)
   return false 
  else { return nbr > 1}
}
//Fibonacci Sequence

function Fibonacci (n) {
    if (n===0) return [0]
    let result =[0,1]
    for (let i=2 ;i<n ; i++){result.push(result[i-1] + result[i-2])
    }
    return result

}