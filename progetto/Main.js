import kaboom from "./libs/kaboom.mjs";
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/Loader.js";
kaboom({
    width:1280,
    height:720,
    letterbox:true,  //!Tiene fissi i parametri adattandosi alla schermata 

})
load.fonts()
load.assets()
//*livelli
const scenes= {
    menu:()=>{ //menù principale
        // add([text("test"),pos(500,500),color(0,0,0)])
        uiManager.displayMainMenu()
    },
    Controls:()=>{

    },
    1:()=>{

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