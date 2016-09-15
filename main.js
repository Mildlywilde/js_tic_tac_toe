$(function() {

  var turn = 0;
  var xSquares = [];
  var oSquares = [];

  function didIWin(playerSquares) {
    var arr = [];
    var countHash = {};
    playerSquares.forEach(function(id) {
      if (Object.keys(countHash).includes(id)) {
        countHash[id] ++;
      } else {
        countHash[id] = 1;
      };
    });
    Object.keys(countHash).forEach(function(key) {
      if (countHash[key] === 3) {
        alert("WINNER!");
        location.reload()
      };
    });
  };

  $('.square').on('click', function() {
    square = $(this);
    if (square.text() === '') {
    var data = square.data("wincons");
      if (turn % 2 === 0) {
        square.text("O");
        data.split(" ").forEach(function(thing) {
          oSquares.push(thing);
        });
        didIWin(oSquares);
      } else {
        square.text("X");
        data.split(" ").forEach(function(thing) {
          xSquares.push(thing);
        });
        didIWin(xSquares);
      };
      turn ++;
      if (turn === 9) {
        alert("DRAW")
        location.reload()
      }
    } else {
      alert("YOU SHALL NOT PASS!");
    };
  });


});
