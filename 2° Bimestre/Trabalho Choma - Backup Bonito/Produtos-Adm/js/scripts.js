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


var nProdutos;

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtém os valores dos campos do formulário
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;
    
    // Cria um novo objeto de produto
    var produto = {
        nome: productName,
        preco: productPrice,
        descricao: productDescription
    };

    // Adiciona o produto ao Local Storage
    var produtosExistenteStr = localStorage.getItem('produtos');
    var produtosExistente = produtosExistenteStr ? JSON.parse(produtosExistenteStr) : [];
    produtosExistente.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtosExistente));

    // Exibe uma mensagem para o usuário
    alert("Produto criado com sucesso!");

    // Limpa os campos do formulário
    document.getElementById('productForm').reset();

    // Atualiza a lista de produtos exibida na página
    carregarProdutos();
});

// Função para remover um produto
function removerProduto(index) {
    var produtosExistenteStr = localStorage.getItem('produtos');
    var produtosExistente = produtosExistenteStr ? JSON.parse(produtosExistenteStr) : [];

    // Remove o produto correspondente do array
    produtosExistente.splice(index, 1);

    // Atualiza a lista de produtos no Local Storage
    localStorage.setItem('produtos', JSON.stringify(produtosExistente));

    // Atualiza a lista de produtos exibida na página
    carregarProdutos();
}

// Função para carregar e exibir os produtos do Local Storage
function carregarProdutos() {
    var produtosExistenteStr = localStorage.getItem('produtos');
    var produtosExistente = produtosExistenteStr ? JSON.parse(produtosExistenteStr) : [];

    var productCatalog = document.getElementById('productCatalog');
    productCatalog.innerHTML = ''; // Limpa qualquer conteúdo anterior

    // Exibe cada produto na interface do usuário
    produtosExistente.forEach(function(produto, index) {
        var produtoItem = document.createElement('li');
        produtoItem.classList.add('list-group-item');
        produtoItem.innerHTML = `
            <p><strong>Nome:</strong> ${produto.nome}</p>
            <p><strong>Preço:</strong> ${produto.preco}</p>
            <p><strong>Descrição:</strong> ${produto.descricao}</p>
            <button class="btn btn-danger" onclick="removerProduto(${index})">Remover</button>
        `;
        productCatalog.appendChild(produtoItem);
    });
}

// Carrega e exibe os produtos ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    carregarProdutos();
});



    
