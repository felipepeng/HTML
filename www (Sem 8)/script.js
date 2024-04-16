function somar(){
    let inputA= document.getElementById('inputA').value;
    let inputB= document.getElementById('inputB').value;

    let n1=parseFloat(inputA);
    let n2=parseFloat(inputB);

    let resultado= n1+n2;
    console.log(resultado);
    document.getElementById('resultado').innerHTML="Resultado = " + resultado;

}

function subtrair(){
    let inputA= document.getElementById('inputA').value;
    let inputB= document.getElementById('inputB').value;

    let n1=parseFloat(inputA);
    let n2=parseFloat(inputB);

    let resultado= n1-n2;
    console.log(resultado);
    document.getElementById('resultado').innerHTML="Resultado = " + resultado;
}

function multiplicação(){
    let inputA= document.getElementById('inputA').value;
    let inputB= document.getElementById('inputB').value;

    let n1=parseFloat(inputA);
    let n2=parseFloat(inputB);

    let resultado= n1*n2;
    console.log(resultado);
    document.getElementById('resultado').innerHTML="Resultado = " + resultado;

}

function divisão(){
    let inputA= document.getElementById('inputA').value;
    let inputB= document.getElementById('inputB').value;

    let n1=parseFloat(inputA);
    let n2=parseFloat(inputB);

    if(n2===0){
        document.getElementById('resultado').innerHTML="Não pode.";
    }
    else{
        let resultado= n1/n2;
        console.log(resultado);
        document.getElementById('resultado').innerHTML="Resultado = " + resultado;
    }
    
}

