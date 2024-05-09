class Calcol{
    buffer =""
    write = true
    empty=""
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
        onKeyPress("enter", () => { 
            if(this.write ==true || false){this.buffer = "1"}
            // console.log("stringa pulita ora è " + this.buffer) 
        })
        
    }
    buf(){
        onUpdate(()=>{
            if(this.buffer.length >= 14){
                this.write = false
            }else{
                add([text(this.buffer),pos(center().x-130,center().y-90)])
            }
        })
        
    }

}
export const calcol = new Calcol()