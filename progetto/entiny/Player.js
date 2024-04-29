export class Player{
    constructor(posX, posY, speed, jumpoForce, nLives, CurrentLevelScen, isInTerminalScene){
        this.isInTerminalScene = isInTerminalScene
        this.CurrentLevelScen = CurrentLevelScen
        this.initialX = posX
        this.initialY = posY
        this.makePlayer()
        this.speed = speed
        this.jumpoForce = jumpoForce
        this.lives = nLives
        this.previousHeight = this.gameObj.pos.y
    }
    makePlayer(){
        this.gameObj = add([
            sprite("player", { anim: "idle" }),
            area({ shape: new Rect(vec2(0, 3), 8, 8) }),
            anchor("center"),
            pos(this.initialX, this.initialY),
            scale(4),
            body(),
            "player",
        ])
    }
}