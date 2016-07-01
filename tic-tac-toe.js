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
  this.turns +=1
}

TicTacToe.prototype.play = function() {
  console.log("mama" + this.gameOver())
  console.log("dada" + this.currentPlayer)
  if (this.gameOver() === this.currentPlayer) {
    console.log("The winner is: " + this.currentPlayer)
  } else {
    console.log("only hitting this else statement")
    this.switchPlayer();
  }
}


TicTacToe.prototype.switchPlayer = function() {
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2
  } else {
    this.currentPlayer = this.player1
  }
}

TicTacToe.prototype.gameOver = function() {
  console.log("in the gameOver function")
  console.log(this.board[0][0])
  console.log (this.board[1][1])
  console.log (this.board[2][2])

  //check win/loss/draw
  for(i = 0; i < 3; i++ ) {
      //vertical
    if (this.board[i][0] === this.board[i][1] === this.board[i][2]) {
      console.log("testing" + this.board[i][0])
      return this.board[i][0]
      //horizontal
    } else if (this.board[0][i] === this.board[1][i] === this.board[2][i]) {
      console.log("testing" + this.board[0][i])
      return this.board[0][i]
      //diagonal
    } else if (this.board[0][0] === this.board[1][1] === this.board[2][2]) {
      console.log("testing" + this.board[0][0])
      return this.board[0][0]
    } else if (this.board[0][2] === this.board[1][1] === this.board[2][0]) {
      console.log("testing" + this.board[0][2])
      return this.board[0][2]
    }
  }
  return false;
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
    $(this).append( "<p>" + game.currentPlayer + "</p>" )
    game.manageBoard(this)
    game.play()
  })
})
