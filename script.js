<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Urna Infantil - Escolha Seu Livro</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Qual livro você quer escolher?</h1>
  <div class="book-container">
    <div class="book" onclick="votar('O Pequeno Príncipe')">
      <img src="pequeno_principe.jpg" alt="O Pequeno Príncipe" />
      <p>O Pequeno Príncipe</p>
    </div>
    <div class="book" onclick="votar('Chapeuzinho Vermelho')">
      <img src="chapeuzinho_vermelho.jpg" alt="Chapeuzinho Vermelho" />
      <p>Chapeuzinho Vermelho</p>
    </div>
  </div>

  <audio id="audioAgradecimento" src="agradecimento.mp3" preload="auto"></audio>

  <script src="script.js"></script>
</body>
</html>
