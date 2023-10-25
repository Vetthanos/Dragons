const carrossel = document.getElementById("carrossel");
const imagens = document.getElementById("imagens");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    var tela_mobile = 550;
    var tela_cheia = 1110;

    if (window.innerWidth >= 1500) {
        const offset = -currentIndex * tela_cheia;
        imagens.style.transform = `translateX(${offset}px)`;
    } else if (window.innerWidth <= 1024) {
        const offset = -currentIndex * tela_mobile;
        imagens.style.transform = `translateX(${offset}px)`;
    }
}

// Iniciar o carrossel automaticamente
setInterval(nextSlide, 3500);

var anuncio = [
    "https://1.bp.blogspot.com/-UeDL2v7w9TY/Xyb_NDdFbzI/AAAAAAAAf9g/Ckjrv5IwfEUZ6U1H0NdzA-7yEIjY-SHEgCLcBGAsYHQ/s1200/DORIL_MarciusMelhem.jpg",
    "https://escolaeducacao.com.br/wp-content/uploads/2019/07/exemplo-aanuncio-publicitario-3jpg.jpg",
    "https://miro.medium.com/v2/resize:fit:1400/1*MmVQw3wo7FrBtlDj7gmo9w.jpeg",
    "https://veja.abril.com.br/wp-content/uploads/2016/12/046.jpg?quality=70&strip=all",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyO4YCfEqAhMHaHlECoJf_tlk3-OD7J6EYA3l5jxL4KUQyhDPiWot3OkXgZlryxdZwshQ&usqp=CAU",
];
var indice = 0;
var tempoMudanca = 3000; // 3segundos

function mudarImagem() {
    var imagem = document.getElementById("anu");
    indice = (indice + 1) % anuncio.length;
    imagem.src = anuncio[indice];
}

setInterval(mudarImagem, tempoMudanca);

var anuncio2 = [
    "https://upload.wikimedia.org/wikipedia/pt/thumb/c/cd/Naruto_Ultimate_Capa.jpg/250px-Naruto_Ultimate_Capa.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f993868-5417-4268-9c23-1c6f0fc60b91/df62s4i-f4c6e523-56d8-4f7f-9226-9b530653b62b.png/v1/fill/w_1280,h_1920/dragon_ball_z_budokai_tenkaichi_4___steam_cover_by_evilzgaruda_df62s4i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzVmOTkzODY4LTU0MTctNDI2OC05YzIzLTFjNmYwZmM2MGI5MVwvZGY2MnM0aS1mNGM2ZTUyMy01NmQ4LTRmN2YtOTIyNi05YjUzMDY1M2I2MmIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.x1Y5O3JHmqe4HGdFi19dIIt0hSvtL14xub6m1lP0ctY",
    "https://m.media-amazon.com/images/I/816171Tp9xL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/51tvpHnNEML.jpg",
    "https://m.media-amazon.com/images/I/71W0shS7ylL.jpg",
    "https://static.wikia.nocookie.net/playstationallstarsfanfictionroyale/images/9/98/SSBAS_PS4.png/revision/latest?cb=20170608235225",
];
var ind = 0;
var tm = 3100; // 3segundos

function mudar() {
    var imagem = document.getElementById("anu2");
    ind = (ind + 1) % anuncio2.length;
    imagem.src = anuncio2[indice];
}

setInterval(mudar, tm);

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
