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
        loadSprite("logo","./assets/Logo.png")
        loadSprite("coin", "./assets/Coin.png")
        loadSprite("bridge", "./assets/Bridge.png")
        loadSprite("grass-tileset","./assets/Grass_Tileset.png", {
            sliceX:3,
            sliceY:4,
            anims:{ //*è principalmente usata per le animazioni
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
    },
    sounds: () => {
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
    }
}