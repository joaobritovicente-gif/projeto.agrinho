// Aguarda a página carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona o botão que está dentro do link da ecokids
    const botaoJogar = document.querySelector('a[href*="ecokids.net"] button');

    if (botaoJogar) {
        // Adiciona um evento de clique ao botão
        botaoJogar.addEventListener("click", () => {
            // Mensagem secreta no console do navegador (F12)
            console.log("Boa sorte no jogo! Proteja o meio ambiente! 🍃");
            
            // Exemplo de interação: Você pode adicionar um alerta rápido se quiser
            // alert("Você está sendo redirecionado para o Jogo Educativo!");
        });

        // Efeito visual extra: uma leve animação ao clicar
        botaoJogar.addEventListener("mousedown", () => {
            botaoJogar.style.transform = "scale(0.95)";
        });
        
        botaoJogar.addEventListener("mouseup", () => {
            botaoJogar.style.transform = "scale(1)";
        });
    }
});
