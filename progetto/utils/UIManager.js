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
    }
}
export const uiManager = new UIManager()