import kaboom from "./libs/kaboom.mjs";
import { level1Layout, level1Mapping } from "./content/lvl1/Lvl1Lay.js";
import { Level } from "./utils/Level.js";
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/Loader.js";
import { Player } from "./entiny/Player.js";
import { attachedCamera } from "./utils/Camera.js"
import { level1Config } from "./content/lvl1/confing.js";


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
        
        
        attachedCamera(player.gameObj, 0, 200)
        lvl1.drawWaves("water","wave-reversed")
    },
    2:()=>{

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