export class Level{
    drawMapLayot(lvlLayt, mappings){
        const layersettings = {
            tilewidth:16,
            tileheight : 12,
            tiles:mappings
        }
        this.map = []
        for(const layerlayout of lvlLayt){ //è come il ciclo 'for in' in python
            this.map.push(addlevel(layerlayout, layersettings))
        }
        for (const layer of this.map){
            layer.use(scale(4))
        }
    }
    drawBackground(bgspritename){
        add([sprite(bgspritename), fixed(), scale(4)]) //con fixed tiene fermo lo sfondo
    }
}