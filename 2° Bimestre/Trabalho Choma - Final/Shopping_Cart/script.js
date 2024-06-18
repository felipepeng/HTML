

// Função para recuperar os produtos do carrinho do Local Storage
function recuperarProdutosDoCarrinho() {
    // Obtém a string JSON de produtos do Local Storage
    var produtosCarrinhoStr = localStorage.getItem('carrinho');

    // Verifica se existem produtos salvos no Local Storage
    if (produtosCarrinhoStr) {
        // Converte a string JSON de volta para um array de objetos JavaScript
        var produtosCarrinho = JSON.parse(produtosCarrinhoStr);
        
        // Retorna o array de produtos do carrinho
        return produtosCarrinho;
    } else {
        // Se não houver produtos salvos, retorna um array vazio
        return [];
    }
}

// Função para popular os itens do carrinho na página HTML
function popularItensDoCarrinho() {
    // Recupera os produtos do carrinho do Local Storage
    var produtosCarrinho = recuperarProdutosDoCarrinho();

    // Seleciona o elemento HTML onde os itens do carrinho serão inseridos
    var carrinhoElement = document.querySelector('.items');

    // Limpa o conteúdo anterior do carrinho
    carrinhoElement.innerHTML = '';

    // Cria um objeto para agrupar os produtos pelo nome
    var produtosAgrupados = {};

    let total = 0;

    // Agrupa os produtos pelo nome
    produtosCarrinho.forEach(function(produto) {
        if (!produtosAgrupados[produto.nome]) {
            produtosAgrupados[produto.nome] = produto;
        } else {
            produtosAgrupados[produto.nome].quantidade += produto.quantidade;
        }
        // Incrementa o total com o preço do produto
        total += produto.preco * produto.quantidade;
    });

    // Itera sobre os produtos agrupados e os adiciona à página HTML
    Object.values(produtosAgrupados).forEach(function(produto) {
        // Cria o elemento HTML para o produto
        var productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <div class="row">
                <div class="col-md-5 product-name">
                    <div class="product-name">
                        <a href="#">${produto.nome}</a>
                        <div class="product-info">
                            <div>Descrição:
                                <h6>${produto.descricao}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 quantity">
                    <label for="quantity">Quantidade:</label>
                    <h6> ${produto.quantidade} </h6>
                </div>
                <div class="col-md-3 price">
                    <span>R$ ${produto.preco * produto.quantidade}</span>
                </div>
            </div>
        `;

        // Adiciona o elemento do produto ao carrinho
        carrinhoElement.appendChild(productElement);
    });

    // Atualiza o total na página HTML
    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;

}

// Chama a função para popular os itens do carrinho ao carregar a página
popularItensDoCarrinho();

function concluir(){
    alert("Compra Concluída!!!");
}

