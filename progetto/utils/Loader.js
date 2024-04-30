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
        loadSprite("coin-icon", "./assets/Coins_UI.png")
        loadSprite("star-ico", "./assets/Stars_Ui.png")
        loadSprite("logo","./assets/Logo.png")
        loadSprite("coin", "./assets/Coin.png")
        loadSprite("bridge", "./assets/Bridge.png")
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
      
    },
    sounds: () => {
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
        loadSound("jump", "./sounds/jump.wav")
        loadSound("hit", "./sounds/hit.wav")
        loadSound("coin", "./sounds/coin.wav")
    }
}