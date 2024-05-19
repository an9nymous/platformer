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
import { Axes } from "./entiny/Axes.js"
import { Saws } from "./entiny/Saw.js"
import { Projectiles } from "./entiny/Projectiles.js";
import { Birds } from "./entiny/Birds.js";
import { levelSLayout, levelSMappings } from "./content/lvlsecreto/LvlsegLay.js";
import { levelSConfig } from "./content/lvlsecreto/config.js"
import { calcol } from "./utils/Calcol.js";
import { level4Config } from "./content/lvl4/config.js";

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
    testo:()=>{
        uiManager.displayTextMenu()
    },
    menu:()=>{ //menù principale
        // add([text("test"),pos(500,500),color(0,0,0)])
        uiManager.displayMainMenu()
    },
    Controls:()=>{
        uiManager.displayControlsMenu()
    },
    1:()=>{
        const ambience1 = play("water-ambience", {volume : 0.1, loop:true})
        onSceneLeave(()=>{
            ambience1.paused = true
        })
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
        add([
            text(3,{
                size:20 
            }),
            color(148, 110, 35),
            pos(5003,145)
        ])
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
        const ambience2 = play("lava-ambience", {volume : 0.1, loop:true})
        onSceneLeave(()=>{
            ambience2.paused = true
        })
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
        add([
            text(9,{
                size:16 
            }),
            color(255,0,0),
            pos(5003,490)
        ])
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
        const ambience3 = play("strong-wind", {volume : 0.1, loop:true})
        onSceneLeave(()=>{
            ambience3.paused = true
        })
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
        add([
            text(2,{
                size:20 
            }),
            color(235, 236, 242),
            pos(center().x,center().y-150),
            fixed()
        ])
        uiManager.darkbg() // *questo è per lo sfondo dell UI
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)
        uiManager.displayLivesCount()
        player.updatelivesCount(uiManager.livesCountUI)  
    },
    4:()=>{
        //livello scuola
        
        const player = new Player(
            level4Config.startPosX,
            level4Config.startPosY,
            level4Config.playerSpeed,
            level4Config.jumpForce,
            level4Config.nlive,
            4,
            true)
        player.enablepassthroug()
        player.update()
        player.enableCoin()
        calcol.EnableCalcul()
        attachedCamera(player.gameObj, 0, 200)
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)
        uiManager.displayLivesCount()
        player.updatelivesCount(uiManager.livesCountUI)
    },
    segreto:()=>{
        const lvlS = new Level()
        lvlS.drawBackground("bga")
        lvlS.drawBackground("bgb")
        lvlS.drawBackground("bgc")
        lvlS.drawBackground("bgd")
        lvlS.drawMapLayout(levelSLayout, levelSMappings)
        const player = new Player(levelSConfig.startPosX,
            levelSConfig.startPosY,
            levelSConfig.playerSpeed,
            levelSConfig.jumpForce,
            levelSConfig.nlive,
            1,
            false)
        player.enablepassthroug()
        player.update()
        player.enableCoin()
        calcol.EnableCalcul()
        attachedCamera(player.gameObj, 0, 200)
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)
        uiManager.displayLivesCount()
        player.updatelivesCount(uiManager.livesCountUI)
        
    },
    nuovo:()=>{
        calcol.EnableCalcul()
        add([sprite("blackbg"),scale(4)])
        add([sprite("calc"),scale(0.5), pos(center().x,center().y+50),area(),anchor("center")])
        calcol.buf()
    },
    
    gameover:()=>{
        uiManager.displayGameOverScreen()
    },
    
    end:()=>{
        
        uiManager.displayEndGameScreen()
        
    }
};

for(const key in scenes){
    scene(key, scenes[key])
}
// go("school")
go("menu")