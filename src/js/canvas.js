// Platform import assets
import {
  isOnTopOfPlatform, 
  collisionTop, 
  isOnTopOfPlatformCircle, 
  createImage, 
  createImageAsync,
  hitBottomOfPlatform,
  hitSideOfPlatform } from './utils.js'
import floatingPlatform from '../img/floatingPlatform.png'
import block from '../img/floatingPlatform2.png'
import floatingPlatform3 from '../img/floatingPlatform3.png'

import bigPlatformLeft from '../img/bigPlatformLeft.png'
import bigPlatformMiddle from '../img/bigPlatformMiddle.png'
import bridge from '../img/bridge.png'
import cross1 from '../img/cross1.png'
import clouds from '../img/clouds.png'
import background from '../img/sky.png'
import pillar from '../img/pillar.png'
import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'
import jumpRight from '../img/jumpRight.png'
import jumpLeft from '../img/jumpLeft.png'
import enemyWalkRight from '../img/enemyWalkRight.png'
import enemyWalkLeft from '../img/enemyWalkLeft.png'
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
      x: 140,
      y: 283
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
      },
      jump: {
        right: createImage(jumpRight),
        left: createImage(jumpLeft),
        cropWidth: 49,
        width: 50
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
    else if (this.frames > 7 &&  (this.currentSprite === this.sprites.jump.right || this.currentSprite === this.sprites.jump.left))
      this.frames = 0


    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y


    if (this.position.y + this.height + this.velocity.y <= canvas.height)
    this.velocity.y += gravity
  }
}

class Platform {
  constructor({ x, y, image, block }) {
    this.position = {
      x,
      y 
    }

    this.image = image
    this.width = image.width
    this.height = image.height
    this.block = block
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

class Enemy {
  constructor({position, velocity, distance = {
      limit:  50,
      traveled: 0
  }}) {
    this.position ={
      x: position.x,
      y: position.y
    }

    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }

    this.width = 46
    this.height = 74

    this.image = createImage(enemyWalkLeft)
    this.frames = 0

    this.distance = distance
  }

  draw() {
    //c. fillStyle = 'red'
    //c.fillRect(this.position.x, this.position.y, this.width, this.height)
    c.drawImage(
      this.image, 
      46 * this.frames,
      0,
      46,
      74,
      this.position.x, 
      this.position.y, 
      this.width, 
      this.height)
  }

  update() {
    this.frames++
    if (this.frames >= 29) this.frames = 0
    this.draw()

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity

    //walk the enemy back and forth
    this.distance.traveled += Math.abs(this.velocity.x)

    if (this.distance.traveled > this.distance.limit) {
      this.distance.traveled = 0
      this.velocity.x = -this.velocity.x
    }
  }
}

class Particle {
  constructor({ position, velocity, radius}) {
    this.position = {
      x: position.x,
      y: position.y
    }

    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }

    this.radius = 3
    this.ttl = 300
  }

    draw() {
      c.beginPath()
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)    
      c.fillStyle = '#BDAB94'
      c.fill()
      c.closePath()
    }


  update() {
    this.ttl--
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.radius + this.velocity.y <= canvas.height)
    this.velocity.y += gravity * 0.1
  }
}

let bigPlatformLeftImage 
let floatingPlatformImage 
let blockImage 
let floatingPlatform3Image 
let bigplatformMiddleImage 
let bridgeImage 
let crossImage1 
let backgroundImage 
let seaImage 
let cloudImage 
let landImage 
let treeImage 
let pillarImage 


let player = new Player()
let platforms = []
let genericObject = []
let enemys = []
let particles = []

let lastKey
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}

let scrollOffset = 0


