export class Level{
    drawMapLayout(levelLayout, mappings) {
        const layerSettings = {
          tileWidth: 16,
          tileHeight: 12,
          tiles: mappings,
        }
    
        this.map = []
        for (const layerLayout of levelLayout) {
          this.map.push(addLevel(layerLayout, layerSettings))
        }
    
        for (const layer of this.map) {
          layer.use(scale(4))
        }
      }
    
    drawBackground(bgspritename){
        add([sprite(bgspritename), fixed(), scale(4)]) //con fixed tiene fermo lo sfondo
    }
}