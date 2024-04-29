class UIManager{
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
            go(1)
        })
    }
}
export const uiManager = new UIManager()