function votar(livro) {
  // Envia o voto para o Apps Script
  fetch('SUA_URL_DO_APPS_SCRIPT', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ livro: livro })
  });

  // Mostra a tela de agradecimento
  document.querySelector('.container').style.display = 'none';
  const tela = document.getElementById('telaAgradecimento');
  tela.style.display = 'flex';

  // Mostra a imagem correspondente
  const img = document.getElementById('livroEscolhidoImg');
  if (livro === 'Capa 1') {
    img.src = 'CAPA1.jpg';
  } else if (livro === 'Capa 2') {
    img.src = 'CAPA2.jpg';
  }

  // Reproduz o áudio e volta para a tela inicial
  const audio = document.getElementById('audioAgradecimento');
  audio.play();
  audio.onended = () => {
    tela.style.display = 'none';
    document.querySelector('.container').style.display = 'flex';
  };
}

