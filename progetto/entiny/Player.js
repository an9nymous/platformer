export class Player{
    constructor(posX, posY, speed, jumpoForce, nLives, CurrentLevelScen, isInTerminalScene){
        this.isInTerminalScene = isInTerminalScene
        this.CurrentLevelScen = CurrentLevelScen
        this.initialX = posX
        this.initialY = posY
        this.makePlayer()
        this.setPlayerControlls()
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
    setPlayerControlls(){
        onKeyDown("left", ()=>{
            if(this.gameObj.curAnim()!== "run") this.gameObj.play("run") //se non è attaccata ad un gameobj 'play' si usa per i suoni
            this.gameObj.flipX=true
            this.gameObj.move(-this.speed,0)
        })
        onKeyDown("right", ()=>{
            if(this.gameObj.curAnim()!== "run") this.gameObj.play("run") 
            this.gameObj.flipX=false
            this.gameObj.move(this.speed,0)
        })
        onKeyDown("space", ()=>{
            if(this.gameObj.isGrounded()){
                this.gameObj.jump(this.jumpoForce)
                play("jump")
            }
        })
        onKeyRelease(()=>{
            if(isKeyReleased("right") || isKeyReleased("left")){
                this.gameObj.play("idle")
            }
        })
    }
}