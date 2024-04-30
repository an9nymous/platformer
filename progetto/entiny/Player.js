export class Player{
    isRespawning = false
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
    enablepassthroug(){ //migliora il passaggio tra i collider
        this.gameObj.onBeforePhysicsResolve((collision) => {
            if(collision.target.is("passthrough") && this.gameObj.isJumping()){ 
                collision.preventResolution() //?disattiva il comando
            }
            if (collision.target.is("passthrough") && isKeyDown("down")) {
                collision.preventResolution()
            }
        })
    }
    setPlayerControlls(){
        onKeyDown("left", ()=>{
            if(this.gameObj.curAnim()!== "run") this.gameObj.play("run") //se non è attaccata ad un gameobj 'play' si usa per i suoni
            this.gameObj.flipX=true //flippa lo sprite sull asse x
            if(!this.isRespawning) this.gameObj.move(-this.speed,0)
        })
        onKeyDown("right", ()=>{
            if(this.gameObj.curAnim()!== "run") this.gameObj.play("run") 
            this.gameObj.flipX=false //non flippa lo sprite
            if(!this.isRespawning) this.gameObj.move(this.speed,0)
        })
        onKeyDown("space", ()=>{
            if(this.gameObj.isGrounded() && !this.isRespawning ){
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
    respawnPlayer(){
        if(this.lives >0){
            this.gameObj.pos = vec2(this.initialX, this.initialY)
            this.isRespawning = true
            setTimeout(() => this.isRespawning=false, 500)
        }
    }
    update(){
        onUpdate(() =>{
            if(this.gameObj.pos.y > 1000){
                play("hit", {speed:1.5})

                this.respawnPlayer()
            }
        })
    }
}