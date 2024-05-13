export const load = {
    fonts : () => {
        loadFont("Round","./assets/Round9x13.ttf")
        loadFont("creepy", "./assets/creepy.ttf")
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
      loadSprite("skybg", "./assets/skybg.jpeg")
      loadSprite("coin-icon", "./assets/Coins_UI.png")
      loadSprite("star-ico", "./assets/quore.png")
      loadSprite("logo","./assets/Logos.png")
      loadSprite("axe", "./assets/Axe_trap.png")
      loadSprite("bridge", "./assets/Bridge.png")
      loadSprite("saw","./assets/Circular_Saw.png")
      //sfondo nero
      loadSprite("blackbg","./assets/blackbg.png")
      //sfondo lvl segreto
      loadSprite("bga", "./assets/sfondo/1.png")
      loadSprite("bgb", "./assets/sfondo/2.png")
      loadSprite("bgc", "./assets/sfondo/3.png")
      loadSprite("bgd", "./assets/sfondo/4.png")
      //sfondo vittoria
      loadSprite("trofeo", "./assets/tho_bg.jpg")
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
      loadSprite("calc", "./assets/calclulator.png")
      loadSprite("flame", "./assets/Flame_1.png", {
        sliceX: 2,
        sliceY: 1,
        anims: {
          burn: { from: 0, to: 1, loop: true },
        },
      })
      loadSprite("button", "./assets/button.png")
      
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
      loadSprite("ppl","./assets/Cppl.png",{
        sliceX:6,
        sliceY:8,
        anims:{
          idle:{
            from:0,
            to:4,
            loop:true
          },
          walk:{
            from:6,
            to:11,
            loop:true
          },
          run:{
            from:12,
            to:17,
            loop:true
          },
          "jump-up":{
            from:41,
            to:47,
            loop:false
          },
          "jump-down":{
            from:46,
            to:47,
            loop:false
          }
        }
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

        //? tutte le carte caricate come numero e ognuna ha primo indice che è il valore e il secondo valore è il seme
      loadSprite("carte","./assets/carte.png",{
        sliceX:6,
        sliceY:10,
        anims:{
          "qp" : 0,
          "4p":1,
          "8q":2,
          "ad":3,
          "qf":4,
          "4f":5,
          "kp":6,
          "3p":7,
          "7q":8,
          "10d":9,
          "kf":10,
          "3f":11,
          "jf":12,
          "2p":13,
          "6q":14,
          "9d":15,
          "jf":16,
          "2q":17,
          "ap":18,
          "5q":20,
          "8d":21,
          "af":22,
          "10p":24,
          "qq":25,
          "4q":26,
          "7d":27,
          "10f":28,
          "9p":30,
          "kq":31,
          "3q":32,
          "6d":33,
          "9f":34,
          "8p":36,
          "jq":37,
          "2f":38,
          "5d":39,
          "8f":40,
          "7p":42,
          "aq":43,
          "qd":44,
          "4d":45,
          "7f":46,
          "6p":48,
          "10q":49,
          "kd":50,
          "3d":51,
          "6f":52,
          "5p":54,
          "9q":55,
          "jd":56,
          "2d":57,
          "5f":58,
        }
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
      loadSprite("Cloud-tileset", "./assets/Cloud_Tileset.png", {
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
      loadSprite("portalePurple", "./assets/PPortal.png",{
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
      loadSprite("portaleGreen", "./assets/GPortal.png",{
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
      loadSprite("platform", "./assets/Platform.png",{
        sliceX:3,
        sliceY:1,
        anims:{
          l:0,
          m:1,
          r:2
        }
      })
      loadSprite("tile", "./assets/Leaf_Tileset.png")
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
        //ambientali
        loadSound("water-ambience", "./sounds/water-ambience.mp3")
        loadSound("lava-ambience", "./sounds/lava.wav")
        loadSound("strong-wind", "./sounds/strong-wind.wav")
    }
}