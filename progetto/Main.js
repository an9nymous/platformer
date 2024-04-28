import kaboom from "./libs/kaboom.mjs"
kaboom({
    width:1280,
    height:720,
    letterbox:true,  //!Tiene fissi i parametri adattandosi alla schermata 

})
//*livelli
const scenes= {
    menu:()=>{ //menù principale
        // add([text("test"),pos(500,500),color(0,0,0)])
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