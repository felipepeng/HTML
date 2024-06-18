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

// Recupera os produtos do Local Storage
var produtosExistenteStr = localStorage.getItem('produtos');
var produtosExistente = produtosExistenteStr ? JSON.parse(produtosExistenteStr) : [];

// Exibe os produtos na lista
var productList = document.getElementById('productList');
produtosExistente.forEach(function(produto, index) {
    var productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <h3>${produto.nome}</h3>
        <p><strong>Descrição:</strong> ${produto.descricao}</p>
        <p><strong>Preço:</strong> R$ ${produto.preco}</p>
        <button onclick="adicionarAoCarrinho(${index})">Adicionar ao Carrinho</button>
    `;
    productList.appendChild(productItem);
});

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(index) {
    increment();
    var produtosNoCarrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : [];
    produtosNoCarrinho.push(produtosExistente[index]);
    localStorage.setItem('carrinho', JSON.stringify(produtosNoCarrinho));
}
    
