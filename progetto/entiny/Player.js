import { calcol } from "../utils/Calcol.js"

export class Player{
    heightDelta=0
    isRespawning = false
    isMoving = false
    coyotelapse = 0.1
    hasJumped = false
    coins=0
    secret=false
    constructor(posX, posY, speed, jumpoForce, nLives, CurrentLevelScen, isInTerminalScene){
        this.isInTerminalScene = isInTerminalScene
        this.CurrentLevelScen = CurrentLevelScen
        this.initialX = posX
        this.initialY = posY
        this.creaPlayer()
        this.controlliGiocatore()
        this.speed = speed
        this.jumpoForce = jumpoForce
        this.lives = nLives
        this.previousHeight = this.gameObj.pos.y
    }
    creaPlayer(){
        this.gameObj = add([
            sprite("player", { anim: "idle" }),//?cambiare il primo arg dello sprite per cambiare lo sprite del personaggio
            /* *mettere nella riga AREA questa riga in commento per avere il collider dell'altro personaggio
             * {shape: new Rect(vec2(0,10), 10,25)}
             */
            scale(4),
            area({ shape: new Rect(vec2(0, 3), 8, 8) }),
            anchor("center"),
            pos(this.initialX, this.initialY),
            body(),
            "player",
        ])
    }
    PassaggioTrue(){ //migliora il passaggio tra i collider
        this.gameObj.onBeforePhysicsResolve(async (collision) => {
            if(collision.target.is("passthrough") && this.gameObj.isJumping()){ 
                collision.preventResolution() //?disattiva il comando
            }
            if (collision.target.is("passthrough") && isKeyDown("s")) {
                collision.preventResolution()
            }
            if(collision.target.is("Portales")){//portale viola
                go("nuovo")
            }
            if(collision.target.is("GPortales")){//portale verde
                go(1) 
            }
        })
        
    }
    OnCoin(){
        this.gameObj.onCollide("coin", (coin)=>{
            this.coins++
            destroy(coin)
            play("coin")
        })
    }
    controlliGiocatore(){
        onKeyDown("a", ()=>{
            if(this.gameObj.curAnim()!== "run") this.gameObj.play("run") //se non è attaccata ad un gameobj 'play' si usa per i suoni
            this.gameObj.flipX=true //flippa lo sprite sull asse x
            this.isMoving = true
            if(!this.isRespawning) this.gameObj.move(-this.speed,0)
        })
        onKeyDown("d", ()=>{
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
    calcol(){
        if(this.secret){
            calcol.EnableCalcul()
        }
    }
    respawn(){
        if(this.lives >0){
            this.gameObj.pos = vec2(this.initialX, this.initialY)
            this.lives--
            this.isRespawning = true
            setTimeout(() => this.isRespawning=false, 500)
        }
        else go("gameover")
    }
    enableMobVuln() {
        function colpoERespawn(context){
            play("hit", {speed:1.5})
            context.respawn()
        }
        //commenta fino a riga 114 per togliere le collisioni con i nemici
        this.gameObj.onCollide("spiders", ()=>colpoERespawn(this))
        this.gameObj.onCollide("flame", ()=>colpoERespawn(this))
        this.gameObj.onCollide("fish", ()=>colpoERespawn(this))
        this.gameObj.onCollide("axes", ()=>colpoERespawn(this))
        this.gameObj.onCollide("birds", ()=>colpoERespawn(this))
        this.gameObj.onCollide("saws", ()=>colpoERespawn(this))
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

                this.respawn()
            }
            if(!this.isMoving && this.gameObj.curAnim !=="idle") this.gameObj.play("idle")
            if(!this.gameObj.isGrounded() &&  this.heightDelta >0 && this.gameObj.curAnim() !== "jump-up"){
                this.gameObj.play("jump-up")
            }
            if(!this.gameObj.isGrounded() &&  this.heightDelta <0 && this.gameObj.curAnim() !== "jump-down"){
                this.gameObj.play("jump-down")
            }
            this.calcol()
        })
    }
    UcontoVite(livesCountUI){
        onUpdate(() =>{
            livesCountUI.text = this.lives
        })
    }
    UcontoCoin(coinCountUI) {
        
        onUpdate(() => {
            coinCountUI.text = `${this.coins} / ${coinCountUI.fullCoinCount}`
            if (this.coins === coinCountUI.fullCoinCount) {
                go(this.isInTerminalScene ? "end" : this.CurrentLevelScen + 1)
            }
            
        })
      }
}