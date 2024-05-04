export const load = {
    fonts : () => {
        loadFont("Round","./assets/Round9x13.ttf")
    },
    assets:()=>{
        //?immagini dei controlli
      loadSprite("up", "./assets/Arrow_Up_Key_Dark.png")
      loadSprite("down", "./assets/Arrow_Down_Key_Dark.png")
      loadSprite("left", "./assets/Arrow_Left_Key_Dark.png")
      loadSprite("right", "./assets/Arrow_Right_Key_Dark.png")
      loadSprite("space", "./assets/Space_Key_Dark.png")

      loadSprite("forest-background","./assets/Forest_Background_0.png")//* le prime virgolette sono come vogliamo riferirci (come il tag) e le seconde sono il percorso 
      loadSprite("caste", "./assets/Castle_background_0.png")
      loadSprite("sky-background-0", "./assets/Sky_Background_0.png")
      loadSprite("sky-background-1", "./assets/Sky_Background_1.png")
      loadSprite("sky-background-2", "./assets/Sky_Background_2.png")
      loadSprite("coin-icon", "./assets/Coins_UI.png")
      loadSprite("star-ico", "./assets/Stars_Ui.png")
      loadSprite("logo","./assets/Logo.png")
      loadSprite("axe", "./assets/Axe_trap.png")
      loadSprite("bridge", "./assets/Bridge.png")
      loadSprite("saw","./assets/Circular_Saw.png")
      loadSprite("player", "./assets/Player.png", {
          sliceX: 4,
          sliceY: 6,
          anims: {
            idle: {
              from: 0,
              to: 3,
              loop: true,
            },
            run: {
              from: 4,
              to: 7,
              loop: true,
            },
            "jump-up": 8,
            "jump-down": 9,
          },
        })
      loadSprite("coin", "./assets/Coin.png")
      loadSprite("spider-1", "./assets/Spider_1.png", {
        sliceX: 3,
        sliceY: 1,
        anims: {
          crawl: { from: 0, to: 2, loop: true },
          idle: 0,
        },
      })
      loadSprite("spider-2", "./assets/Spider_2.png", {
        sliceX: 3,
        sliceY: 1,
        anims: {
          crawl: { from: 0, to: 2, loop: true },
          idle: 0,
        },
      })
      loadSprite("fish", "./assets/Fish_1.png", {
        sliceX: 2,
        sliceY: 1,
        anims: {
          swim: { from: 0, to: 1, loop: true },
        },
      })

      loadSprite("flame", "./assets/Flame_1.png", {
        sliceX: 2,
        sliceY: 1,
        anims: {
          burn: { from: 0, to: 1, loop: true },
        },
      })
      
      loadSprite("grass-tileset","./assets/Grass_Tileset.png", {
          sliceX:3,
          sliceY:4,
          anims:{ //*è principalmente usata per le animazioni
              tl:0,
              tm:1,
              tr:2,
              ml:3,
              mm:4,
              mr:5,
              bl:6,
              bm:7,
              br:8,
          },
      })
      
      loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
          sliceX: 3,
          sliceY: 4,
          anims: {
            tl: 0,
            tm: 1,
            tr: 2,
            ml: 3,
            mm: 4,
            mr: 5,
            bl: 6,
            bm: 7,
            br: 8,
          },
      })
      loadSprite("water", "./assets/Water.png", {
          sliceX: 8,
          sliceY: 1,
          anims: {
            wave: {
              from: 0,
              to: 7,
              speed: 16,
              loop: true,
            },
            "wave-reversed": {
              from: 7,
              to: 0,
              speed: 16,
              loop: true,
            },
          },
        })
      loadSprite("brick-tileset", "./assets/Brick_Tileset.png", {
          sliceX: 3,
          sliceY: 4,
          anims: {
            tl: 0,
            tm: 1,
            tr: 2,
            ml: 3,
            mm: 4,
            mr: 5,
            bl: 6,
            bm: 7,
            br: 8,
          },
        })
      loadSprite("brick-oneway-tileset", "./assets/Brick_Oneway.png", {
          sliceX: 3,
          sliceY: 4,
          anims: {
            tl: 0,
            tm: 1,
            tr: 2,
            ml: 3,
            mm: 4,
            mr: 5,
            bl: 6,
            bm: 7,
            br: 8,
          },
        })
      loadSprite("lava", "./assets/Lava.png", {
        sliceX: 8,
        sliceY: 1,
        anims: {
          wave: {
            from: 0,
            to: 7,
            speed: 16,
            loop: true,
          },
          "wave-reversed": {
            from: 7,
            to: 0,
            speed: 16,
            loop: true,
          },
        },
      })
      loadSprite("rock-tileset", "./assets/Grass_Rock_Tileset.png", {
        sliceX: 3,
        sliceY: 4,
        anims: {
          tl: 0,
          tm: 1,
          tr: 2,
          ml: 3,
          mm: 4,
          mr: 5,
          bl: 6,
          bm: 7,
          br: 8,
        },
      })
      loadSprite("rock-oneway-tileset", "./assets/Grass_Rock_Oneway.png", {
        sliceX: 3,
        sliceY: 4,
        anims: {
          tl: 0,
          tm: 1,
          tr: 2,
          ml: 3,
          mm: 4,
          mr: 5,
          bl: 6,
          bm: 7,
          br: 8,
        },
      })
      loadSprite("clouds", "./assets/Clouds.png", {
        sliceX: 8,
        sliceY: 1,
        anims: {
          wave: {
            from: 0,
            to: 7,
            speed: 16,
            loop: true,
          },
          "wave-reversed": {
            from: 7,
            to: 0,
            speed: 16,
            loop: true,
          },
        },
      })
      loadSprite("portale", "./assets/PPortal.png",{
        sliceX:8,
        sliceY:3,
        anims: {
          idle:{
            from : 0,
            to : 7,
            speed:16,
            loop:true,
          },
          open:{
            from:8,
            to:15,
            speed:16,
            loop:true,
          },
          close:{
            from:16,
            to:21,
            speed:16,
            loop:false,
          }
        }
      })
      loadSprite("bird", "./assets/Bird_2.png", {
        sliceX: 3,
        sliceY: 1,
        anims: {
          fly: {
            from: 0,
            to: 2,
            speed: 9,
            loop: true,
          },
        },
      })
    },
    sounds: () => {
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
        loadSound("jump", "./sounds/jump.wav")
        loadSound("hit", "./sounds/hit.wav")
        loadSound("coin", "./sounds/coin.wav")
        loadSound("spider-atk", "./sounds/spider-attack.mp3")
        loadSound("swinging-axe", "./sounds/swinging-axe.mp3")
        loadSound("saw", "./sounds/saw.wav")
        loadSound("dive", "./sounds/dive.wav")
    }
}