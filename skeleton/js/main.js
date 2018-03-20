const View = require("./ttt-view.js");
const Game = require("../../solution/game.js");

$( () => {
  // Your code here
  let figure = $('figure');
  console.log(figure);
  new View(new Game, figure);
});
