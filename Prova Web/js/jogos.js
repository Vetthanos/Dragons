const carrossel = document.getElementById("carrossel");
const imagens = document.getElementById("imagens");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 350;
    imagens.style.transform = `translateX(${offset}px)`;
}

// Iniciar o carrossel automaticamente
setInterval(nextSlide, 5000); // Trocar a cada 3 segundos (3000 milissegundos)

// Adicione um evento de clique ao botão
document.getElementById("comp-button").addEventListener("click", function () {
    // Use a função window.location.href para redirecionar para outra página
    window.location.href = "card.html";
});

// Função para trocar as imagens automaticamente
function trocarImagens() {
    const container = document.querySelector(".carousel-container");
    const items = document.querySelectorAll(".carousel-item");
    const firstItem = items[0];
    container.appendChild(firstItem.cloneNode(true)); // Clona o primeiro item
    container.style.transition = "none";
    setTimeout(() => {
        firstItem.remove(); // Remove o primeiro item original
    }, 1000);
}

// Troca as imagens a cada 5 segundos
setInterval(trocarImagens, 3000);

/* linka o botao de pesquisa com a pesquisa */
var input4 = document.getElementById("search-box");
var botao = document.getElementById("search-button");

function executarPesquisa() {
    var jogoPesquisado = input4.value.toLowerCase();

    console.log(jogoPesquisado);

    if (jogoPesquisado === "minecraft") {
        window.location.href = "minecraft.html";
    } else if (jogoPesquisado === "") {
        window.alert("Campo vazio!!");
    } else if (jogoPesquisado === "soul knight") {
        window.location.href = "soul knight.html";
    } else if (jogoPesquisado === "valorant") {
        window.location.href = "valorant.html";
    } else if (jogoPesquisado === "undertale") {
        window.location.href = "undertale.html";
    } else if (jogoPesquisado === "cobrinha") {
        window.location.href = "cobrinha.html";
    } else if (jogoPesquisado === "oneshot") {
        window.location.href = "oneshot.html";
    } else if (jogoPesquisado === "terraria") {
        window.location.href = "terraria.html";
    } else if (jogoPesquisado === "cod") {
        window.location.href = "CoD.html";
    } else if (jogoPesquisado === "ghost of tsushima") {
        window.location.href = "ghostoftsushima.html";
    } else if (jogoPesquisado === "god") {
        window.location.href = "godofwar.html";
    } else if (jogoPesquisado === "gta") {
        window.location.href = "gtaV.html";
    } else if (jogoPesquisado === "mk") {
        window.location.href = "mortalcombat.html";
    } else if (jogoPesquisado === "mortalkombat") {
        window.location.href = "mortalcombat.html";
    } else {
        // window.alert("Nome de jogo não encontrado!!!");
    }
}

botao.addEventListener("click", executarPesquisa);

const sugestoes = [
    "Cobrinha",
    "Terraria",
    "Undertale",
    "OneShot",
    "cod",
    "Valorant",
    "Minecraft",
    "Soul Knight",
    "Ghost of Tsushima",
    "GoD",
    "GTA",
    "MK",
    "MortalKombat",
];

const searchInput = document.getElementById("search-box");
const suggestionsList = document.getElementById("suggestion-list");

// Evento de digitação no campo de pesquisa
searchInput.addEventListener("input", pegarNome);

function pegarNome() {
    console.log(searchInput.value.toLowerCase());
    const inputValue = searchInput.value.toLowerCase(); // Converte o texto digitado para minúsculas
    suggestionsList.innerHTML = ""; // Limpa a lista de sugestões

    // Verificar se o campo está vazio
    if (inputValue.trim() === "") {
        suggestionsList.style.display = "none"; // Oculta a lista se o campo estiver vazio
        return; // Sai da função se o campo estiver vazio
    }

    // Filtrar sugestões que contenham o texto digitado em minúsculas
    const sugestoesFiltradas = sugestoes.filter((sugestao) =>
        sugestao.toLowerCase().includes(inputValue)
    );

    // Adicionar sugestões à lista
    sugestoesFiltradas.forEach((sugestao) => {
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

    return suggestionsList;
}

// Evento de tecla pressionada no campo de pesquisa
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // Verifica se a tecla pressionada é "Enter"
        const suggestionsList = pegarNome();
        console.log(suggestionsList.children[0].innerHTML);
        input4.value = suggestionsList.children[0].innerHTML;
        executarPesquisa(); // Chama a função de pesquisa
    }
});

// Evento de tecla pressionada no campo de pesquisa
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
        // Verifica se a tecla pressionada é "Tab"
        // Preencher o campo com a sugestão mais próxima
        const sugestaoProxima = suggestionsList.querySelector("li");
        if (sugestaoProxima) {
            searchInput.value = sugestaoProxima.textContent; // Preenche o campo com a sugestão
            suggestionsList.style.display = "none"; // Oculta a lista de sugestões
            event.preventDefault(); // Impede o comportamento padrão do Tab
        }
    }
});
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.querySelector(".content");

    if (sidebar.style.width === "180px") {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
        sidebar.style.visibility = "hidden"; // Tornar o menu invisível
    } else {
        sidebar.style.width = "180px";
        content.style.marginLeft = "180px";
        sidebar.style.visibility = "visible"; // Tornar o menu visível
    }
}
