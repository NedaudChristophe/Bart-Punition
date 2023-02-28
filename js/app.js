const app = {
    // Constantes pour les éléments du DOM
    textInput: document.querySelector('#text'),
    numberInput: document.querySelector('#number_lines'),
    board: document.querySelector('.text-board'),
  
    init: function() {
      // Ajout des écouteurs d'événement
      this.textInput.addEventListener('keyup', this.updateBoard);
      this.numberInput.addEventListener('keyup', this.updateBoard);
      this.numberInput.addEventListener('change', this.updateBoard);
    },
  
    updateBoard: function() {
      // Stockage du texte dans une variable
      const text = app.textInput.value;
  
      // Effacement du contenu de la zone de texte
      app.board.innerHTML = '';
  
      // Construction de la chaîne de caractères contenant les lignes
      let lines = '';
      const linesNumber = app.numberInput.value;
      for (let index = 1; index <= Math.min(linesNumber, 14); index++) {
        lines += text + '<br/>';
      }
  
      // Ajout de la chaîne de caractères au contenu de la zone de texte
      app.board.innerHTML = lines;
    }
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    app.init();
  });