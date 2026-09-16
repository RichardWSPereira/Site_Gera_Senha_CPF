import 'core-js/stable';
import 'regenerator-runtime/runtime'

import formGeraSenha from './modules/formGeraSenha';
import geraCPF from './modules/geraCPF'

import './assets/css/style.css';

// Delegação global para navegação AJAX
// Function que pegará o evento de clique, para saber em qual elemento será clicado
document.addEventListener('click', async e => {
    const el = e.target;

    // Se o evento de clique for uma âncora, com a condição aplicaremos a ação de carregar a respectiva página relacionada àquela âncora
    const tag = el.tagName.toLowerCase();

    // Intercepta links para carregar páginas via Axios
    if (tag === 'a' && el.getAttribute('href')) {
        e.preventDefault();
        await carregaPagina(el.getAttribute('href'));
    }

    // Intercepta o clique no botão de gerar CPF (se ele existir na tela)
    if (el.classList.contains('clickGerar')) {
        geradorCPF();
    }
})

async function carregaPagina(href) {

    // Podemos tratar o erro com try
    try {
        // O parâmetro usado no then vira a constante e o await acompanhada a função com o promise embutido
        // O Axios já faz a requisição e traz o resultado pronto
        const response = await axios(href);

        // O conteúdo HTML vem direto dentro de response.data
        carregaResultado(response.data)

        // Se a função do gerador de senha precisar registrar eventos nos novos elementos, chame-a aqui, após o HTML ser inserido na DOM:
        formGeraSenha();

    } catch (e) {
        // O Axios cai aqui automaticamente se o status não for 2xx (ex: 404)
        console.error(e)
    }
}

function carregaResultado(html) {
    // Extraimos a div que vai conter o conteudo através de sua class
    const resultado = document.querySelector('.resultado');

    // Pega o conteudo do link que o evento pegou e atribui a div
    if (resultado) resultado.innerHTML = html;
}



function geradorCPF() {
    const gera = new geraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');

    if (cpfGerado) {
        cpfGerado.innerText = chekboxFormatar(gera);
    }
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

    if (marcacao && marcacao.checked) {
        return formatado(cpfLimpo);
    }

    return cpfLimpo;
}

