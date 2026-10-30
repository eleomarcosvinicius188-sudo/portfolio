document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANO AUTOMÁTICO
    document.getElementById("ano-atual").textContent = new Date().getFullYear();

    // 2. SAUDAÇÃO DINÂMICA
    const saudacaoElemento = document.getElementById("saudacao");
    const hora = new Date().getHours();
    let textoSaudacao = "Oss!";

    if (hora >= 5 && hora < 12) {
        textoSaudacao = "Oss! Bom dia, bem-vindo ao meu dojô de desenvolvimento.";
    } else if (hora >= 12 && hora < 18) {
        textoSaudacao = "Oss! Boa tarde, pronto para alinhar novas linhas de código?";
    } else {
        textoSaudacao = "Oss! Boa noite, focado na evolução técnica da programação.";
    }
    saudacaoElemento.textContent = textoSaudacao;

    // 3. MENU HAMBÚRGUER
    const menuBtn = document.querySelector(".menu-hamburger");
    const navMenu = document.querySelector(".nav-menu");

    menuBtn.addEventListener("click", () => {
        const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", !isExpanded);
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });

    // 4. MODO CLARO / ESCURO
    const toggleThemeBtn = document.getElementById("toggle-theme");
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // 5. VALIDAÇÃO DO FORMULÁRIO
    const form = document.getElementById("form-contato");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        let isValid = true;

        document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

        // Validar Nome
        const nome = document.getElementById("nome");
        if (nome.value.trim().length < 3) {
            document.getElementById("error-nome").textContent = "O nome precisa ter pelo menos 3 caracteres.";
            isValid = false;
        }

        // Validar Email
        const email = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            document.getElementById("error-email").textContent = "Insira um e-mail válido.";
            isValid = false;
        }

        // Validar Telefone
        const telefoneForm = document.getElementById("telefone_form");
        if (telefoneForm.value.trim().length < 10) {
            document.getElementById("error-telefone-form").textContent = "Insira um telefone/WhatsApp válido com DDD.";
            isValid = false;
        }

        // Validar Mensagem
        const mensagem = document.getElementById("mensagem");
        if (mensagem.value.trim() === "") {
            document.getElementById("error-mensagem").textContent = "A mensagem não pode ficar vazia.";
            isValid = false;
        }

        // Validar Consentimento
        const consentimento = document.getElementById("consentimento");
        if (!consentimento.checked) {
            document.getElementById("error-consentimento").textContent = "Você deve autorizar o contato profissional.";
            isValid = false;
        }

        if (isValid) {
            alert("Sua proposta de treino/vaga foi enviada com sucesso! Oss.");
            form.reset();
        }
    });
});