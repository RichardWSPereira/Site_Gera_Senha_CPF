// superclasse ou classe mãe
export default class validaCPF {
    constructor(cpfEnviado) {
        // Usamos o defineProperty para configurar
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: cpfEnviado
        })
    }

    // Como em nenhum momento chamado por this, assim, não utiliza da instância na função. Podemos torná-la estática
    static geraDigito(cpfSemDigito) {
        const cpfArray = Array.from(cpfSemDigito); // transformando os 9 primeiros dígitos em um array para a manipulação dos dígitos para o cálculo

        let regressivo = cpfArray.length + 1; // Será usado o total de dígitos regressivamente 

        const total = cpfArray.reduce((ac, val) => {
            ac += (Number(val) * regressivo);
            regressivo--;
            return ac;
        }, 0); // Usa-se o reduce para criar um sequencia regressiva até a quantidade do array. Assim pode-se extrair o total da regressão multiplicada pelo respectivo elemento do array com os digitos do cpf

        const digito = 11 - (total % 11); // Este total será usado na regra de validação do decimo primeiro e segundo digito do CPF

        return digito > 9 ? '0' : String(digito); //Expressão ternaria para seguir a regra de validação, se o digito depois do calculo da regra for maior que 9, o proximo digito do CPF terá que ser zero.
    }
}

