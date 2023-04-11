console.log("Welcome to the Assignment 5");

console.log('*--------------------------------------------------------------------------------------------*');
console.group('*------------------------------------- The Start ... -------------------------------------*');

console.group(`Assignment 5 : Task_01 Code Block...\nWrite a function that takes an array of numbers as input and returns the sum of all even numbers in the array :`);
{
    function extractTheSumOfAllEvenNumbers(array) {
        const evenNumbersArray = array.filter(
            (value, index, array) => {
                const evenNumbers = value % 2 == 0;
                return evenNumbers;
            }
        );
        console.log(evenNumbersArray);
        return evenNumbersArray.reduce(
            (previousValue, currentValue) => {
                return previousValue + currentValue;
            }
        )
    }

    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sumOfEvenNumbersInNumbersArray = extractTheSumOfAllEvenNumbers(numbersArray);
    console.log(`The sum of all the even numbers present in the numbersArray :\n ${sumOfEvenNumbersInNumbersArray}`);

}
console.groupEnd();

console.log('*--------------------------------------------------------------------------------------------*');

console.group(`Assignment 5 : Task_02 Code Block...\nWrite a function that takes a string as input and returns the number of vowels in the string :`);
{
    function getTheNumbersOfVowels(string) {
        let vowelString = '';
        for (let index = 0; index < string.length; index++) {
            const element = string[index];

            if (element == 'a') {
                vowelString += element;
            } else if (element == 'e') {
                vowelString += element;
            } else if (element == 'i') {
                vowelString += element;
            } else if (element == 'o') {
                vowelString += element;
            } else if (element == 'u') {
                vowelString += element;
            }
            else {
                console.log(vowelString);
            }
        }
        console.log(vowelString.length);
        return vowelString.length;
    }

    const string = "talk is cheap show me the code";

    const NumbersOfVowels = getTheNumbersOfVowels(string);
    console.log(`The number of Vowels present in the string :\n ${NumbersOfVowels}`);
}
console.groupEnd();

console.log('*--------------------------------------------------------------------------------------------*');

console.group(`Assignment 5 : Task_03 Code Block...\nWrite a function that takes an array of strings as input and returns the length of the longest string in the array :`);
{
    function getTheLongestStringLen(array) {
        const sortedArray = array.sort(
            (a, b) => {
                return a.length - b.length;
            }
        )
        console.log(sortedArray);
        return sortedArray[sortedArray.length - 1].length;
    }
    const stringsArray = Array("one", "two", "three", "four", "five");
    const LongestStringLen = getTheLongestStringLen(stringsArray)
    console.log(`The length of the longest string in stringsArray :\n ${LongestStringLen}`);

}
console.groupEnd();

console.log('*--------------------------------------------------------------------------------------------*');

console.group(`Assignment 5 : Task_04 Code Block...\nWrite a function that takes an array of numbers as input and returns the average of all the numbers in the array :`);
{
    const avg_function = (array) => {
        const reducedArray = array.reduce(
            (previousValue, currentValue) => {
                return (previousValue + currentValue);
            }
        )
        return reducedArray / 2;
    }
    const numbersArray = [1, 2, 3, 4];
    const numbersArray_avg = avg_function(numbersArray);
    console.log(`The average of all the numbers present in the numbersArray :\n ${numbersArray_avg}`);

}
console.groupEnd();

console.log('*--------------------------------------------------------------------------------------------*');

console.group(`Assignment 5 : Task_05 Code Block..\nWrite a function that takes an object as input and returns an array of all the keys in the object :`);
{
    function packAllTheKeysInArray(object) {
        const KeysArray = [];
        for (const key in object) {
            KeysArray.push(key);
        }
        return KeysArray;
    }
    let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    const ArrayOfPersonKeys = packAllTheKeysInArray(person);
    console.log(`The Array of all the keys of person object :\n ${ArrayOfPersonKeys}`);

}
console.groupEnd()

console.log('*--------------------------------------------------------------------------------------------*');
console.group(`Assignment 5 : Task_06 Code Block...\nWrite a function that takes an array of objects as input and returns an array of all the values for a specified key in each object :`);
{
    function packAllTheValuesInArray(array) {
        const valuesArray = [];

        array.forEach(element => {
            for (const key in element) {
                const value = element[key];
                valuesArray.push(value);
            }
        });
        return valuesArray;
    }

    const ArrayOfObjects = [
        {
            "color": "purple",
            "type": "minivan",
            "registration": new Date('2017-01-03'),
            "capacity": 7
        },
        {
            "color": "red",
            "type": "station wagon",
            "registration": new Date('2018-03-03'),
            "capacity": 5
        },
    ]
    const ArrayOfObjectsArrayValues = packAllTheValuesInArray(ArrayOfObjects);
    console.log(`The Array of all the values of objects present in the ArrayOfObjects :\n ${ArrayOfObjectsArrayValues}`);

}
console.groupEnd()

console.log('*--------------------------------------------------------------------------------------------*');

console.group(`Assignment 5 : Task_07 Code Block... \nWrite a function that takes an array of strings as input and returns an array of all the unique strings in the array :`);
{
    const UniqueStringArray_Generator = (array) => {
        // Nested Function ...:
        /* <----------------------------------------------------------------------------------------------> */
        function UniqueString_Generator(string) {
            const string_copy = string;
            string = '';
            for (const char of string_copy) {
                if (!(string.includes(char))) {
                    string += char;
                }
            }
            // console.log(string);
            return string;
        }
        /* <----------------------------------------------------------------------------------------------> */
        const array_mutated = array.map(element => {
            return UniqueString_Generator(element);
        });
        // console.log(array_mutated);
        return array_mutated;
    }
    const cars = ["Saab", "volvo", "BMMW"];
    const uniqueStrings_cars = UniqueStringArray_Generator(cars);
    console.log(`The array of all unique strings of cars array :\n ${uniqueStrings_cars}`);
}
console.groupEnd();

console.log('*--------------------------------------------------------------------------------------------*');

console.group(`Assignment 5 : Task_08 Code Block... \nWrite a function that takes an array of numbers as input and returns the product of all the numbers in the array :`);
{
    const getTheProductOfAllElements = (array) => {
        const reducedArray = array.reduce(
            (previousValue, currentValue) => {
                return previousValue * currentValue;
            }
        )
        return reducedArray;
    }
    const numbersArray = Array(2, 4, 6, 8, 10);
    const numbersArray_product = getTheProductOfAllElements(numbersArray);
    console.log(`The product of all the numbers present in the numbersArray :\n ${numbersArray_product}`);

}
console.groupEnd()
console.groupEnd();

console.log('*------------------------------------- The End ... -------------------------------------*');
console.log('*--------------------------------------------------------------------------------------------*');
