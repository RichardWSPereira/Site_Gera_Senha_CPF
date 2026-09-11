// Function que pegará o evento de clique, para saber em qual elemento será clicado
document.addEventListener('click', e => {
    const el = e.target;

    // Se o evento de clique for uma âncora, com a condição aplicaremos a ação de carregar a respectiva página relacionada àquela âncora
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})


// Em Fetch API não precisamos dessa função request para chamar um Promise, pois o fetch já tem uma promise Por isso precisamos do then

async function carregaPagina(el) {
    // A âncora que foi filtrada do evento com a condição anterior, agora vai ser extraido o endereço do link
    const href = el.getAttribute('href');


    // Podemos tratar o erro com try
    try {
        // O parâmetro usado no then vira a constante e o await acompanhada a função com o promise embutido
        // O Axios já faz a requisição e traz o resultado pronto
        const response = await axios(href);

        // O conteúdo HTML vem direto dentro de response.data
        const html = response.data;
        carregaResultado(html)
        
    } catch (e) {
        // O Axios cai aqui automaticamente se o status não for 2xx (ex: 404)
        console.log(e)
    }
}

function carregaResultado(response) {
    // Extraimos a div que vai conter o conteudo através de sua class
    const resultado = document.querySelector('.resultado');

    // Pega o conteudo do link que o evento pegou e atribui a div
    resultado.innerHTML = response;
}