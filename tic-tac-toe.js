function TicTacToe() {
  this.board    = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  this.player1  = "X"
  this.player2  = "O"
  this.currentPlayer = this.player1
  //start with default 0 turns
  this.turns    = 0
}

TicTacToe.prototype.manageBoard = function(square) {
  console.log(this.currentPlayer)
  switch ($(square).attr('id')) {
    case "top-left":
        this.board[0][0] = this.currentPlayer
        break;
    case "top-center":
        this.board[0][1] = this.currentPlayer
        break;
    case "top-right":
        this.board[0][2] = this.currentPlayer
        break;
    case "middle-left":
        this.board[1][0] = this.currentPlayer
        break;
    case "middle-center":
        this.board[1][1] = this.currentPlayer
        break;
    case "middle-right":
        this.board[1][2] = this.currentPlayer
        break;
    case "bottom-left":
        this.board[2][0] = this.currentPlayer
        break;
    case "bottom-center":
        this.board[2][1] = this.currentPlayer
        break;
    case "bottom-right":
        this.board[2][2] = this.currentPlayer
        break;
  }
}

TicTacToe.prototype.play = function() {
  //player switch
  this.switchPlayer();
}

TicTacToe.prototype.switchPlayer = function() {
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2
  } else {
    this.currentPlayer = this.player1
  }
}

TicTacToe.prototype.checkWin = function() {
  //check win/loss/draw

}

TicTacToe.prototype.postgameCommunication = function() {
  //communicate outcome

}

TicTacToe.prototype.playAgain = function() {
  //offer to play again

}

//jQuery
$(document).ready(function() {
  console.log('create and begin the game here!')
  var game = new TicTacToe()
  $('.square').one('click', function() {
    console.log(game.currentPlayer)
    $(this).append( "<p>" + game.currentPlayer + "</p>" )
    game.manageBoard(this)
    game.play()
  })
})
