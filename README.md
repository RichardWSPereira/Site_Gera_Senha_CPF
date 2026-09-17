# Gerador de Senha e CPF

Este projeto é um site estático em JavaScript que reúne duas ferramentas úteis para geração de dados fictícios e segurança digital:

- Gerador de senhas personalizadas
- Gerador de CPF válido para fins de estudo e testes

O objetivo é demonstrar o uso de JavaScript puro, manipulação do DOM, módulos ES6 e empacotamento com Webpack, além de criar uma interface simples e funcional para uso direto no navegador.

---

## Visão geral

O site possui uma página inicial com navegação para duas áreas:

1. Gerador de CPF
2. Gerador de Senha

A navegação acontece dinamicamente, carregando pequenos trechos HTML de arquivos dentro da pasta `public` sem recarregar a página inteira. Isso foi implementado com JavaScript e a biblioteca `axios` para fazer requisições assíncronas.

---

## Funcionalidades

### Gerador de CPF
- Gera CPFs válidos conforme a regra de cálculo do documento
- Permite escolher o estado para definir o primeiro dígito
- Possibilidade de formatar a saída com pontuação
- Resultado exibido diretamente na interface

### Gerador de senha
- Define quantidade de caracteres
- Escolhe se a senha incluir:
  - letras maiúsculas
  - letras minúsculas
  - números
  - símbolos
- Gera senha aleatória de acordo com as opções marcadas

---

## Estrutura do projeto

```text
Site_Gera_Senha_CPF/
├── index.html
├── package.json
├── webpack.config.js
├── public/
│   ├── indexCPF.html
│   ├── indexSenha.html
│   └── assets/
│       └── js/
│           └── bundle.js
├── src/
│   ├── main.js
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── img/
│   └── modules/
│       ├── formGeraSenha.js
│       ├── geraCPF.js
│       ├── geradores.js
│       └── validaCPF.js
└── README.md
```

### Descrição dos arquivos principais

- `index.html`: página principal com menu de navegação e área de resultado
- `public/indexCPF.html`: estrutura da tela de gerador de CPF
- `public/indexSenha.html`: estrutura da tela de gerador de senha
- `src/main.js`: ponto de entrada principal da aplicação
- `src/modules/geraCPF.js`: lógica de geração do CPF
- `src/modules/validaCPF.js`: cálculo dos dígitos verificadores
- `src/modules/geradores.js`: lógica para gerar senha aleatória
- `src/modules/formGeraSenha.js`: conectividade dos elementos da tela de senha
- `webpack.config.js`: configuração do empacotamento do projeto

---

## Como o código funciona

### 1. Inicialização da aplicação
O arquivo `src/main.js` importa:

- o módulo de senha
- o módulo de CPF
- o CSS principal

Também escuta eventos de clique na página para identificar quando o usuário clica em links ou botões.

### 2. Navegação dinâmica
Ao clicar em um link como "Gerador de CPF" ou "Gerador de Senha", a aplicação usa `axios` para carregar o HTML correspondente de dentro da pasta `public`.

Esses arquivos contêm partes reutilizáveis da interface, que são inseridas na div `.resultado` da página principal.

### 3. Geração de senha
O módulo `geradores.js` cria funções que geram:

- letras maiúsculas
- letras minúsculas
- números
- símbolos

Depois, seleciona aleatoriamente entre as opções ativas e monta a senha final.

### 4. Geração de CPF
O módulo `geraCPF.js`:

- gera 8 dígitos aleatórios
- adiciona o dígito referente ao estado escolhido
- chama `validaCPF.geraDigito()` para calcular os dígitos verificadores
- retorna o CPF completo

A validação dos dígitos é feita em `validaCPF.js`, seguindo a lógica tradicional do CPF.

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Webpack
- Babel
- Axios
- Core-js

---

## Pré-requisitos

Antes de rodar o projeto localmente, certifique-se de ter instalado:

- Node.js
- npm

---

## Como executar localmente

1. Clone o repositório
2. Acesse a pasta do projeto
3. Instale as dependências:

```bash
npm install
```

4. Inicie o webpack em modo de desenvolvimento:

```bash
npm run dev
```

Isso irá compilar os arquivos do projeto e acompanhar alterações automaticamente.

5. Abra o arquivo `index.html` no navegador para usar a aplicação.

---

## Observações importantes

- O projeto foi desenvolvido para fins de estudo e demonstração.
- Os CPFs gerados são válidos apenas no contexto de testes, treinamento e simulação.
- A lógica de senha e CPF pode ser expandida para integrar validações mais robustas em projetos maiores.

---
