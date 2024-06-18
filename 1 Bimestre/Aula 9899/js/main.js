/*
const pessoa = {
    nome: 'Peng',
    idade: 20,
    cidade: 'Xique-Xique Bahia',
    saudacao: function() {
        return 'Olá, meu nome é ' + this.nome + '114 !';
    }
} */

const listaDeCompras = [];

function limpar(){
    document.getElementById('item').value= "";
    document.getElementById('valor').value= "";
}

function create(){
    let item= document.getElementById('item').value;
    let valor= document.getElementById('valor').value;
    console.log(item);
    console.log(valor);

    let obj = {item, valor}
    console.log(obj);

    listaDeCompras.push(obj);
    console.log(listaDeCompras);
    
}


function read(){
    listaDeCompras.forEach((obj, indice) => {
        console.log(indice);
        console.log(obj.item);
        console.log(obj.valor);
    });
}


function update(){

}


function excluir(){

}







