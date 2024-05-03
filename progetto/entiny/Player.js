export class Player{
    heightDelta=0
    isRespawning = false
    isMoving = false
    coyotelapse = 0.1
    hasJumped = false
    coins=0
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
            if(collision.target.is("invisible") && isKeyDown("j")){
                go("segreto")
            }
        })
    }
    enableCoin(){
        this.gameObj.onCollide("coin", (coin)=>{
            this.coins++
            destroy(coin)
            play("coin")
        })
    }
    setPlayerControlls(){
        onKeyDown("left", ()=>{
            if(this.gameObj.curAnim()!== "run") this.gameObj.play("run") //se non è attaccata ad un gameobj 'play' si usa per i suoni
            this.gameObj.flipX=true //flippa lo sprite sull asse x
            this.isMoving = true
            if(!this.isRespawning) this.gameObj.move(-this.speed,0)
        })
        onKeyDown("right", ()=>{
            if(this.gameObj.curAnim()!== "run") this.gameObj.play("run") 
            this.gameObj.flipX=false //non flippa lo sprite
            this.isMoving = true
            if(!this.isRespawning) this.gameObj.move(this.speed,0)
        })
        onKeyDown("space", ()=>{ //salto
            if(this.gameObj.isGrounded() && !this.isRespawning ){
                this.hasJumped = true
                this.gameObj.jump(this.jumpoForce)
                play("jump")
            }
            if(!this.gameObj.isGrounded()&& time() - this.timeGround< this.coyotelapse && !this.hasJumped){
                this.hasJumped = true
                this.gameObj.jump(this.jumpForce)
                play("jump")
            }
        })
        onKeyRelease(()=>{
            if(isKeyReleased("right") || isKeyReleased("left")){
                this.gameObj.play("idle")
                this.isMoving = false
            }
        })
    }
    respawnPlayer(){
        if(this.lives >0){
            this.gameObj.pos = vec2(this.initialX, this.initialY)
            this.lives--
            this.isRespawning = true
            setTimeout(() => this.isRespawning=false, 500)
        }
        else go("gameover")
    }
    update(){
        onUpdate(() =>{
            this.heightDelta = this.previousHeight - this.gameObj.pos.y
            this.previousHeight = this.gameObj.pos.y
            if (this.gameObj.isGrounded()) {
                this.hasJumped = false
                this.timeGround = time()
              }
            if(this.gameObj.pos.y > 1000){
                play("hit", {speed:1.5})

                this.respawnPlayer()
            }
            if(!this.isMoving && this.gameObj.curAnim !=="idle") this.gameObj.play("idle")
            if(!this.gameObj.isGrounded() &&  this.heightDelta >0 && this.gameObj.curAnim() !== "jump-up"){
                this.gameObj.play("jump-up")
            }
            if(!this.gameObj.isGrounded() &&  this.heightDelta <0 && this.gameObj.curAnim() !== "jump-down"){
                this.gameObj.play("jump-down")
            }

        })
    }
    updatelivesCount(livesCountUI){
        onUpdate(() =>{
            livesCountUI.text = this.lives
        })
    }
    updateCoinCount(coinCountUI) {
        
        onUpdate(() => {
            coinCountUI.text = `${this.coins} / ${coinCountUI.fullCoinCount}`
            if (this.coins === coinCountUI.fullCoinCount) {
                go(this.isInTerminalScene ? "end" : this.CurrentLevelScen + 1)
            }
            
        })
      }
}