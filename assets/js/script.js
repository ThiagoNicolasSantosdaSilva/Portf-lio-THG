// ---------- MENU DE NAVEGAÇÃO ----------
// Seleciona o botão do menu e o menu de navegação
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.main-links');

// Adiciona um evento de clique ao botão do menu
menuToggle.addEventListener('click', () => {
    const isActive = navbarLinks.classList.toggle('active'); 
    menuToggle.setAttribute('aria-expanded', isActive); // Acessibilidade
});

// ---------- EFEITO DE ROLAGEM SUAVE ----------
// Seleciona todos os links de navegação
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = link.getAttribute('href'); // Obtém o ID do destino
        const targetElement = document.querySelector(targetId); // Seleciona o elemento de destino
        
        // Verifica se o elemento de destino existe
        if (targetElement) {
            // Rola suavemente para o elemento de destino
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ---------- VALIDAÇÃO DO FORMULÁRIO DE CONTATO ----------
// Seleciona o formulário e os campos
const contatoForm = document.querySelector('.form-contato');
const nomeInput = document.querySelector('input[name="nome"]');
const emailInput = document.querySelector('input[name="email"]');
const mensagemInput = document.querySelector('textarea[name="mensagem"]');

// Adiciona um evento de envio ao formulário
contatoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Previne o envio padrão do formulário

    // Validação simples
    if (nomeInput.value.trim() === '' || emailInput.value.trim() === '' || mensagemInput.value.trim() === '') {
        alert('Por favor, preencha todos os campos.'); // Alerta se algum campo estiver vazio
        return;
    }

    // Envio usando Fetch API
    fetch('form/enviar_contato.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nomeInput.value,
            email: emailInput.value,
            mensagem: mensagemInput.value
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Mensagem enviada com sucesso!'); // Alerta de sucesso
            contatoForm.reset(); // Reseta o formulário
        } else {
            alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
        }
    })
    .catch(error => {
        alert('Erro: ' + error.message);
    });
});
