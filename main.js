function convertCurrency() {
    let from = document.getElementById("currencyFrom").value;
    let to = document.getElementById("currencyTo").value;
    let fromAmount = document.getElementById("currencyFromValue").value;
    let toAmount = document.getElementById("currencyToValue");

    const convUrl = `https://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=ultra`;
    //  const twoWay = `https://www.currencyconverterapi.com/api/v5/convert?q=${from}_${to},${to}_${from}&compact=ultra`;

    fetch(convUrl).then(response =>  response.json())
		.then(rates => {
        const compact = Math.round(Object.values(rates) * 100) / 100;
        const con = Math.round((fromAmount * compact) * 100) / 100;
        toAmount.value = con;
    }).catch(err => console.log(err));

}

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js');
};
