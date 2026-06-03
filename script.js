// Aguarda o navegador carregar completamente a estrutura HTML antes de aplicar a lógica
document.addEventListener("DOMContentLoaded", () => {
  
  // Captura todos os botões de opções do Quiz
  const botoesOpcoes = document.querySelectorAll(".btn-opcao");
  // Captura a div onde será exibido o texto de resultado
  const areaResultado = document.getElementById("resultado-quiz");

  // Adiciona o evento de escuta a cada um dos botões
  botoesOpcoes.forEach(botao => {
    botao.addEventListener("click", () => {
      
      // Bloqueia os botões após o primeiro clique para o usuário não ficar clicando várias vezes
      botoesOpcoes.forEach(b => b.disabled = true);

      // Verifica se o atributo personalizado 'data-correta' do HTML é "true"
      const ehCorreta = botao.getAttribute("data-correta") === "true";

      if (ehCorreta) {
        // Altera o texto e adiciona a classe CSS verde para resposta certa
        areaResultado.textContent = "✓ Excelente! A rotação de culturas e o plantio direto evitam a erosão e mantêm o solo fértil e saudável. 🌱";
        areaResultado.className = "resposta-correta";
        botao.style.backgroundColor = "#2e7d32";
        botao.style.color = "white";
      } else {
        // Altera o texto e adiciona a classe CSS vermelha para resposta errada
        areaResultado.textContent = "✕ Ops! Essa prática prejudica o meio ambiente. A resposta correta era a alternativa B. 🍂";
        areaResultado.className = "resposta-errada";
        botao.style.backgroundColor = "#d32f2f";
        botao.style.color = "white";
        botao.style.borderColor = "#d32f2f";
      }

      // Registro no console do desenvolvedor para auditoria de funcionamento (Bom para defesa do projeto)
      console.log(`Quiz respondido. Acerto: ${ehCorreta}`);
    });
  });
});
