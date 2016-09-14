$(function() {

  var turn = 1
  var xSquares = []
  var oSquares = []

  function didIWin(playerSquares) {
    var arr = []
    var countHash = {}
    playerSquares.forEach(function(data) {
      (data.split(" ")).forEach(function(thing) {
        arr.push(thing);
      });
    });
    arr.forEach(function(id) {
      if (Object.keys(countHash).includes(id)) {
        countHash[id] ++;
      } else {
        countHash[id] = 1;
      }
    })
    Object.keys(countHash).forEach(function(key) {
      if (countHash[key] === 3) {
        alert("WINNER!");
      }
    })
  }

  $('.square').on('click', function() {
    square = $(this)
    if (square.text() === '') {
      if (turn % 2 === 0) {
        square.text("O");
        oSquares.push(square.data("wincons"));
        didIWin(oSquares);
      } else {
        square.text("X");
        xSquares.push(square.data("wincons"));
        didIWin(xSquares);
      };
      turn ++
    } else {
      alert("YOU SHALL NOT PASS!")
    }
  })


});
