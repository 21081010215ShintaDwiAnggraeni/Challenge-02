function checkTypeNumber(givenNumber){
    if (typeof givenNumber === 'undefined'){
      return 'Eror: Bro where is the number?'
    }
    if (typeof givenNumber !== 'number') {
        return 'Eror: Invalid data type';
      }
          
      if (givenNumber % 2 === 0) {
        return 'GENAP';
      } else {
        return 'GANJIL';
      }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3")) //string
console.log(checkTypeNumber({})) //objek
console.log(checkTypeNumber([])) //array
console.log(checkTypeNumber()) //return