let url = "https://economia.awesomeapi.com.br/last/USD-BRL"



function converter() {
    let input = document.getElementById("valor");
    let valor = input.value;
    console.log(valor);


    fetch(url)
     .then((res) => {

       return res.json()

     })
     .then((data) => {
        
        let rate = data.USDBRL.high

        let resultado = `${valor} Dolares = ${rate * valor} Reais`
        document.getElementById("resultado").innerHTML = resultado;

     })

}