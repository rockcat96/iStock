export const priceLoader = async({params}) => {

    const symbol = params.symbol

    const apiKey = "4b2c4f326e49a18090070031454518da"

    return (await fetch(`https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=${apiKey}`)).json()

}


