const carros = [
    "images/carros/Equinox2-1151x768.jpg",
    "images/carros/chevrolet-equinox-ev-2025-dianteira-chapada.avif",
    "images/carros/images.jpg"
];let numeroCarro = 0;

const imagemCarro = document.getElementById("imagem-carro");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");

botaoProximo.addEventListener("click", function() {
    numeroCarro = numeroCarro + 1;

    if (numeroCarro >= carros.length) {
        numeroCarro = 0;
    }

    imagemCarro.src = carros[numeroCarro];
});
botaoAnterior.addEventListener("click", function() {
    numeroCarro = numeroCarro - 1;

    if (numeroCarro < 0) {
        numeroCarro = carros.length - 1;
    }

    imagemCarro.src = carros[numeroCarro];
});

/* TROCA AUTOMÁTICA DOS CARROS */
setInterval(function() {
    numeroCarro = numeroCarro + 1;

    if (numeroCarro >= carros.length) {
        numeroCarro = 0;
    }

    imagemCarro.src = carros[numeroCarro];
}, 4000);
const formContato = document.getElementById("form-contato");

if (formContato) {
    formContato.addEventListener("submit", function(event) {
        event.preventDefault();

        const retorno = document.getElementById("retorno-agendamento");

retorno.innerHTML =
    "Certo! Você poderá comparecer à nossa concessionária no dia " +
    dataFormatada +
    ". Estamos localizados na Av. Rio das Pedras, número 1106, Vila Antonieta, Zona Leste, São Paulo, CEP 12376-097.";

retorno.style.color = "#7daaff";
retorno.style.fontSize = "14px";
retorno.style.lineHeight = "1.6";
retorno.style.marginTop = "15px";
        formContato.reset();
    });
}


const formularioAgendamento = document.getElementById("form-agendamento");

if (formularioAgendamento) {
    formularioAgendamento.addEventListener("submit", function(event) {
        event.preventDefault();

        const dataEscolhida = document.getElementById("data-agendamento").value;
        const retorno = document.getElementById("retorno-agendamento");

        if (dataEscolhida === "") {
            alert("Por favor, escolha a data da visita.");
            return;
        }

        const partesData = dataEscolhida.split("-");
        const dataFormatada = partesData[2] + "/" + partesData[1] + "/" + partesData[0];

        retorno.textContent =
            "Certo! Você poderá comparecer à nossa concessionária no dia " +
            dataFormatada +
            ". Estamos localizados na Av. Rio das Pedras, nº 1106, Vila Antonieta, Zona Leste, São Paulo, CEP 12376-097.";

        retorno.style.color = "#7daaff";
        retorno.style.fontSize = "14px";
        retorno.style.lineHeight = "1.6";
        retorno.style.marginTop = "15px";
    });
}

