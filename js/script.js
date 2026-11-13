
// MENU E NAVEGAÇÃO

const paginas = document.querySelectorAll(".pagina");
const links = document.querySelectorAll("nav a");
const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");

function mostrarPagina(id) {

    const paginaSelecionada = document.getElementById(id);

    if (!paginaSelecionada) return;

    paginas.forEach(pagina => {
        pagina.classList.remove("ativa");
    });

    paginaSelecionada.classList.add("ativa");

    links.forEach(link => {
        link.classList.toggle(
            "selecionado",
            link.getAttribute("href") === "#" + id
        );
    });

    menu.classList.remove("aberto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// CLIQUE NO MENU

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const id = this.getAttribute("href").substring(1);

        if (document.getElementById(id)?.classList.contains("pagina")) {

            event.preventDefault();

            mostrarPagina(id);
        }
    });

});

// MENU PARA CELULAR

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("aberto");

});


// DETALHES DOS VEÍCULOS

const carros = {

    a1: {
        nome: "ATRION A1",
        imagem: "assets/atrion-sedan.png",
        descricao: "Sedã elétrico com design sofisticado, conforto e tecnologia.",
        motor: "100% elétrica",
        potencia: "A definir",
        tecnologia: "Conectividade inteligente"
    },

    s9: {
        nome: "ATRION S9",
        imagem: "assets/atrion-esportivo.png",
        descricao: "Cupê esportivo com linhas aerodinâmicas e personalidade.",
        motor: "A definir",
        potencia: "A definir",
        tecnologia: "Cockpit tecnológico"
    }

};

const modal = document.getElementById("modalCarro");

const modeloSelecionado = document.getElementById("modeloSelecionado");

// ABRIR MODAL

document.querySelectorAll(".card-carro[data-modelo]").forEach(card => {

    card.querySelector(".abrir-carro").addEventListener("click", () => {

        const modelo = carros[card.dataset.modelo];

        document.getElementById("nomeModal").textContent = modelo.nome;

        document.getElementById("imagemModal").src = modelo.imagem;

        document.getElementById("imagemModal").alt = modelo.nome;

        document.getElementById("descricaoModal").textContent =
            modelo.descricao;

        document.getElementById("motorModal").textContent =
            modelo.motor;

        document.getElementById("potenciaModal").textContent =
            modelo.potencia;

        document.getElementById("tecnologiaModal").textContent =
            modelo.tecnologia;

        modeloSelecionado.value = modelo.nome;

        modal.classList.add("aberto");

    });

});


// FECHAR MODAL

function fecharModal() {

    modal.classList.remove("aberto");

}

document.querySelectorAll("[data-fechar]").forEach(botao => {

    botao.addEventListener("click", fecharModal);

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        fecharModal();
    }

});


// BOTÃO DE TEST DRIVE NO MODAL

document.getElementById("botaoModal").addEventListener("click", () => {

    fecharModal();

    mostrarPagina("test-drive");

});


// FORMULÁRIO TEST DRIVE

document.getElementById("formTestDrive").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("mensagemTestDrive").textContent =
        "Solicitação demonstrativa validada! Obrigado pelo interesse na ATRION.";

    this.reset();

});


// FORMULÁRIO DE CONTATO

document.getElementById("formContato").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("mensagemContato").textContent =
        "Mensagem demonstrativa validada! Obrigado por entrar em contato.";

    this.reset();

});
