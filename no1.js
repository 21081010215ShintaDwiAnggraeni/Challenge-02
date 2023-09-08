function changeWord (selectedText, changedText, text){
    const result = text.replace(new RegExp(selectedText, 'g'), changedText);
    return result;
//  return text.replace (selectedText,changedText);
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

const hasilKalimat1 = changeWord('mencintai', 'membenci', kalimat1)
const hasilKalimat2 = changeWord('bromo', 'semeru', kalimat2)

console.log(changeWord('mencintai','membenci',kalimat1))
console.log(changeWord('bromo','semeru',kalimat2))

