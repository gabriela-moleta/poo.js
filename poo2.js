const pessoa = {
    primeiroNome: "Gabriela",
    sobreNome: "Moleta",
    idade: 16,
    corOlho: "Castanho",
    altura: 160,
    dataNascimento: "02/05/2008",
    usaOculos: false,
    corPele: "Branco",
    corFavorita: "Rosa",
    sexo: "Feminino",
};

//Primeira frase
console.log("A " + pessoa.primeiroNome +  " " + pessoa.sobreNome+ " tem " + pessoa.idade + " anos!");

//Alterar um objeto
pessoa.sobrenome = "Gabi";
console.log("2 - A " + pessoa.primeiroNome + " " + pessoa.sobrenome + "");

