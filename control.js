let tela = document.getElementById("tela");

//FORMATADOR(zero a esquerda)
function AddZero(x){
    if(x<10){
        return "0" + x
    }else{
        return x
    }
}

setInterval(function(){
    let data = new Date();

    //TEMPO(hora, minuto, segundo)
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    //DATA(dia, mes, ano)
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    console.log(dia)


    tela.innerHTML = `
        <div id="tela_hora">${AddZero(hora)}:${AddZero(minuto)}:<span>${AddZero(segundo)}</span></div>
        <div id="tela_data">${AddZero(dia)}/${AddZero(mes)}/${ano}</div>
`
},1000)


