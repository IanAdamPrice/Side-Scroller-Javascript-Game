// Platform import assets

import floatingPlatform from '../img/floatingPlatform.png'
import floatingPlatform2 from '../img/floatingPlatform2.png'
import bigPlatformLeft from '../img/bigPlatformLeft.png'
import bigPlatformMiddle from '../img/bigPlatformMiddle.png'
import bridge from '../img/bridge.png'
import clouds from '../img/clouds.png'
import background from '../img/sky.png'
import pillar from '../img/pillar.png'

import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'
import sea from '../img/sea.png'
import land from '../img/far-grounds.png'

import tree from '../img/tree.png'


const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 900
canvas.height = 600

const gravity = 1.5

class Player {
  constructor() {
    this.speed = 7
    this.position = {
      x: 100,
      y: 100
    }
    this.velocity = {
      x: 0,
      y: 0
    }

    this.width = 54
    this.height = 70

    this.image = createImage(spriteStandRight)
    this.frames = 0
    this.sprites = {
      stand: {
        right: createImage(spriteStandRight),
        left: createImage(spriteStandLeft),
        cropWidth: 54,
        width: 54
      },
      run: {
        right: createImage(spriteRunRight),
        left: createImage(spriteRunLeft),
        cropWidth: 68,
        width: 68
      }
    }

    this.currentSprite = this.sprites.stand.right
    this.currentCropWidth = 54
  }

  draw() {
    c.drawImage(
      this.currentSprite, 
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      93,
      this.position.x, 
      this.position.y, 
      this.width, 
      this.height)
  }

