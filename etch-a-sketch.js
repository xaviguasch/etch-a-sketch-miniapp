// Select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch')

const ctx = canvas.getContext('2d')

const shakeButton = document.querySelector('.shake ')

// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canbas.
const width = canvas.width
const height = canvas.height

// create random x and y starting points on the canvas

ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 10

ctx.beginPath() // start the drawing
ctx.moveTo(200, 200)
ctx.lineTo(200, 200)
ctx.stroke()

// write a draw function

// write a handler for the keys

// clear/share
