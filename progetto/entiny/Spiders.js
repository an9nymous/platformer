export class Spiders{
  constructor(positions, ranges, speeds,type){
      this.ranges = ranges
      this.speeds=speeds
      this.spiders=[]
      for(const position of positions){
          this.spiders.push(
              add([
                sprite(`spider-${type}`, { anim: "crawl" }),
                pos(position),
                area({
                  shape: new Rect(vec2(0, 4.5), 20, 6), //?il primo valore è la posizione relativa all'oggetto
                  collisionIgnore: ["spiders"], //?questo comando serve a far ignorare il collider del tag inserito tra le parentesi
                }),
                anchor("center"),
                body(),
                scale(4),
                state("idle", ["idle", "crawl-left", "crawl-right"]), //?il primo parametro è lo stato di default
                offscreen(),
                "spiders",
              ])
            )
      }
  }
  async crawl(spider, moveBy, duration) {
      if (spider.currAnim !== "crawl") spider.play("crawl")
  
      await tween(
        spider.pos.x,
        spider.pos.x + moveBy,
        duration,
        (posX) => (spider.pos.x = posX),
        easings.easeOutSine
      )
    }
  setMovementPattern(){
    for(const [index,spider] of this.spiders.entries()){
        const idle =spider.onStateEnter("idle", async (previousState)=>{
            if(spider.curAnim() !=="idle") spider.play("idle")
            
              await new Promise((resolve) => {
                setTimeout(() => resolve(), 1000)
              })
      
              if (previousState === "crawl-left") {
                spider.enterState("crawl-right")
              } else {
                spider.jump()
                if (!spider.isOffScreen()) {
                  play("spider-atk", { volume: 0.6 })
                }
      
                spider.enterState("crawl-left")
              }
            })

        const crawlLeft = spider.onStateEnter("crawl-left", async () => {
            spider.flipX = false
    
            await this.crawl(
              spider,
              -this.ranges[index],
              this.speeds[index]
            )
            spider.enterState("idle", "crawl-left")
          })
        const crawlRight = spider.onStateEnter("crawl-right", async () => {
        spider.flipX = true

        await this.crawl(spider, this.ranges[index], this.speeds[index])
        spider.enterState("idle", "crawl-right")
        })
      onSceneLeave(()=>{
        idle.cancel()
        crawlLeft.cancel()
        crawlRight.cancel()
      })
    }
  }
  enablePassthrough() {
    for (const spider of this.spiders) {
      spider.onBeforePhysicsResolve((collision) => {
        if (collision.target.is("passthrough") && spider.isJumping()) {
          collision.preventResolution()
        }
      })
    }
  }
}