  update() {
    this.frames++
    if (this.frames > 39 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) 
      this.frames = 0
    else if (this.frames > 39 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) 
      this.frames = 0
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y


    if (this.position.y + this.height + this.velocity.y <= canvas.height)
    this.velocity.y += gravity
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

class GenericObject {
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

function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  return image
}


let bigPlatformLeftImage = createImage(bigPlatformLeft)
let floatingPlatformImage = createImage(floatingPlatform)
let floatingPlatform2Image = createImage(floatingPlatform2)
let bigplatformMiddleImage = createImage(bigPlatformMiddle)
let bridgeImage = createImage(bridge)
let backgroundImage = createImage(background)
let seaImage = createImage(sea)
let cloudImage = createImage(clouds)
let landImage = createImage(land)
let treeImage = createImage(tree)
let pillarImage = createImage(pillar)


let player = new Player()

let platforms = []

let genericObject = []

let lastKey

let keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}

let scrollOffset = 0

function init() {


  floatingPlatformImage = createImage(floatingPlatform)
  floatingPlatform2Image = createImage(floatingPlatform2)

  bigPlatformLeftImage = createImage(bigPlatformLeft)
  bigplatformMiddleImage = createImage(bigPlatformMiddle)
  bridgeImage = createImage(bridge)


  backgroundImage = createImage(background)
  cloudImage = createImage(clouds)
  seaImage = createImage(sea)
  landImage = createImage(land)


  treeImage = createImage(tree)
  pillarImage = createImage(pillar)



  player = new Player()

  platforms = [
    // platforms
    new Platform({ x: 815, y: 0, image: pillarImage}),

    new Platform({x: 0, y: 315, image: bigPlatformLeftImage}),
    new Platform({x: bigPlatformLeftImage.width + bridgeImage.width - 205, y: 315, image: bigplatformMiddleImage}),
    new Platform({x: bigPlatformLeftImage.width -40, y: 315, image: bridgeImage}),
    
    
    //floating Platforms 
    new Platform({ 
      x: bigPlatformLeftImage.width + bridgeImage.width + bigplatformMiddleImage.width , 
      y: 265, 
      image: floatingPlatformImage}),
    new Platform({ x: 2100, y: 330, image: floatingPlatform2Image}),


    new Platform({ x: 20, y: 35, image: treeImage}),

  ]

  genericObject = [
    // platform fill
    

    //sky assets
    new GenericObject({ x: 0, y: -1, image: backgroundImage }),
    new GenericObject({ x: backgroundImage.width  , y: 0, image: backgroundImage }),
    new GenericObject({ x: backgroundImage.width * 2 , y: 0, image: backgroundImage }),
    new GenericObject({ x: backgroundImage.width * 3 , y: 0, image: backgroundImage }),
    new GenericObject({ x: backgroundImage.width * 4 , y: 0, image: backgroundImage }),
    new GenericObject({ x: backgroundImage.width * 5 , y: 0, image: backgroundImage }),
    new GenericObject({ x: backgroundImage.width * 6 , y: 0, image: backgroundImage }),
    new GenericObject({ x: backgroundImage.width * 7 , y: 0, image: backgroundImage }),
    new GenericObject({ x: backgroundImage.width * 8 , y: 0, image: backgroundImage }),
    new GenericObject({ x: backgroundImage.width * 9 , y: 0, image: backgroundImage }),
    
    // Cloud Assets
    new GenericObject({ x: 0, y: 200, image: cloudImage}),
    new GenericObject({ x: cloudImage.width, y: 200, image: cloudImage}),
    new GenericObject({ x: cloudImage.width * 2, y: 200, image: cloudImage}),
    new GenericObject({ x: cloudImage.width * 3, y: 200, image: cloudImage}),
    new GenericObject({ x: cloudImage.width * 4, y: 200, image: cloudImage}),
    new GenericObject({ x: cloudImage.width * 5, y: 200, image: cloudImage}),
    new GenericObject({ x: cloudImage.width * 6, y: 200, image: cloudImage}),


    // Sea assets
    new GenericObject({ x: 0, y: 420, image: seaImage }),
    new GenericObject({ x: seaImage.width, y: 420, image: seaImage }),
    new GenericObject({ x: seaImage.width * 2, y: 420, image: seaImage }),
    new GenericObject({ x: seaImage.width * 3, y: 420, image: seaImage }),
    new GenericObject({ x: seaImage.width * 4, y: 420, image: seaImage }),
    new GenericObject({ x: seaImage.width * 5, y: 420, image: seaImage }),
    new GenericObject({ x: seaImage.width * 6, y: 420, image: seaImage }),
    new GenericObject({ x: seaImage.width * 7, y: 420, image: seaImage }),
    new GenericObject({ x: seaImage.width * 8, y: 420, image: seaImage }),
    new GenericObject({ x: seaImage.width * 9, y: 420, image: seaImage }),

    // foreground land
    new GenericObject({ x: 850, y: 465, image: landImage}),


 
  ]
  scrollOffset = 0
}
// Player movement
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)
  
  genericObject.forEach(genericObject => {
    genericObject.draw()
  })
  platforms.forEach((platform) => {
    platform.draw()
  })
  player.update()


  // Player movement left & right
  if (keys.right.pressed && player.position.x < 200) {
    player.velocity.x = player.speed
  } else if ((keys.left.pressed && player.position.x > 400)
    || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed
  } else {
    player.velocity.x =0

  // Background scrolling
  if (keys.right.pressed) {
    scrollOffset += player.speed
    platforms.forEach((platform) => {
      platform.position.x -= player.speed
    })
    genericObject.forEach(genericObject => {
      genericObject.position.x -= player.speed *.50
    })
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= player.speed
      platforms.forEach((platform) => {
        platform.position.x += player.speed
      })
      genericObject.forEach(genericObject => {
        genericObject.position.x += player.speed *.50
      })
    }
  }


  // platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y +40
      && player.position.y + player.height + player.velocity.y >= platform.position.y +40 
      && player.position.x + player.width >= platform.position.x 
      && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0
    }
  })

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1 
    player.currentSprite = player.sprites.run.right
    player.currentCropWidth = player.sprites.run.cropWidth
    player.width = player.sprites.run.width
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left){
    player.currentSprite = player.sprites.run.left
    player.currentCropWidth = player.sprites.run.cropWidth
    player.width = player.sprites.run.width
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left){
    player.currentSprite = player.sprites.stand.left
    player.currentCropWidth = player.sprites.stand.cropWidth
    player.width = player.sprites.stand.width
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right){
    player.currentSprite = player.sprites.stand.right
    player.currentCropWidth = player.sprites.stand.cropWidth
    player.width = player.sprites.stand.width
  }


  if (scrollOffset > 2000) {
    console.log('you win')
  }

  // lose condition
  if (player.position.y > canvas.height) {
    init()
  }
}

init()
animate()

// Event listener for movement
window.addEventListener('keydown', ({ keyCode }) => {
  // Action for "A" key
  switch (keyCode) {
    case 65: 
      console.log('left');
      keys.left.pressed = true
      lastKey = 'left'
      break
  
  // Action for "S" key
    case 83: 
      console.log('down');
      break
  
  // Action for "D" key
    case 68: 
      console.log('right');
      keys.right.pressed = true
      lastKey = 'right'
      break
  
  // Action for "W" key
    case 87: 
      if (event.repeat) {return}
      console.log('up');
      player.velocity.y -= 19
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

  // Action for "S" key
    case 83: 
      console.log('down');
      break
  
  // Action for "D" key
    case 68: 
      console.log('right');
      keys.right.pressed = false
      break
  
  // Action for "W" key
    case 87: 
      console.log('up');

      break
  }
})