import kaboom from "./libs/kaboom.mjs";
import { level1Layout, level1Mapping } from "./content/lvl1/Lvl1Lay.js";
import { Level } from "./utils/Level.js";
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/Loader.js";
import { Player } from "./entiny/Player.js";
import { attachedCamera } from "./utils/Camera.js"
import { level1Config } from "./content/lvl1/confing.js";
import { level2Layout, level2Mappings } from "./content/lvl2/Lvl2Lay.js";
import { level2Config } from "./content/lvl2/config.js";
import { level3Layout, level3Mappings } from "./content/lvl3/Lvl3Lay.js";
import { level3Config } from "./content/lvl3/config.js";
import { Spiders } from "./entiny/Spiders.js";
import { Projectiles } from "./entiny/Projectiles.js";

kaboom({
    width:1280,
    height:720,
    letterbox:true,  //!Tiene fissi i parametri adattandosi alla schermata

})
load.fonts()
load.sounds()
load.assets()

//*livelli
const scenes= {
    menu:()=>{ //menù principale
        // add([text("test"),pos(500,500),color(0,0,0)])
        uiManager.displayMainMenu()
    },
    Controls:()=>{
        uiManager.displayControlsMenu()
    },
    1:()=>{
        setGravity(level1Config.gravity)
        const lvl1 = new Level()
        lvl1.drawBackground("forest-background")
        lvl1.drawMapLayout(level1Layout, level1Mapping)
        const player = new Player(level1Config.startPosX,
        level1Config.startPosY,
        level1Config.playerSpeed,
        level1Config.jumpForce,
        level1Config.nlive,
        1,
        false)
        player.enablepassthroug()
        player.update()
        player.enableCoin()
        player.enableMobVuln()
        attachedCamera(player.gameObj, 0, 200)
        const spiders = new Spiders(
            level1Config.spiderPositions.map(spiderPos => spiderPos()), //posizione
            level1Config.spiderRange,  //di quanto si muove in pixel
            level1Config.spiderSpeeds, //velocità
            level1Config.spiderType //tipo ragno
        )
        spiders.setMovementPattern()
        spiders.enablePassthrough()
        const fish = new Projectiles(
            level1Config.fishPositions.map(fishPos => fishPos()),
            level1Config.fishAmplitudes,
            "fish"
        )
        fish.setMovPattern()
        
        lvl1.drawWaves("water","wave-reversed")
        // uiManager.darkbg() // *questo è per lo sfondo dell UI
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)
        uiManager.displayLivesCount()
        player.updatelivesCount(uiManager.livesCountUI)
        
    },
    2:()=>{
        setGravity(level2Config.gravity)
        const lvl2 = new Level()
        lvl2.drawBackground("caste")
        lvl2.drawMapLayout(level2Layout, level2Mappings)
        const spiders = new Spiders(
            level2Config.spiderPositions.map(spiderPos => spiderPos()), //posizione
            level2Config.spiderRange,  //di quanto si muove in pixel
            level2Config.spiderSpeeds, //velocità
            level2Config.spiderType
        )
        spiders.setMovementPattern()
        spiders.enablePassthrough()
        
        const flames = new Projectiles(
            level2Config.flamePositions.map(flamePos => flamePos()),
            level2Config.flameRange,
            "flame"
        )
        flames.setMovPattern()
        const saw = new Saws(
            level2Config.sawPositions.map(SawPos => SawPos()),
            level2Config.sawRanges
        )
        saw.SetMovPatt()
        const axes = new Axes(
            level2Config.axesPositions.map(axesPos => axesPos()),
            level2Config.axesSwingDuration
        )
        axes.setMovementPattern()

        const player = new Player(level2Config.startPosX,
        level2Config.startPosY,
        level2Config.playerSpeed,
        level2Config.jumpForce,
        level2Config.nlive,
        2,
        false)

        player.enablepassthroug()
        player.update()
        player.enableCoin()
        player.enableMobVuln()

        attachedCamera(player.gameObj, 0, 200)
        lvl2.drawWaves("lava","wave-reversed")
        // uiManager.darkbg() // *questo è per lo sfondo dell UI
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)
        uiManager.displayLivesCount()
        player.updatelivesCount(uiManager.livesCountUI)  
    },
    3:() =>{
        setGravity(level3Config.gravity)
        const lvl3 = new Level()
        lvl3.drawBackground("sky-background-0")
        lvl3.drawBackground("sky-background-1")
        lvl3.drawBackground("sky-background-2")
        lvl3.drawMapLayout(level3Layout, level3Mappings)
        const bird = new Birds(
            level3Config.birdPositions.map(birdPos => birdPos()),
            level3Config.birdRanges
        )
        bird.setMovementPattern()
        const player = new Player(level3Config.startPosX,
        level3Config.startPosY,
        level3Config.playerSpeed,
        level3Config.jumpForce,
        level3Config.nlive,
        3,
        true) //indica che è l'ultimo livello
        player.enablepassthroug()
        player.update()
        player.enableCoin()
        player.enableMobVuln()
        attachedCamera(player.gameObj, 0, 200)
        lvl3.drawWaves("clouds","wave")
        uiManager.darkbg() // *questo è per lo sfondo dell UI
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)
        uiManager.displayLivesCount()
        player.updatelivesCount(uiManager.livesCountUI)  
    },
    segreto:()=>{

    },
    gameover:()=>{
        
    },
    end:()=>{

    }
};

for(const key in scenes){
    scene(key, scenes[key])
}
go("menu")