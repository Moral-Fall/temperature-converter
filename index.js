function convertToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
console.log(convertToCelsius(100));

function describeTemperature(temp){
    if (temp < 0) { 
        return "Very Cold"; 
}
    else if (temp < 20) {return "cold";

    }
    else if (temp < 30) {
        return "warm";

    }
    else if (temp < 40) {
        return "hot";

    }
    else {
        return "very hot";

    }
}
console.log(describeTemperature(25));


const fahrenhiet = number(prompt ("Give me a temperature"))

const celsius = convertToCelsius(fahrenhiet)
const description = describeTemperature(fahrenhiet)

