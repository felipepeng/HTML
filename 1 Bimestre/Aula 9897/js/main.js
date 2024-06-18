var nome = "felipe";

var numer= 123;

var vetor = [1, 2, 3, 4, 5, 6, 23232143243, 7];

var quadrado = {    //Objeto Quadrado
    largura: 10,
    altura: 8
};

var pessoa = {
      nome: "felipe",
     idade: 20,
    cidade: "xique-xique Bahia"
};

var mensagem= `oi ${pessoa.nome} de ${pessoa.cidade}`;

//acessando atributos
quadrado.altura;
quadrado.largura;

quadrado["altura"];
quadrado["largura"];

var area= quadrado.altura*quadrado.largura;
var perimetro= 2*quadrado.altura + 2*quadrado.largura;

//Apagar atributo
delete pessoa.idade;
