function TicTacToe() {
  this.board    = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  this.player1  = "X"
  this.player2  = "O"
  this.currentPlayer = this.player1
  //start with default 0 turns
  this.turns    = 0
}

TicTacToe.prototype.manageBoard = function(square) {
  switch ($(square).attr('id')) {
    case "top-left":
        this.board[0][0] = this.currentPlayer
        break;
  }
}

TicTacToe.prototype.playGame = {
  //player

}

TicTacToe.prototype.takeTurn = {
  //player

}

TicTacToe.prototype.switchPlayer = function() {
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2
  } else {
    this.currentPlayer = this.player1
  }
}

// TicTacToe.prototype.checkWin = function() {
//   //check win/loss/draw
//
// }
//
// TicTacToe.prototype.postgameCommunication = function() {
//   //communicate outcome
//
// }
//
// TicTacToe.prototype.playAgain = function() {
//   //offer to play again
//
// }

//jQuery
$(document).ready(function() {
  console.log('create and begin the game here!')
  var game = new TicTacToe()
  $('.square').one('click', function() {
    $(this).append( "<p>Test</p>" )
    game.play()
  })
})
