function op(valor){
    document.getElementById('inputA').value+=valor;

    
}



function limpar(){
    document.getElementById('inputA').value="";
}

function calcular(){
    //eval calcula a expressão matematica
    let resultado= eval(document.getElementById('inputA').value);
    document.getElementById('inputA').value=resultado;
}

