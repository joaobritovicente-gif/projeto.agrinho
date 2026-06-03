// Aguarda o navegador ler todo o HTML antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
  
  // Captura o botão através do ID adicionado no HTML
  const botaoJogar = document.getElementById("btn-jogar");

  if (botaoJogar) {
    // Adiciona uma ação quando o usuário clica no botão
    botaoJogar.addEventListener("click", () => {
      // Registra uma mensagem no console do desenvolvedor (F12)
      console.log("Usuário clicou para abrir o jogo EcoKids. Divirta-se! 🍃");
    });
  }
});
