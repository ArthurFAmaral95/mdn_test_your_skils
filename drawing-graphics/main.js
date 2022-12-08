const canvas = document.querySelector('.myCanvas')
const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

//specifing the area of the canvas (context)
//parameter with the type of context (2d canvas)
const ctx = canvas.getContext('2d')

//painting all the viewport black
//first two parameters are the starting point of the drawing
//last two are the sizes
ctx.fillStyle = 'rgb(0, 0, 0)'
ctx.fillRect(0, 0, width, height)

// adding rectangles to the canvas
//the order we code the drawing will be the order it appears on the canvas
//the last one will be on top of the fisrt
ctx.fillStyle = 'rgb(255, 0, 0)'
ctx.fillRect(50, 50, 100, 150)

ctx.fillStyle = 'rgb(0, 255, 0)'
ctx.fillRect(75, 75, 100, 100)

ctx.fillStyle = 'rgb(255, 0, 255, 0.75)'
ctx.fillRect(25, 100, 175, 50)

//drawing "empty" rectangles
ctx.strokeStyle = 'rgb(255, 255, 255)'
ctx.lineWidth = 5
ctx.strokeRect(25, 25, 175, 200)

//drawing paths
ctx.fillStyle = 'rgb(255, 0, 0)'
ctx.beginPath()
ctx.moveTo(50, 300)
ctx.lineTo(150, 300)
const triHeight = 50 * Math.tan(degToRad(60))
ctx.lineTo(100, 300 + triHeight)
ctx.lineTo(50, 300)
ctx.fill()

// function to convert degrees to radians
function degToRad(degrees) {
  return (degrees * Math.PI) / 180
}

//drawing circles
//first two parameters are the starting point
//third is the radius
//fourth and fifth are the start and end angles
//0 to 360 means fulls circle
//last parameter is the the direction (clockwise or counterclockwise). false is clockwise
ctx.fillStyle = 'rgb(0, 0, 255'
ctx.beginPath()
ctx.arc(150, 500, 50, degToRad(0), degToRad(360), false)
ctx.fill()

ctx.fillStyle = 'yellow'
ctx.beginPath()
ctx.arc(250, 500, 50, degToRad(-45), degToRad(45), true)
ctx.lineTo(250, 500)
ctx.fill()

//drawing text
//first atribute of strokeText/fillText is the string
//last two is the positioning
//opposite to other canvas positioning, the (0 ,0) is at the bottom left corner
ctx.strokeStyle = 'white'
ctx.lineWidth = 1
ctx.font = '36px arial'
ctx.strokeText('Canvas text', 250, 50)

ctx.fillStyle = 'red'
ctx.font = '48px georgia'
ctx.fillText('Canvas text', 250, 150)

canvas.setAttribute('aria-label', 'Canvas text')

//drawing images
const image = new Image()
image.src = 'firefox.png'
image.addEventListener("load", () => ctx.drawImage(image, 600, 30));
/*image.addEventListener('load', () =>
  ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175)
)*/