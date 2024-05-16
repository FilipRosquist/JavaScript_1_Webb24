function writeName(myName){
    console.log(myName);
    return myName;
}

writeName("Filip");

console.log("--------------------------------");

function calculateArea(width, height){
    let area = width * height;
    console.log(area);
    return area; 
}

calculateArea(5, 5)

console.log("--------------------------------");

function countSum(n1, n2){
    let sum = n1 + n2;
    console.log(sum);
    return sum;
}

countSum(5, 5)

console.log("--------------------------------");

function CelToFar(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

const celsius = 10;
const fahrenheit = CelToFar(celsius);
console.log(`${celsius}°C är lika med ${fahrenheit}°F`);

console.log("--------------------------------");

function countAreaOfCircle(radie){

    let areaCircle = Math.PI * (radie * radie);
    return areaCircle;
}

let radie = 2;
let areaCircle = countAreaOfCircle(radie);
console.log(`Arean på en cirkel med radien ${radie} är ${areaCircle}`);

console.log("--------------------------------");

function countSq(Sq1){
    let Sq = Sq1 * Sq1;
    console.log(Sq);
    return Sq;
}

countSq(10)

console.log("--------------------------------");

function countCharactersWithoutSpaces(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            count++;
        }
    }
    return count;
}

// Example usage
const text = "Hello world!";
const characterCount = countCharactersWithoutSpaces(text);
console.log(`The number of characters in the string "${text}" without spaces is ${characterCount}`);

