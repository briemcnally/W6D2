class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.bindEvents();
    this.render();
  }
  setupTowers() {
    this.$el.append('<ul class="tower1" id=0></ul>');
    this.$el.append('<ul class="tower2" id=1><li></li><li></li><li></li></ul>');
    this.$el.append('<ul class="tower3" id=2><li></li><li></li><li></li></ul>');
    let $t1 = $('.tower1');
    $t1.append('<li class="ring1"></li>');
    $t1.append('<li class="ring2"></li>');
    $t1.append('<li class="ring3"></li>');
  }

  bindEvents() {
    $(".hanoi.ul").on("click", event => {
      const $start = $(event.currentTarget);
      if (this.startIdx) {
        this.endIdx = $start.id;
      } else {
        this.startIdx = $start.id;
      }
      if (this.endIdx) {
        this.move(this.startIdx, this.endIdx);
        this.render();
      } else {
        $start.addClass(`selected`);
      }
    });
  }

  render() {
    for (let idx = 0; idx < 3; idx ++) {
      for(let idx2 = 0; idx2 < 3; idx2++ ) {
        if (this.game.towers[idx][idx2]) {
          let className = `ring${this.game.towers[idx][idx2]}`;
          $(`.tower${idx+1}:nthchild(${idx2+1})`).addClass(className);
        } else {
          $(`.tower${idx+1}:nthchild(${idx2+1})`).removeClass('ring1 ring2 ring3');
        }
      }
    }
  }
}


module.exports = HanoiView;
