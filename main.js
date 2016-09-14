$(function() {

  var turn = 1

  $('.square').on('click', function() {
    square = $(this)
    if (turn % 2 === 0) {
      square.text("O")
    } else {
      square.text("X");
    };
    turn ++
  })


});
