// Select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch')

const ctx = canvas.getContext('2d')

const shakeButton = document.querySelector('.shake ')

const MOVE_AMOUNT = 10

// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canbas.
const width = canvas.width
const height = canvas.height

// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)

ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = MOVE_AMOUNT

ctx.beginPath() // start the drawing
ctx.moveTo(x, y)
ctx.lineTo(x, y)
ctx.stroke()

// write a draw function
function draw({ key }) {
  // start the path
  ctx.beginPath()
  ctx.moveTo(x, y)

  // move our x and y values depending on what the user did

  switch (key) {
    case 'ArrowUp':
      y = y - MOVE_AMOUNT
      break
    case 'ArrowDown':
      y = y + MOVE_AMOUNT
      break
    case 'ArrowRight':
      x = x + MOVE_AMOUNT
      break
    case 'ArrowLeft':
      x = x - MOVE_AMOUNT
      break

    default:
      break
  }

  ctx.lineTo(x, y)
  ctx.stroke()
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault()
    draw({ key: e.key })
  }
}

// clear/share

// listen for arrow keys
window.addEventListener('keydown', handleKey)
