import geraCPF from './modules/geraCPF.js'

import './assets/css/style.css';

(function(){
    const clickGerar = document.querySelector('.clickGerar');
    
    clickGerar.addEventListener('click', () => {
        gera();
    });    
})();

function gera() {
    const gera = new geraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');

    cpfGerado.innerText = chekboxFormatar(gera);
};

function formatado(cpf) {
    return (
        cpf.slice(0, 3) + '.' +
        cpf.slice(3, 6) + '.' +
        cpf.slice(6, 9) + '-' +
        cpf.slice(9, 11)
    );
};

function chekboxFormatar(gera) {
    const marcacao = document.querySelector('.formatado');
    const cpfLimpo = gera.geraNovoCPF();

    if (marcacao.checked) {
        return formatado(cpfLimpo);
    }
    
    return cpfLimpo;
}
