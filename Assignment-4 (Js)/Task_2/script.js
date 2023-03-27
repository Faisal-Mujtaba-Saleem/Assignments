let promptVar = prompt('Enter a nuumber');
let promptNumber = Number(promptVar);
console.log(promptVar, promptNumber);

let isOddOrEven = promptNumber % 2;
console.log(isOddOrEven);

if (isOddOrEven === 0) {
    // alert(`The num you enter is ${promptNumber} which is even`)
    alert('The num you enter is ' + promptNumber + ' which is even')
} else {
    // alert(`The num you enter is ${promptNumber} which is odd`)
    alert('The num you enter is ' + promptNumber + ' which is odd')
}
