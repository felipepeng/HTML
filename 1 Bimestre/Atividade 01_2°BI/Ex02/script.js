var debito= false;
var parcelado= false;

function fDebito(){
    debito= true;
    parcelado= false;
}

function fParc(){
    debito= false;
    parcelado= true;
}

function calcular(){
    var valor= document.getElementById('preco').value;
    var result;

    if(debito==true){
        result= valor*0.9;
    }
    else{
        result= "3x de " + (valor*1.05)/3;
    }

console.log("preco: " + valor + " debito: " + debito + " Parcelado: " + parcelado);

document.getElementById('resultado').innerHTML = "Resultado: " + result; 
}
