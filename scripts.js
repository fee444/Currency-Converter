const convertButton = document.querySelector(".convert-button")
const selectConvert = document.querySelector(".options-convert")




const convertCurrency = async (event) => {
    const inputValue = document.querySelector(".input-value").value
    const enteredValue = document.querySelector(".currency-value-to-convert")
    const valueConverted = document.querySelector(".currency-value")
    const dataBase = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,CNY-BRL,GBP-BRL").then(response => response.json())
    const dolar = dataBase.USDBRL.high
    const euro = dataBase.EURBRL.high
    const libra = dataBase.GBPBRL.high
    const yuan = dataBase.CNYBRL.high
    console.log(dataBase)
    if (selectConvert.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputValue / dolar)
    }
    if (selectConvert.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputValue / euro)
    }

    if (selectConvert.value == "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputValue / libra)

    }

    if (selectConvert.value == "china") {
        valueConverted.innerHTML = new Intl.NumberFormat('zh-CN', {
            style: 'currency',
            currency: 'CNY',
        }).format(inputValue / yuan)

    }


    enteredValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
    }).format(inputValue)

}



const changeSelect = (event) => {  //função que verifica a troca do select
    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (selectConvert.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.svg"

    }

    if (selectConvert.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "assets/euro.svg"

    }

    if (selectConvert.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.svg"

    }

    if (selectConvert.value == "china") {
        currencyName.innerHTML = "Yuan"
        currencyImage.width = 52
        currencyImage.height = 52
        currencyImage.src = "./assets/china.png"

    }



    convertCurrency()

}

selectConvert.addEventListener("change", changeSelect)
convertButton.addEventListener("click", convertCurrency)