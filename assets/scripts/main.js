// Variáveis globais
var wordToGuess = "palavra";
var guessedLetters = [];
var remainingGuesses = 6;

// Função para verificar se a letra digitada é correta
function checkLetter(letter) {
  if (wordToGuess.includes(letter)) {
    // Adicionar letra à lista de letras já digitadas
    guessedLetters.push(letter);
    // Exibir a letra na palavra a ser adivinhada
    displayWord();
  } else {
    // Adicionar letra à lista de letras já digitadas
    guessedLetters.push(letter);
    // Diminuir o número de tentativas restantes
    remainingGuesses--;
    // Desenhar a forca a cada erro
    drawHangman();
  }
  checkGameOver();
}

// Função para exibir a palavra a ser adivinhada
function displayWord() {
  var word = "";
  for (var i = 0; i < wordToGuess.length; i++) {
    if (guessedLetters.includes(wordToGuess[i])) {
      word += wordToGuess[i] + " ";
    } else {
      word += "_ ";
    }
  }
  document.getElementById("word-to-guess").innerHTML = word;
}

// Função para desenhar a forca
function drawHangman() {
  switch (remainingGuesses) {
    case 6:
      // Desenhar o desenho da forca
      break;
    case 5:
      // Desenhar a cabeça do desenho da forca
      break;
    case 4:
      // Desenhar o corpo do desenho da forca
      break;
    case 3:
      // Desenhar um braço do desenho da forca
      break;
    case 2:
      // Desenhar outro braço do desenho da forca
      break;
    case 1:
      // Desenhar uma perna do desenho da forca
      break;
    case 0:
      // Desenhar outra perna do desenho da forca
      break;
  }
  document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
}

// Função para verificar se o jogo acabou
function checkGameOver() {
  if (remainingGuesses === 0) {
    alert("Game over! A palavra era " + wordToGuess);
  } else if (wordToGuess === guessedLetters.join("")) {
    alert("Você ganhou!");
  }
}

// Adicionando evento de click no botão de enviar letra
document.getElementById("submit-letter").addEventListener("click", function() {
    var letter = document.getElementById("letter").value;
    checkLetter(letter);
  });
  