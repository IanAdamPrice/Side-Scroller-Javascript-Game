import platform from '../img/platform.png'
// import hills from '../img/hills.png'
// import background from '../img/background.png'


const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

const gravity = .5

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }
    this.velocity = {
      x: 0,
      y: 0
    }

    this.width = 30
    this.height = 30
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y


    if (this.position.y + this.height + this.velocity.y <= canvas.height)
    this.velocity.y += gravity
    else this.velocity.y = 0
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y 
    }

    this.image = image
    this.width = image.width
    this.height = image.height

  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

const image = new Image()
image.src = platform

const player = new Player()

const platforms = [
  new Platform({ 
    x: -1, 
    y: 470,
    image
  }), 
  new Platform({ x: image.width - 3, y:470, image })]

const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}

let scrollOffset = 0

// Player movement
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)
  
  platforms.forEach((platform) => {
    platform.draw()
  })
  player.update()


  // Player movement left & right
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5
  } else {
    player.velocity.x =0

  // Background scrolling
  if (keys.right.pressed) {
    scrollOffset += 5
    platforms.forEach((platform) => {
      platform.position.x -= 5
    })
  } else if (keys.left.pressed) {
    scrollOffset -= 5
      platforms.forEach((platform) => {
        platform.position.x += 5
      })
    }
  }


  // platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y 
      && player.position.y + player.height+ player.velocity.y >= platform.position.y 
      && player.position.x + player.width >= platform.position.x 
      && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0
    }
  })


  if (scrollOffset > 2000) {
    console.log('you win')
  }
}

animate()

// Event listener for movement
window.addEventListener('keydown', ({ keyCode }) => {
  // Action for "A" key
  switch (keyCode) {
    case 65: 
      console.log('left');
      keys.left.pressed = true
      break
  }

  // Action for "S" key
  switch (keyCode) {
    case 83: 
      console.log('down');
      break
  }

  // Action for "D" key
  switch (keyCode) {
    case 68: 
      console.log('right');
      keys.right.pressed = true
      break
  }

  // Action for "W" key
  switch (keyCode) {
    case 87: 
      console.log('up');
      player.velocity.y -= 20
      break
  }
});

window.addEventListener('keyup', ({ keyCode }) => {
  // Action for "A" key
  switch (keyCode) {
    case 65: 
      console.log('left');
      keys.left.pressed = false
      break
  }

  // Action for "S" key
  switch (keyCode) {
    case 83: 
      console.log('down');
      break
  }

  // Action for "D" key
  switch (keyCode) {
    case 68: 
      console.log('right');
      keys.right.pressed = false
      break
  }

  // Action for "W" key
  switch (keyCode) {
    case 87: 
      console.log('up');
      player.velocity.y = 0
      break
  }
})