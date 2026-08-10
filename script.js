// =============================================
// MENU MOBILE
// =============================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Fecha o menu quando o usuário clicar em um link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =============================================
// MATRÍCULA
// =============================================

const tipoMatricula =
    document.getElementById("tipoMatricula");

const opcao =
    document.getElementById("opcao");


const cursos = [
    "Informática",
    "Tecnologia Digital",
    "Treinamento Esportivo"
];


const categorias = [
    "Sub-07",
    "Sub-09",
    "Sub-11",
    "Sub-13",
    "Sub-15",
    "Sub-17",
    "Sub-20",
    "Sub-23",
    "Adulto"
];


tipoMatricula.addEventListener("change", function () {

    opcao.innerHTML =
        '<option value="">Selecione</option>';


    let lista = [];


    if (this.value === "curso") {

        lista = cursos;

    }


    if (this.value === "futsal") {

        lista = categorias;

    }


    lista.forEach(item => {

        const option =
            document.createElement("option");

        option.value = item;

        option.textContent = item;

        opcao.appendChild(option);

    });

});


// =============================================
// ENVIO DO FORMULÁRIO
// =============================================

const enrollmentForm =
    document.getElementById("enrollmentForm");

const formMessage =
    document.getElementById("formMessage");


enrollmentForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const nome =
            document.getElementById("nome").value;


        formMessage.style.color = "#198754";


        formMessage.innerHTML =
            `
            Matrícula de <strong>${nome}</strong>
            registrada localmente com sucesso.
            `;


        console.log(
            "Dados prontos para envio ao banco."
        );


        /*
        IMPORTANTE:

        Nesta primeira etapa o formulário
        ainda não está conectado ao banco.

        Na próxima etapa enviaremos estes dados
        para uma API Node.js usando fetch().
        */

    }
);