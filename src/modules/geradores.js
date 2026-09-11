// random vai gerar numeros aleatorios de acordo com o range que a tabela ASCII determina que são os caracteres
const rand = (min,max) => Math.floor(Math.random() * (max -min) + min);

// function onde de acordo com o range da tabela ASCII determinará o caractere será gerado aleatoriamente
const geraMaiuscula = () => String.fromCharCode(rand(65,91))
const geraMinuscula = () => String.fromCharCode(rand(97,123))
const geraNumero = () => String.fromCharCode(rand(48,58))

// No caso dos simbolos, não tem range suscessivo na tabela, então tivemos que determinálos manualmente nesta variavel com todos
const simbolos = ",.;:/?~^]}[ºª{`+=-_)(*&¨%$#@!"
const geraSimbolo = () => simbolos[rand(0,simbolos.length)];


export default function geraSenha(qtd,maiuscula,minuscula,numero,simbolo){
    // Array onde armazenará os caracteres gerados na ordem de excução da iteraçao
    const stringArray = [];
    
    // Precisamos garantir que será enviado um número
    qtd = Number(qtd);

    // Iteração na ordem até a quantidade demandada da senha
    for(let i = 0; i < qtd; i++) {

        // Variação em curto circuito, onde só executará a função correspondente se o parâmetro for true 
        maiuscula && stringArray.push(geraMaiuscula());
        minuscula && stringArray.push(geraMinuscula());
        numero && stringArray.push(geraNumero());
        simbolo && stringArray.push(geraSimbolo());        
    }

    return stringArray.join('').slice(0,qtd);
}

