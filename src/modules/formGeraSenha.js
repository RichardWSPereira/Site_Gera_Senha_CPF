import geraSenha from './geradores';


const senhaText = document.querySelector('.senha-gerada')
const qtd = document.querySelector('.qtdSenha')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const btnGera = document.querySelector('.btn-gera')

export default () => {
    btnGera.addEventListener('click',() => {
        senhaText.innerHTML = gera();
    })
}

function gera() {
    const senha = geraSenha(
        qtd.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    )

    return senha || "Nada selecionado."
}