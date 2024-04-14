var isSquare = function(n){
  
  return Math.sqrt(n) === Math.floor(Math.sqrt(n))  ? true : false

}

console.log(isSquare(4))

// params: n    // a number
// return: boolean
// e.g. isSquare(4)
// results in true

// take sq root of n. if it triple equals Math.floor(sq root n) then return true. else return false
