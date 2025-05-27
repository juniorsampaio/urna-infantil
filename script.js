function votar(livro) {
  let imagem = "";

  if (livro === "O Pequeno Príncipe") {
    imagem = "pequeno_principe.jpg";
  } else if (livro === "Chapeuzinho Vermelho") {
    imagem = "chapeuzinho_vermelho.jpg";
  }

  // Atualiza a tela com agradecimento e imagem
  document.body.innerHTML = `
    <div class="confirmacao">
      <h1>Obrigado pelo seu voto!</h1>
      <img src="${imagem}" alt="${livro}" class="imagem-confirmacao">
      <p>Você votou em <strong>${livro}</strong></p>
      <audio id="audioAgradecimento" autoplay>
        <source src="agradecimento.mp3" type="audio/mpeg">
        Seu navegador não suporta áudio.
      </audio>
    </div>
  `;

  // Envia o voto
  fetch('https://script.google.com/macros/s/AKfycbwRq03rmyrSi_vHC4_ZoHiMfEMOe8CvOh0YfCcCziwmKDWbhgz2LuhI_2V-DwwKjncusA/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ livro: livro })
  });

  // Volta para a tela principal após 5 segundos
  setTimeout(() => {
    location.reload();
  }, 5000);
}
