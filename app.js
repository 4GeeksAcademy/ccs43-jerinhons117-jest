// esta es mi función que suma dos números
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(fromEuroToDollar){
    // convertimos el valor a dolares
    let valueInYen = fromEuroToDollar * 127.9;
    // retornamos el valor
    return valueInYen;
}
const fromYenToPound = function(fromDollarToYen){
    // convertimos el valor a dolares
    let valueInPound = fromDollarToYen * 0.8;
    // retornamos el valor
    return valueInPound;
}
console.log(fromDollarToYen(3.5))

const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
