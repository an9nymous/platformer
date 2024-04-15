// ? variabili generali

let GameObjects = []; // lista dei gameobj esistenti
let CurrentId= 0; // id del'gameobj

function Vector2(x, y){
    let Vector2 = {
        x : x, //queste sono le coordinate x e y
        y : y
    };
    return Vector2;
}

//funzione dei gameobj
function GameObject(position, scale, color) {
    let gameObject = {
        id: CurrentId, //id per indicarli
        position: position, //posizione
        scale: scale, //grandezza
        color: color // colore
    };
    CurrentId++;
    GameObjects.push(gameObject);
    return gameObject;
}