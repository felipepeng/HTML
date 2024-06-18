function increment() {
    const numberElement = document.getElementById('carrinho');
    let currentNumber = parseInt(numberElement.innerText);
    currentNumber += 1;
    numberElement.innerText = currentNumber;
}

function abrirCarrinho() {
    saveData();
    console.log("Função abrirCarrinho chamada");
    alert("Redirecionando para a página do carrinho...");

    var url = "../Shopping_Cart/index.html";

    //window.location.assign(url);
    window.open(url, '_blank');
    //window.location.href = url;
}

var qntAlface = 0;
var qntTomate = 0;
var qntCenoura = 0;
var qntPepino = 0;

function addAlf(){
    alert("Alface Adicionado :D");
    qntAlface++;
}

function addTom(){
    alert("Tomate Adicionado :D");
    qntTomate++;
}

function addCen(){
    alert("Cenoura Adicionado :D");
    qntCenoura++;
}

function addPep(){
    alert("Pepino Adicionado :D");
    qntPepino++;
}

function saveData() {
    let listaCart = [qntAlface, qntTomate, qntCenoura, qntPepino];
    localStorage.setItem('myData', JSON.stringify(listaCart));
    alert('Dados salvos com sucesso!');
}



    
