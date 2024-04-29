export const load = {
    fonts : () => {
        loadFont("Round","./asset/Round9x13.ttf")
    },
    assets:()=>{
        //?immagini dei controlli
        loadSprite("up", "./asset/Arrow_Up_Key_Dark.png")
        loadSprite("down", "./asset/Arrow_Down_Key_Dark.png")
        loadSprite("left", "./asset/Arrow_Left_Key_Dark.png")
        loadSprite("right", "./asset/Arrow_Right_Key_Dark.png")
        loadSprite("space", "./asset/Space_Key_Dark.png")

        loadSprite("forest-background","./asset/Forest_Background_0.png")//* le prime virgolette sono come vogliamo riferirci (come il tag) e le seconde sono il percorso 
        loadSprite("logo","./asset/Logo.png")
    },
sounds: () => {
    loadSound("confirm-ui", "./sounds/confirm-ui.wav")
}
}