export class Projectiles {
    constructor(positions, ranges, type) {
      this.ranges= ranges
      this.type = type
      this.projectiles = []
      const aniMap={
        "projectile" : "swim",
        "flame" : "burn"
      }
      for (const position of positions) {
        this.projectiles.push(
          add([
            sprite(type, { anim: aniMap[type] }),
            area({ shape: new Rect(vec2(0), 12, 12) }),
            anchor("center"),
            pos(position),
            scale(4),
            rotate(type === "fish"? 90 : 0),
            state("launch", ["launch", "rotate", "fall"]),
            offscreen(),
            type,
          ])
        )
      }
    }
    setMovPattern(){
      for(const[index,projectile] of this.projectiles.entries()){
        const launch = projectile.onStateEnter("launch", async ()=>{
          if(this.type === "fish") projectile.flipX=false
          if(this.type === "flame") projectile.flipY=false
          await tween(
            projectile.pos.y,
            projectile.pos.y - this.ranges[index],
            2,
            (posY) =>projectile.pos.y = posY,
            easings.easeOutSine
          )
          projectile.enterState("fall")
        })
        // const rotate = projectile.onStateEnter("rotate", (nextState) => {
        //   projectile.rotateBy(180)
        //   projectile.enterState(nextState)
        // })
  
        const fall = projectile.onStateEnter("fall", async () => {
          if(this.type === "fish") projectile.flipX=true
          if(this.type === "flame") projectile.flipY=true
          await tween(
            projectile.pos.y,
            projectile.pos.y + this.ranges[index],
            2,
            (posY) => (projectile.pos.y = posY),
            easings.easeOutSine
          )
          projectile.enterState("launch")
        })
        onSceneLeave(()=>{
          launch.cancel()
          fall.cancel()
        })
      }
    }
  }