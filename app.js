const topLeft = document.querySelector('.topleft')
const topMiddle = document.querySelector('.topmiddle')
const topRight = document.querySelector('.topright')
const middleLeft = document.querySelector('.middleleft')
const middle = document.querySelector('.middle')
const middleRight = document.querySelector('.middleright')
const bottomLeft = document.querySelector('.bottomleft')
const bottomMiddle = document.querySelector('.bottommiddle')
const bottomRight = document.querySelector('.bottomright')

const player = (marker) => {
  return {marker}
}
const player1 = player('X')
const player2 = player('O')

const gameboard = () => {
  const board = [
    topLeft,topMiddle,topRight,
    middleLeft,middle,middleRight,
    bottomLeft, bottomMiddle, bottomRight,
  ]
  
  const addMarker = (spot, player) => {
    const square = document.querySelector('.'+ spot)
    if (square.innerText) return 'Already Marked'
    square.innerText = player.marker
  }


  // how to set turns for each player
  let turn = true
  for (let i=0; i < board.length;i++) {
    const classname = board[i].className
    board[i].addEventListener('click', () => {
      if (turn) {
        if (addMarker(classname,player1) === 'Already Marked') {
          turn = turn
        } else {
          addMarker(classname,player1)
          turn = !turn
        }
      } else {
        if (addMarker(classname,player2) === 'Already Marked') {
          turn = turn
        } else {
          addMarker(classname,player2)
          turn = !turn
        }       
      }
      // how does a player win
      if (board[0].innerText === player1.marker && board[1].innerText === player1.marker && board[2].innerText === player1.marker) alert('player 1 win') 
      else if (board[0].innerText === player2.marker && board[1].innerText === player2.marker && board[2].innerText === player2.marker) alert('player 2 win') 
      else if (board[3].innerText === player1.marker && board[4].innerText === player1.marker && board[5].innerText === player1.marker) alert('player 1 win')
      else if (board[3].innerText === player2.marker && board[4].innerText === player2.marker && board[5].innerText === player2.marker) alert('player 2 win')
      else if (board[6].innerText === player1.marker && board[7].innerText === player1.marker && board[8].innerText === player1.marker) alert('player 1 win')
      else if (board[6].innerText === player2.marker && board[7].innerText === player2.marker && board[8].innerText === player2.marker) alert('player 2 win')
      else if (board[0].innerText === player1.marker && board[3].innerText === player1.marker && board[6].innerText === player1.marker) alert('player 1 win')
      else if (board[0].innerText === player2.marker && board[3].innerText === player2.marker && board[6].innerText === player2.marker) alert('player 2 win')
      else if (board[1].innerText === player1.marker && board[4].innerText === player1.marker && board[7].innerText === player1.marker) alert('player 1 win')
      else if (board[1].innerText === player2.marker && board[4].innerText === player2.marker && board[7].innerText === player2.marker) alert('player 2 win')
      else if (board[2].innerText === player1.marker && board[5].innerText === player1.marker && board[8].innerText === player1.marker) alert('player 1 win')
      else if (board[2].innerText === player2.marker && board[5].innerText === player2.marker && board[8].innerText === player2.marker) alert('player 2 win')
      else if (board[0].innerText === player1.marker && board[4].innerText === player1.marker && board[8].innerText === player1.marker) alert('player 1 win')
      else if (board[0].innerText === player2.marker && board[4].innerText === player2.marker && board[8].innerText === player2.marker) alert('player 2 win')
      else if (board[2].innerText === player1.marker && board[4].innerText === player1.marker && board[6].innerText === player1.marker) alert('player 1 win')
      else if (board[2].innerText === player2.marker && board[4].innerText === player2.marker && board[6].innerText === player2.marker) alert('player 2 win')
      else if (board[0].innerText && board[1].innerText && board[2].innerText && board[3].innerText && board[4].innerText && board[5].innerText && board[6].innerText 
        && board[7].innerText && board[8].innerText) alert('Tie')
    })
  }
  
  return {board}
}


gameboard()


