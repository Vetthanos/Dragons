
    /* linka o botao de pesquisa com a pesquisa */
var input4 = document.getElementById("search-box");
var botao = document.getElementById("search-button");

function executarPesquisa() {
var jogoPesquisado = input4.value.toLowerCase();

if (jogoPesquisado === "minecraft") {
    window.location.href = "https://www.youtube.com/";
} else if (jogoPesquisado === "") {
    window.alert("Campo vazio!!");
} else if (jogoPesquisado === "call of duty") {
    window.location.href = "https://www.youtube.com/";
} else if (jogoPesquisado === "valorant") {
    window.location.href = "https://www.youtube.com/";
} else if (jogoPesquisado === "free fire") {
    window.location.href = "https://www.youtube.com/";
} else if (jogoPesquisado === "cobrinha") {
    window.location.href = "https://www.google.com/search?q=google+snake&sca_esv=569475139&ei=_kEXZb6JC7Xr1AGirI-4BQ&oq=google+&gs_lp=Egxnd3Mtd2l6LXNlcnAiB2dvb2dsZSAqAggCMgcQABiKBRhDMgcQABiKBRhDMgcQABiKBRhDMgcQABiKBRhDMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgcQABiKBRhDMgcQABiKBRhDMggQABiABBixA0ieJVDWDFi4FHACeACQAQGYAb0BoAGcBaoBAzAuNLgBAcgBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRiwAxhDwgIOEAAY5AIY1gQYsAPYAQHCAhAQLhiKBRjIAxiwAxhD2AECwgITEC4YigUYsQMYgwEYxwEY0QMYQ-IDBBgAIEGIBgGQBhO6BgYIARABGAm6BgYIAhABGAg&sclient=gws-wiz-serp";
} else {
    window.alert("Nome de jogo não encontrado!!!");
}
}

botao.addEventListener("click", executarPesquisa);

const sugestoes = [
"Cobrinha",
"free fire",
"Super Mario",
"OneShot",
"Call of Duty",
"Valorant",
"Minecraft"
];

const searchInput = document.getElementById("search-box");
const suggestionsList = document.getElementById("suggestion-list");

// Evento de digitação no campo de pesquisa
searchInput.addEventListener("input", function () {
const inputValue = searchInput.value.toLowerCase(); // Converte o texto digitado para minúsculas
suggestionsList.innerHTML = ""; // Limpa a lista de sugestões

// Verificar se o campo está vazio
if (inputValue.trim() === "") {
    suggestionsList.style.display = "none"; // Oculta a lista se o campo estiver vazio
    return; // Sai da função se o campo estiver vazio
}

// Filtrar sugestões que contenham o texto digitado em minúsculas
const sugestoesFiltradas = sugestoes.filter(sugestao =>
    sugestao.toLowerCase().includes(inputValue)
);

// Adicionar sugestões à lista
sugestoesFiltradas.forEach(sugestao => {
    const listItem = document.createElement("li"); // Cria um elemento <li>
    listItem.textContent = sugestao; // Define o texto do <li> como a sugestão
    suggestionsList.appendChild(listItem); // Adiciona o <li> à lista

    // Evento de clique em uma sugestão para preencher o campo de pesquisa
    listItem.addEventListener("click", function () {
        searchInput.value = sugestao; // Preenche o campo com a sugestão clicada
        suggestionsList.style.display = "none"; // Oculta a lista de sugestões
    });
});

// Mostrar a lista de sugestões
suggestionsList.style.display = "block"; // Exibe a lista de sugestões
});

// Evento de tecla pressionada no campo de pesquisa
searchInput.addEventListener("keydown", function (event) {
if (event.key === "Enter") { // Verifica se a tecla pressionada é "Enter"
    executarPesquisa(); // Chama a função de pesquisa
}
});


// Evento de tecla pressionada no campo de pesquisa
searchInput.addEventListener("keydown", function (event) {
if (event.key === "Tab") { // Verifica se a tecla pressionada é "Tab"
    // Preencher o campo com a sugestão mais próxima
    const sugestaoProxima = suggestionsList.querySelector("li");
    if (sugestaoProxima) {
        searchInput.value = sugestaoProxima.textContent; // Preenche o campo com a sugestão
        suggestionsList.style.display = "none"; // Oculta a lista de sugestões
        event.preventDefault(); // Impede o comportamento padrão do Tab
    }
}
});
