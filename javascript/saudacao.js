//Crie um script que receba o nome e a idade como parâmetros via terminal e exiba uma saudação.

const nome = process.argv[2];
const idade = process.argv[3];

if (nome && idade) {
    console.log(`Olá ${nome}! Você tem ${idade} anos.`)
} else {
    console.log("Os dados estão errados, tente novamente!")
}