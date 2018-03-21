class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $(".square").on("click", event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    });
  }



  makeMove($square) {
    // console.log($square.attr("position"));
    $square.text(this.game.currentPlayer);
    let pos = Array.from($square.attr("position")).map(el => parseInt(el));
    this.game.playMove(pos);
    console.log(this.game.currentPlayer);
    if (this.game.currentPlayer === 'x') {
      $square.addClass('green');
    } else {
      $square.addClass('cyan');
    }

    if (this.game.isOver()) {
      $(".square").off();
      $('.square').removeClass('available');
      const figcaption = $('<figcaption>');
      if (this.game.winner()) {
        figcaption.text(`${this.game.winner()} Wins!!!`);
        if(this.game.winner()==='x') {
          figcaption.addClass('cyan-text animated infinite flash');
        } else {
          figcaption.addClass('green-text animated infinite flash');
        }
      } else {
        figcaption.text(`No One Wins!!!`);
      }
      $("body").append(figcaption);
    }
  }

  setupBoard() {
    this.$el.append("<ul class='grid'></ul>");
    let $grid = $(".grid");
    for (let i = 0; i < 9; i++) {
      let x = i % 3;
      let y = Math.floor(i / 3);
      let pos = `${x}${y}`;
      $grid.append(`<li class='square available' position=${pos}></li>`);
    }
  }
}

module.exports = View;
