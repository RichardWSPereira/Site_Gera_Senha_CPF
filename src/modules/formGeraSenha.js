import geraSenha from './geradores';


export default () => {


    const senhaText = document.querySelector('.senha-gerada')
    const qtd = document.querySelector('.qtdSenha')
    const chkMaiusculas = document.querySelector('.chk-maiusculas')
    const chkMinusculas = document.querySelector('.chk-minusculas')
    const chkNumeros = document.querySelector('.chk-numeros')
    const chkSimbolos = document.querySelector('.chk-simbolos')
    const btnGera = document.querySelector('.btn-gera')

    // Interrompe a execução sem gerar erro, se o botão não existir 
    if (!btnGera) return;

    btnGera.addEventListener('click', e => {
        e.preventDefault(); // Evita qualquer comportamento padrão de submit/link

        senhaText.innerHTML = gera(qtd,
        chkMaiusculas,
        chkMinusculas,
        chkNumeros,
        chkSimbolos
        );
    })
}

function gera(qtd,chkMaiusculas,chkMinusculas,chkNumeros,chkSimbolos) {
    const senha = geraSenha(
        qtd ? qtd.value : 10,
        chkMaiusculas ? chkMaiusculas.checked : false,
        chkMinusculas ? chkMinusculas.checked : false,
        chkNumeros ? chkNumeros.checked : false,
        chkSimbolos ? chkSimbolos.checked : false
    );

    return senha || "Nada selecionado."
}