async function init() {

  floatingPlatformImage = await createImageAsync(floatingPlatform)
  blockImage = await createImageAsync(block)
  floatingPlatform3Image = await createImageAsync(floatingPlatform3)
  bigPlatformLeftImage = await createImageAsync(bigPlatformLeft)
  bigplatformMiddleImage = await createImageAsync(bigPlatformMiddle)
  bridgeImage = await createImageAsync(bridge)
  crossImage1 = await createImageAsync(cross1)

  backgroundImage = await createImageAsync(background)
  cloudImage = await createImageAsync(clouds)
  seaImage = await createImageAsync(sea)
  landImage = await createImageAsync(land)

  treeImage = await createImageAsync(tree)
  pillarImage = await createImageAsync(pillar)

  player = new Player()

  // all enemy placement
  enemys = [
    new Enemy({
      position: {
        x: 1200, 
        y: 100
      }, 
      velocity: { 
        x: -.3, 
        y: 0, 
      },
      distance: {
        limit: 200,
        traveled: 0
      }
    })
  ]

  // particle placement
  particles = []

  // all platforms
  platforms = [
    // platforms
    new Platform({ 
      x: 815, 
      y: 0, 
      image: pillarImage
    }),

    new Platform({
      x: 0, 
      y: 315, 
      image: bigPlatformLeftImage
    }),

    new Platform({
      x: bigPlatformLeftImage.width + bridgeImage.width - 205, 
      y: 315, 
      image: bigplatformMiddleImage
    }),

    new Platform({
      x: bigPlatformLeftImage.width -40, 
      y: 315, 
      image: bridgeImage
    }),
    
    
    //floating Platforms 
    new Platform({
      x: 800,
      y: 180,
      image: blockImage,
      block: true
    }),
    new Platform({ 
      x: bigPlatformLeftImage.width + bridgeImage.width + bigplatformMiddleImage.width -20 , 
      y: 265, 
      image: floatingPlatformImage}),
    new Platform({ x: 2100, y: 330, image: floatingPlatform3Image}),


    // visual aid
    new Platform({ x: 20, y: 35, image: treeImage}),
    new Platform({x: 200, y: 315, image: crossImage1}),


  ]

  // all background object (affected by scroll offset)
  genericObject = [
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

  enemys.forEach((enemy, index) => {
    enemy.update()

    // enemy stomp
    if (
      collisionTop({
      object1: player,
      object2: enemy
      })
    ) {
        for (let i = 0; i < 50; i++) {
          particles.push( 
            new Particle({
              position: {
                x: enemy.position.x + enemy.width / 2,
                y: enemy.position.y + enemy.width / 2
              },
              velocity: {
                x: (Math.random() - 0.5) * 2,
                y: Math.random() - 0.5 * 2
              }, 
              radius: Math.random() * 3
            })
          )
        }
        player.velocity.y -= 30
        setTimeout(() => {  
          enemys.splice(index, 1)      
        }, 0)
      } else if (
        player.position.x + player.width >= enemy.position.x && 
        player.position.y + player.height >= enemy.position.y && 
        player.position.x <= enemy.position.x + enemy.width
      )
      init()
        
  })

  particles.forEach((particle) => {
    particle.update()
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
    enemys.forEach((enemy) => {
      enemy.position.x -= player.speed
    })
    particles.forEach((particle) => {
      particle.position.x -= player.speed
    })
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= player.speed
      platforms.forEach((platform) => {
        platform.position.x += player.speed
      })
      genericObject.forEach(genericObject => {
        genericObject.position.x += player.speed *.50
      })
      enemys.forEach((enemy) => {
        enemy.position.x += player.speed
      })
      particles.forEach((particle) => {
        particle.position.x += player.speed
      })
    }
  }


  // platform collision detection
  platforms.forEach((platform) => {
    if (
      isOnTopOfPlatform({
        object: player,
        platform
    })
    ) {
      player.velocity.y = 0
    }

    if (platform.block && hitBottomOfPlatform({
      object: player, 
      platform
    })) {
      player.velocity.y = - player.velocity.y 
    }

    if (
      platform.block && hitSideOfPlatform({
        object: player,
        platform
      })
    ) {
      player.velocity.x = 0
    }

    // particles bounce
    particles.forEach((particle, index) => {
      if (
        isOnTopOfPlatformCircle({
          object: particle,
          platform
      })
      ) {
        particle.velocity.y = -particle.velocity.y * .5

        if (particle.radius - 0.4 < 0) 
          particles.splice(index,1)
        else particle.radius -= 0.4
      }
      if (particle.ttl < 0) 
        particles.splice(index,1)

    })

    enemys.forEach(enemy => {
      if ( isOnTopOfPlatform({
        object: enemy,
        platform
        })
      )
        enemy.velocity.y = 0
    })
  })

  // sprite switching
  if (player.velocity.y === 0){
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
      console.log('up');
      if (player.velocity.y === 0) 
      player.velocity.y = -20
      if (lastKey === 'right')
        player.currentSprite = player.sprites.jump.right
      else
        player.currentSprite = player.sprites.jump.left
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