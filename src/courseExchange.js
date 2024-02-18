const BtcUAH = 2378;
const EthEur = 587;
const EurUAH = 340;


const course = {
    "BTC" : {
        "UAH": BtcUAH
    },
    "ETH": {
        "EUR": EthEur
    },

    "EUR": {
        "UAH": EurUAH
    }
}


function getCourse(gavedCuurency,receivedCurrency){
    let directCurrency = checkCurrency(gavedCuurency,receivedCurrency)
    let viseVersaCurrency = checkCurrency(receivedCurrency,gavedCuurency)

    if (directCurrency) {
        return course[gavedCuurency][receivedCurrency];
    }
    else if (viseVersaCurrency) {
        return 1 / course[receivedCurrency][gavedCuurency];
    }

    else {
        return;
    }
}


function checkCurrency (gavedCuurency,receivedCurrency) {
    let currency = course [gavedCuurency];

    if(currency) {
        return Object.hasOwn(currency, receivedCurrency)
    }
}


export {
    getCourse,
}
