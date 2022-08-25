// Platform import assets
import platform from '../img/platform1.png'
import platform2 from '../img/tileset.png'
import platformSmall from '../img/platform2.png'
import platformEnd from '../img/platformEnd.png'
import floatingPlatform from '../img/floatingPlatform.png'
import bigPlatformLeft from '../img/bigPlatformLeft.png'
import bridgeStart from '../img/bridgeStart.png'
import bridgeMiddle from '../img/bridgeMiddle.png'
import bridgeEnd from '../img/bridgeEnd.png'
import clouds from '../img/clouds.png'
import background from '../img/sky.png'
import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'
import sea from '../img/sea.png'
import land from '../img/far-grounds.png'
import tree from '../img/tree.png'


const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1300
canvas.height = 576

const gravity = 1.5

class Player {
  constructor() {
    this.speed = 10
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

let platformImage = createImage(platform)
let platformImageMiddle = createImage(platform2)
let platformEndImage = createImage(platformEnd)
let platformSmallImage = createImage(platformSmall)
let bigPlatformLeftImage = createImage(bigPlatformLeft)
let floatingPlatformImage = createImage(floatingPlatform)
let bridgeStartImage = createImage(bridgeStart)
let bridgeMiddleImage = createImage(bridgeMiddle)
let bridgeEndImage = createImage(bridgeEnd)
let backgroundImage = createImage(background)
let seaImage = createImage(sea)
let cloudImage = createImage(clouds)
let landImage = createImage(land)
let treeImage = createImage(tree)


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

  platformImageMiddle = createImage(platform2)
  platformEndImage = createImage(platformEnd)
  platformImage = createImage(platform)
  platformSmallImage = createImage(platformSmall)
  floatingPlatformImage = createImage(floatingPlatform)
  bigPlatformLeftImage = createImage(bigPlatformLeft)
  bridgeStartImage = createImage(bridgeStart)
  bridgeMiddleImage = createImage(bridgeMiddle)
  bridgeEndImage = createImage(bridgeEnd)


  backgroundImage = createImage(background)
  cloudImage = createImage(clouds)
  seaImage = createImage(sea)

  treeImage = createImage(tree)



  player = new Player()

  platforms = [
    // platforms
    // new Platform({ x: platformImageMiddle.width * 3 -15, y: 323, image: platformEndImage }),
    // new Platform({ x: -2, y: 323, image: platformImageMiddle }),
    // new Platform({ x: platformImageMiddle.width - 7, y: 323, image: platformSmallImage }),
    // new Platform({ x: platformImageMiddle.width * 2 - 14, y: 323, image: platformImageMiddle }),
    // new Platform({ x: platformImageMiddle.width * 3 , y: 325, image: bridgeStartImage}),
    // new Platform({ x: platformImageMiddle.width * 4 -15, y: 323, image: bridgeMiddleImage}),
    // new Platform({ x: platformImageMiddle.width * 4 +49, y: 323, image: bridgeMiddleImage}),
    // new Platform({ x: platformImageMiddle.width * 5 +10, y: 323, image: bridgeMiddleImage}),
    // new Platform({ x: platformImageMiddle.width * 6 -24, y: 323, image: bridgeMiddleImage}),
    // new Platform({ x: platformImageMiddle.width * 7 -55, y: 325, image: bridgeEndImage}),
    
    //floating Platforms 
    new Platform({ x: 700, y: 130, image: floatingPlatformImage}),

    new Platform({ x: 20, y: -6, image: treeImage})









    //new Platform({ x: -30, y: 399, image: platformImage }), 

    // new Platform({ x: platformImage.width * 2 + 100, y:470, image: platformImage }),
    // new Platform({ x: platformImage.width * 3 + 300, y:470, image: platformImage }),
    // new Platform({ x: platformImage.width * 4 + 300 - 2, y:470, image: platformImage }),
    // new Platform({ x: platformImage.width * 5 + 700 - 2, y:470, image: platformImage })
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
    new GenericObject({ x: 0, y: 384, image: seaImage }),
    new GenericObject({ x: seaImage.width, y: 384, image: seaImage }),
    new GenericObject({ x: seaImage.width * 2, y: 384, image: seaImage }),
    new GenericObject({ x: seaImage.width * 3, y: 384, image: seaImage }),
    new GenericObject({ x: seaImage.width * 4, y: 384, image: seaImage }),
    new GenericObject({ x: seaImage.width * 5, y: 384, image: seaImage }),
    new GenericObject({ x: seaImage.width * 6, y: 384, image: seaImage }),
    new GenericObject({ x: seaImage.width * 7, y: 384, image: seaImage }),
    new GenericObject({ x: seaImage.width * 8, y: 384, image: seaImage }),
    new GenericObject({ x: seaImage.width * 9, y: 384, image: seaImage }),

    // foreground land
    new GenericObject({ x: 850, y: 435, image: landImage}),

 
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
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed
  } else if ((keys.left.pressed && player.position.x > 100)
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
      genericObject.position.x -= player.speed *.60
    })
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= player.speed
      platforms.forEach((platform) => {
        platform.position.x += player.speed
      })
      genericObject.forEach(genericObject => {
        genericObject.position.x += player.speed *.60
      })
    }
  }


  // platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y +2
      && player.position.y + player.height + player.velocity.y >= platform.position.y +2 
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
      player.velocity.y -= 21
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