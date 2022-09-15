const topLeft = document.querySelector('.topleft')
const topMiddle = document.querySelector('.topmiddle')
const topRight = document.querySelector('.topright')
const middleLeft = document.querySelector('.middleleft')
const middle = document.querySelector('.middle')
const middleRight = document.querySelector('.middleright')
const bottomLeft = document.querySelector('.bottomleft')
const bottomMiddle = document.querySelector('.bottommiddle')
const bottomRight = document.querySelector('.bottomright')
const start = document.querySelector('.start')
const restart = document.querySelector('.restart')
const names = document.querySelector('.names')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')


const gameboard = (() => {
  const board = [
    topLeft,topMiddle,topRight,
    middleLeft,middle,middleRight,
    bottomLeft, bottomMiddle, bottomRight,
  ]

  const player = (marker,name) => {
    return {marker,name}
  }
  
  const addMarker = (spot, player) => {
    const square = document.querySelector('.'+ spot)
    if (square.innerText) return 'Already Marked'
    square.innerText = player.marker
  }
  
  const restartGame = () => {
    restart.addEventListener('click', () => {
      for (let i=0; i<board.length; i++) {
        board[i].innerText = ""
      }
    })
  }
  
  // how to set turns for each player
  start.addEventListener('click', () => {
    if ((p1.value) || (p2.value)) {
      const player1 = player('X', p1.value)
      const player2 = player('O', p2.value)
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
          if (board[0].innerText === player1.marker && board[1].innerText === player1.marker && board[2].innerText === player1.marker) alert(`${player1.name} win`) 
          else if (board[0].innerText === player2.marker && board[1].innerText === player2.marker && board[2].innerText === player2.marker) alert(`${player2.name} win`) 
          else if (board[3].innerText === player1.marker && board[4].innerText === player1.marker && board[5].innerText === player1.marker) alert(`${player1.name} win`)
          else if (board[3].innerText === player2.marker && board[4].innerText === player2.marker && board[5].innerText === player2.marker) alert(`${player2.name} win`)
          else if (board[6].innerText === player1.marker && board[7].innerText === player1.marker && board[8].innerText === player1.marker) alert(`${player1.name} win`)
          else if (board[6].innerText === player2.marker && board[7].innerText === player2.marker && board[8].innerText === player2.marker) alert(`${player2.name} win`)
          else if (board[0].innerText === player1.marker && board[3].innerText === player1.marker && board[6].innerText === player1.marker) alert(`${player1.name} win`)
          else if (board[0].innerText === player2.marker && board[3].innerText === player2.marker && board[6].innerText === player2.marker) alert(`${player2.name} win`)
          else if (board[1].innerText === player1.marker && board[4].innerText === player1.marker && board[7].innerText === player1.marker) alert(`${player1.name} win`)
          else if (board[1].innerText === player2.marker && board[4].innerText === player2.marker && board[7].innerText === player2.marker) alert(`${player2.name} win`)
          else if (board[2].innerText === player1.marker && board[5].innerText === player1.marker && board[8].innerText === player1.marker) alert(`${player1.name} win`)
          else if (board[2].innerText === player2.marker && board[5].innerText === player2.marker && board[8].innerText === player2.marker) alert(`${player2.name} win`)
          else if (board[0].innerText === player1.marker && board[4].innerText === player1.marker && board[8].innerText === player1.marker) alert(`${player1.name} win`)
          else if (board[0].innerText === player2.marker && board[4].innerText === player2.marker && board[8].innerText === player2.marker) alert(`${player2.name} win`)
          else if (board[2].innerText === player1.marker && board[4].innerText === player1.marker && board[6].innerText === player1.marker) alert(`${player1.name} win`)
          else if (board[2].innerText === player2.marker && board[4].innerText === player2.marker && board[6].innerText === player2.marker) alert(`${player2.name} win`)
          else if (board[0].innerText && board[1].innerText && board[2].innerText && board[3].innerText && board[4].innerText && board[5].innerText && board[6].innerText 
            && board[7].innerText && board[8].innerText) alert('Tie')
          })
        }
      } else alert('No Names!')
      })
      
      restartGame()
  return {board}
})()




