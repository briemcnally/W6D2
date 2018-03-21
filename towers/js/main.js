const HanoiView = require("./towers-view.js");
const HanoiGame = require("../solution/game.js");

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
