class Calcol{
    buffer =""
    write = true
    testos=`non puoi cancellare stai attento a cosa fai\nquando rispondi all'indovinello premi invio`
    indovino=`
    scegli il tuo personaggio,\n 
    prendi il binocolo
    `
    test=false
    //* soluzione:18392
    EnableCalcul(){
        onKeyPress("1", () => {
            if(this.write == true) {this.buffer += 1}
        })
        onKeyPress("2", () => {
            if(this.write== true) {this.buffer += 2}
        })
        onKeyPress("3", () => {
            if(this.write== true) {this.buffer +=3}
        })
        onKeyPress("4", () => {
            if(this.write== true) {this.buffer +=4}
        })
        onKeyPress("5", () => {
            if(this.write== true) {this.buffer +=5}
        })
        onKeyPress("6", () => {
            if(this.write== true) {this.buffer +=6}
        })
        onKeyPress("7", () => {
            if(this.write== true) {this.buffer +=7}
        })
        onKeyPress("8", () => {
            if(this.write== true) {this.buffer +=8}
        })
        onKeyPress("9", () => {
            if(this.write== true) {this.buffer +=9}
        })
        onKeyPress("0", () => {
            if(this.write== true) {this.buffer +=0}
        })
        onKeyPress("enter",()=>{
            this.input= (this.buffer)
            this.test=true
        })
        
    }
    buf(){
        add([
            text(this.testos, {
                size: 24,
                font: "creepy"
            }),
            pos(center().x-200,center().y-250),
            color(255,0,0)
        ])

        add([
            text(this.indovino, {
                size: 24,
                font: "creepy"
            }),
            pos(center().x+350,center().y-250),
            color(255,0,0)
        ])

        onUpdate(()=>{ //?update
            if(this.buffer.length >= 6){
                this.write = false
            }else{
                add([text(this.buffer),
                    pos(center().x-130,center().y-90),
                ])
            }
            if(this.input == 18392 && this.test==true){
                go("testo")
                this.input=""
            }
        })
        
    }

}
export const calcol = new Calcol()