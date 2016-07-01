function TicTacToe() {
  this.board    = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  this.player1  = "X"
  this.player2  = "O"
  this.currentPlayer = this.player1
  //start with default 0 turns
  this.turns    = 0
  this.done     = false
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
  console.log("mama" + this.gameOver())
  console.log("dada" + this.currentPlayer)
  console.log("board" + this.board)
  if (this.gameOver() === false) {
    this.switchPlayer();
  } else if (this.gameOver() === true) {
    this.done = true;
    $("body").append("<h2>No winner-It's a draw</h2>")
  } else {
    this.done = true;
    $("body").append("<h2>The winner is: " + this.gameOver() + " !</h2>")
  }
}



TicTacToe.prototype.gameOver = function() {
  //check win/loss/draw
  var b = this.board;
  var one = this.player1;
  var two = this.player2;

  // variables for the board
  var topLeft = b[0][0], topMid = b[0][1], topRight = b[0][2]; // top
  var midLeft = b[1][0], midMid = b[1][1], midRight = b[1][2]; // middle
  var bottomLeft = b[2][0], bottomMid = b[2][1], bottomRight = b[2][2]; // bottom
  console.log("test" , topLeft === one)
  console.log(topLeft)
  console.log(one)
  // player one wins vertically
  if (topLeft === one && midLeft === one && bottomLeft === one) {
    return one;
  } else if (topMid === one && midMid === one && bottomMid === one) {
    return one;
  } else if (topRight === one && midRight === one && bottomRight === one) {
    return one;
  }

  // player two wins vertically
  if (topLeft === two && midLeft === two && bottomLeft === two) {
    return two;
  } else if (topMid === two && midMid === two && bottomMid === two) {
    return two;
  } else if (topRight === two && midRight === two && bottomRight === two) {
    return two;
  }

  // player one wins horizontally
  if (topLeft === one && topMid === one && topRight === one) {
    return one;
  } else if (midLeft === one && midMid === one && midRight === one) {
    return one;
  } else if (bottomLeft === one && bottomMid === one && bottomRight === one) {
    return one;
  }

  // player two wins horizontally
  if (topLeft === two && topMid === two && topRight === two) {
    return two;
  } else if (midLeft === two && midMid === two && midRight === two) {
    return two;
  } else if (bottomLeft === two && bottomMid === two && bottomRight === two) {
    return two;
  }

  // player one wins diagonally
  if (topLeft === one && midMid === one && bottomRight === one) {
    return one;
  } else if (topRight === one && midMid === one && bottomLeft === one) {
    return one;
  }

  // player two wins diagonally
  if (topLeft === two && midMid === two && bottomRight === two) {
    return two;
  } else if (topRight === two && midMid === two && bottomLeft === two) {
    return two;
  }

  // there's a draw if no one has won after 9 turns
  if (this.turns > 8) {
    return true
  } else {
    return false
  }
}

TicTacToe.prototype.switchPlayer = function() {
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2
  } else {
    this.currentPlayer = this.player1
  }
}

TicTacToe.prototype.playAgain = function() {
  //offer to play again

}

//jQuery
$(document).on('ready', function() {
  console.log('create and begin the game here!')
  var game = new TicTacToe()
    if (game.done === true) {
      location.reload();
    }
  $('.square').one('click', function() {
    if (game.done === false) {
      $(this).append( "<p>" + game.currentPlayer + "</p>" )
      game.manageBoard(this)
      game.turns += 1
      game.play()
    }
  })
})
