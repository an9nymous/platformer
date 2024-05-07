class UIManager{
    displayLivesCount(player) {
       this.livesCountUI = add([
            text("", {
                font: "Round",
                size: 50,
                
        }),
        fixed(),
        pos(70, 10),
        ])
        this.livesCountUI.add([sprite("star-ico"), pos(-60,-5),scale(3),fixed()])
    }
    displayCoinCount(player) {
        this.coinCountUI = add([
          text("", {
            font: "Round",
            size: 50,
          }),
          {
            fullCoinCount: get("coin", { recursive: true }).length,
                //?usanto 'get' possiamo prendere tutti gli oggetti con il tag indicato (in questo caso coin) 
                //?recursive indica che verrà rifatto per assicurarsi di averl icontati tutti
          },
          fixed(),
          pos(70, 70),
        ])
    
        this.coinCountUI.add([sprite("coin-icon"), pos(-60, 0), scale(3), fixed()])
    }

    displayBlinkingUIMessage(content,position){
        const message = add([
            text(content,{
                size: 24,
                font: "Round"
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up",["flash-up","flash-down"])
        ])
        message.onStateEnter("flash-up", async ()=>{
            /*
             *l'opacità cambia gradualmente andando da 0 a 0.5 
             */
            await tween(
                message.opacity,
                0,
                0.5, //1 è iol massimo di opacità dove è "solido"
                (nextOpacityValue)=>message.opacity=nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-down")
        })
        message.onStateEnter("flash-down", async ()=>{
            await tween(
                message.opacity,
                1,
                0.5, 
                (nextOpacityValue)=>message.opacity=nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-up")
        })
    }
    displayMainMenu() {
        add([
            sprite("forest-background"),
            scale(4)
        ])
        add([
            sprite("logo"),
            scale(6),
            area(),
            anchor("center"), //! è ancorato al centro NON è posizionato al centro
            pos(center().x,center().y - 200)
        ])
        this.displayBlinkingUIMessage(
            "premi [enter] per iniziare",
            vec2(center().x, center().y+100)
        )

        onKeyPress("enter", () => {
            play("confirm-ui",{speed: 1.5}) //dovo aver caricato il suono permette di utilizzarlo
            go("Controls")
        })
    }
    displayTextMenu(){
        const testo = `
        non dovresti essere qui, \n
        anche tu stai aspettando? \n
        sono 4 anni che aspetto il\n
        commonwealth?\n
        non e' mai arrivato...
        `
        add([
            sprite("blackbg"),
            scale(4)
        ])
        add([text(testo),pos(400,100),color(255,0,0),{font:"creepy", size:50}])

        this.displayBlinkingUIMessage(
            "premi [enter] per iniziare",
            vec2(center().x, center().y+300)
        )

        onKeyPress("enter", () => {
            play("confirm-ui",{speed: 1.5}) //dovo aver caricato il suono permette di utilizzarlo
            go("segreto")
        })
    }
    displayControlsMenu(){
        add([
            sprite("forest-background"),
            scale(4)
        ])
        add([ //textbox della scritta controls
            text("controlli", { font: "Rounds", size:50}),
            area(),
            anchor("center"),
            pos(center().x,center().y - 200)
        ])
        const ControllerPrompt = add([
            pos(center().x + 30, center().y)
        ])
        ControllerPrompt.add([//?scritto così add aggiunge un child component all'oggetto
            sprite("up"),
            pos(0,-80) //*il posizionamento è relativo all'oggetto madre
        ]) 
        ControllerPrompt.add([sprite("down")])
        ControllerPrompt.add([sprite("left"),pos(-80,0)])
        ControllerPrompt.add([sprite("right"),pos(80,0)])
        ControllerPrompt.add([sprite("space"),pos(-200,0)])
        ControllerPrompt.add([
            text("salta", { font: "Round", size: 32 }),
            pos(-190, 100),
        ])
        ControllerPrompt.add([
            text("muoviti", { font: "Round", size: 32 }),
            pos(-20, 100),
        ])
        this.displayBlinkingUIMessage(
            "premi [ enter ] per continuare",
            vec2(center().x, center().y + 300)
        )
        onKeyPress("enter", () => {
            play("confirm-ui",{speed: 1.5}) 
            go("nigga")//!cambiarlo per cambiare la scena iniziale
        })
    }
    displayGameOverScreen() {
        add([rect(1280, 720), color(0, 0, 0)])
        add([
          text("SEI MORTO!", { size: 50, font: "Round" }),
          area(),
          anchor("center"),
          pos(center()),
        ])
    
        this.displayBlinkingUIMessage(
          "premi [ enter ] per riprovare",
          vec2(center().x, center().y + 100)
        )
    
        onKeyPress("enter", () => {
          play("confirm-ui")
          go(1)
        })
      }
    displayEndGameScreen() {
        add([rect(1280, 720), color(0, 0, 0)])
        add([
            text("hai vinto! grazie per aver giocato", { size: 50, font: "Round" }),
            area(),
            anchor("center"),
            pos(center()),
        ])

        this.displayBlinkingUIMessage(
            "premi [ Enter ] per giocare ancora",
            vec2(center().x, center().y + 100)
        )

        onKeyPress("enter", () => {
            play("confirm-ui")
            go("menu")
        })
    }
    darkbg(){
        add([rect(270,130),color(0,253,255),fixed()])
    }
}
export const uiManager = new UIManager()