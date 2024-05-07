function log(){
    console.log("Mensagem no log :D");
    console.log("Operação no log" + 3+5);
}

function alerta(){
    window.alert("Mensagem do popup :D");
}


function inner(){
    document.getElementById('saida').innerHTML="Texto via innerHTML";

}

function mudarCor(){
    document.getElementById('saida').style.color="#00aadd";
}

function log2(){
    let a,b;
    a=2;
    b=3;

    console.log("Soma: "+ (a+b));
    console.log("Subtração: "+ (a-b));
    console.log("Multiplicação: "+ (a*b));
    console.log("Divisão: "+ (a/b));
    
}