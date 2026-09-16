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

    // Array com as funções geradoras permitidas
    const opcoesDisponiveis = [];
    if (maiuscula) opcoesDisponiveis.push(geraMaiuscula);
    if (minuscula) opcoesDisponiveis.push(geraMinuscula);
    if (numero) opcoesDisponiveis.push(geraNumero);
    if (simbolo) opcoesDisponiveis.push(geraSimbolo);

    if (opcoesDisponiveis.length === 0) return '';

    // Iteração na ordem até a quantidade demandada da senha
    // Seleciona uma função aleatória para cada caractere da senha
    for (let i = 0; i < qtd; i++) {
        const funcaoSorteada = opcoesDisponiveis[rand(0, opcoesDisponiveis.length)];
        stringArray.push(funcaoSorteada());
    }

    return stringArray.join('');
}

