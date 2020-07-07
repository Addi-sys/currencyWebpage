// Link user input to js
let amountInput = document.getElementById('amount')

// Link conversion button to js
let convertButton = document.getElementById('convertButton')

// from currency selector
let fromCurrency = document.getElementById('fromCurrency')

//  to currency selecter
let toCurrency = document.getElementById('toCurrency')

// Add an event to the button when it is clicked, i.e call a funtion
convertButton.addEventListener("click", conversion)

//declare exchange rates - dictionary
const currencyRatio = {
    vnd: {
        usd: 0.000043,
        krw: 0.051,
        eur: 0.000039,
        vnd: 1
    },
    usd: {
        usd: 1,
        krw: 1193.27,
        eur: 0.9,
        vnd: 23235.5
    },
    krw: {
        usd: 0.00084,
        krw: 1,
        eur: 0.00075,
        vnd: 19.47
    },
    eur: {
        usd: 1.13,
        krw: 1349.10,
        eur: 1,
        vnd: 26176.10
    }
};
// Currency format function

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

//test functions
// let from = 'usd'
// let to = 'krw'
// let amount = 100000

// conversion function, takes input values, compares with dictionary and calculates converted value
function conversion() {

    let amount = amountInput.value
    let fCurrency = fromCurrency.value
    let tCurrency = toCurrency.value

    // Conversion
    let result = amount * currencyRatio[fCurrency][tCurrency]
    console.log("result is", result)

    // Format converted amount
    formatAmount = formatCurrency(tCurrency, result)

    // Print result
    document.getElementById("result").innerHTML = `The exchanged amount is ${formatAmount}`
}