// Select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch')

const ctx = canvas.getContext('2d')

const shakeButton = document.querySelector('.shake ')

// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canbas.
const width = canvas.width
const height = canvas.height

// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)

ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 30

ctx.beginPath() // start the drawing
ctx.moveTo(x, y)
ctx.lineTo(x, y)
ctx.stroke()

// write a draw function

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault()
    console.log(e.key)
    console.log('handling key')
  }
}

// clear/share

// listen for arrow keys
window.addEventListener('keydown', handleKey)
